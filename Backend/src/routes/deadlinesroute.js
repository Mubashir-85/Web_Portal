const express = require("express");
const router = express.Router();
const Scholarship = require("../models/Scholarship");
const Exam = require("../models/Exams");
const Course = require("../models/Course");

// @route   GET /api/deadlines
// @desc    Get upcoming deadlines from scholarships, exams, and courses
// @access  Public
router.get("/", async (req, res) => {
  try {
    const today = new Date();
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(today.getDate() + 30);

    // Fetch upcoming scholarships with deadlines
    const scholarships = await Scholarship.find({
      deadline: { $gte: today, $lte: thirtyDaysFromNow },
    })
      .sort({ deadline: 1 })
      .limit(10);

    // Fetch upcoming exams with registration deadlines
    const exams = await Exam.find({
      $or: [
        { registrationDeadline: { $gte: today, $lte: thirtyDaysFromNow } },
        { examDate: { $gte: today, $lte: thirtyDaysFromNow } },
      ],
    })
      .sort({ registrationDeadline: 1 })
      .limit(10);

    // Fetch upcoming courses with enrollment deadlines
    const courses = await Course.find({
      $or: [
        { enrollmentDeadline: { $gte: today, $lte: thirtyDaysFromNow } },
        { startDate: { $gte: today, $lte: thirtyDaysFromNow } },
      ],
    })
      .sort({ enrollmentDeadline: 1 })
      .limit(10);

    // Format deadlines
    const deadlines = [];

    // Add scholarships
    scholarships.forEach((scholarship) => {
      const daysLeft = Math.ceil(
        (new Date(scholarship.deadline) - today) / (1000 * 60 * 60 * 24)
      );
      deadlines.push({
        id: scholarship._id,
        type: "scholarship",
        title: scholarship.name,
        subtitle: "Scholarship Deadline",
        date: scholarship.deadline,
        daysLeft,
        status: daysLeft <= 3 ? "urgent" : daysLeft <= 7 ? "upcoming" : "open",
        icon: "scholarship",
      });
    });

    // Add exams
    exams.forEach((exam) => {
      const deadline = exam.registrationDeadline || exam.examDate;
      const daysLeft = Math.ceil(
        (new Date(deadline) - today) / (1000 * 60 * 60 * 24)
      );
      const isExamDate = !exam.registrationDeadline;
      
      deadlines.push({
        id: exam._id,
        type: "exam",
        title: exam.name,
        subtitle: isExamDate ? "Exam Date" : "Registration Deadline",
        date: deadline,
        daysLeft,
        status: daysLeft <= 3 ? "urgent" : "upcoming",
        icon: "calendar",
      });
    });

    // Add courses
    courses.forEach((course) => {
      const deadline = course.enrollmentDeadline || course.startDate;
      const daysLeft = Math.ceil(
        (new Date(deadline) - today) / (1000 * 60 * 60 * 24)
      );
      const isStartDate = !course.enrollmentDeadline;
      
      deadlines.push({
        id: course._id,
        type: "course",
        title: course.title,
        subtitle: isStartDate ? "Course Starts" : "Enrollment Deadline",
        date: deadline,
        daysLeft,
        status: "open",
        icon: "file",
      });
    });

    // Sort all deadlines by date
    deadlines.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Return top 4 most urgent
    res.status(200).json({
      success: true,
      count: deadlines.length,
      data: deadlines.slice(0, 4),
    });
  } catch (error) {
    console.error("Error fetching deadlines:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching deadlines",
    });
  }
});

module.exports = router;
