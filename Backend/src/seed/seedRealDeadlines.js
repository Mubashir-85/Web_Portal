require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = require("../config/db");

const Course = require("../models/Course");
const Exam = require("../models/Exams");
const Scholarship = require("../models/Scholarship");

const coursesData = require("../data/course");
const examsData = require("../data/exams");
const scholarshipsData = require("../data/scholarship");

const seedDatabase = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Course.deleteMany({});
    await Exam.deleteMany({});
    await Scholarship.deleteMany({});

    // Real scholarship deadlines (update these with actual dates from official sources)
    const scholarshipsWithRealDeadlines = [
      {
        ...scholarshipsData.find(s => s.name === "Reliance Foundation Scholarship"),
        deadline: new Date("2025-10-07"), // October 7, 2025
        status: 'open',
      },
      {
        ...scholarshipsData.find(s => s.name === "National Scholarship Portal"),
        deadline: new Date("2025-12-31"),
        status: 'open',
      },
      {
        ...scholarshipsData.find(s => s.name === "INSPIRE Scholarship"),
        deadline: new Date("2025-11-30"),
        status: 'open',
      },
      {
        ...scholarshipsData.find(s => s.name === "AICTE Pragati Scholarship"),
        deadline: new Date("2025-10-15"),
        status: 'open',
      },
      {
        ...scholarshipsData.find(s => s.name === "Post Matric Scholarship"),
        deadline: new Date("2025-09-30"),
        status: 'open',
      },
    ].filter(s => s.name); // Filter out undefined entries

    // Real exam deadlines (update these with actual dates)
    const examsWithRealDeadlines = [
      {
        ...examsData.find(e => e.name === "UPSC Civil Services"),
        registrationDeadline: new Date("2025-03-15"),
        examDate: new Date("2025-06-15"),
        status: 'upcoming',
      },
      {
        ...examsData.find(e => e.name === "SSC CGL"),
        registrationDeadline: new Date("2025-04-30"),
        examDate: new Date("2025-07-20"),
        status: 'upcoming',
      },
      {
        ...examsData.find(e => e.name === "IBPS PO"),
        registrationDeadline: new Date("2025-08-31"),
        examDate: new Date("2025-10-15"),
        status: 'upcoming',
      },
      {
        ...examsData.find(e => e.name === "GATE"),
        registrationDeadline: new Date("2025-09-30"),
        examDate: new Date("2026-02-01"),
        status: 'upcoming',
      },
      {
        ...examsData.find(e => e.name === "CAT"),
        registrationDeadline: new Date("2025-09-15"),
        examDate: new Date("2025-11-26"),
        status: 'upcoming',
      },
    ].filter(e => e.name);

    // Real course deadlines (update these with actual dates)
    const coursesWithRealDeadlines = [
      {
        ...coursesData.find(c => c.title === "Web Development"),
        enrollmentDeadline: new Date("2025-05-31"),
        startDate: new Date("2025-06-15"),
        status: 'open',
      },
      {
        ...coursesData.find(c => c.title === "Data Science"),
        enrollmentDeadline: new Date("2025-06-15"),
        startDate: new Date("2025-07-01"),
        status: 'open',
      },
      {
        ...coursesData.find(c => c.title === "Machine Learning"),
        enrollmentDeadline: new Date("2025-07-31"),
        startDate: new Date("2025-08-15"),
        status: 'open',
      },
      {
        ...coursesData.find(c => c.title === "Digital Marketing"),
        enrollmentDeadline: new Date("2025-05-15"),
        startDate: new Date("2025-06-01"),
        status: 'open',
      },
    ].filter(c => c.title);

    // Insert data with real deadlines
    if (scholarshipsWithRealDeadlines.length > 0) {
      await Scholarship.insertMany(scholarshipsWithRealDeadlines, { ordered: false });
    }
    if (examsWithRealDeadlines.length > 0) {
      await Exam.insertMany(examsWithRealDeadlines, { ordered: false });
    }
    if (coursesWithRealDeadlines.length > 0) {
      await Course.insertMany(coursesWithRealDeadlines, { ordered: false });
    }

    // Insert remaining data without deadlines
    const remainingScholarships = scholarshipsData.filter(
      s => !scholarshipsWithRealDeadlines.find(rs => rs.name === s.name)
    );
    const remainingExams = examsData.filter(
      e => !examsWithRealDeadlines.find(re => re.name === e.name)
    );
    const remainingCourses = coursesData.filter(
      c => !coursesWithRealDeadlines.find(rc => rc.title === c.title)
    );

    if (remainingScholarships.length > 0) {
      await Scholarship.insertMany(remainingScholarships, { ordered: false });
    }
    if (remainingExams.length > 0) {
      await Exam.insertMany(remainingExams, { ordered: false });
    }
    if (remainingCourses.length > 0) {
      await Course.insertMany(remainingCourses, { ordered: false });
    }

    console.log("✅ Database seeded successfully with REAL deadlines!");
    console.log(`📚 ${scholarshipsWithRealDeadlines.length} scholarships with deadlines`);
    console.log(`📝 ${examsWithRealDeadlines.length} exams with deadlines`);
    console.log(`🎓 ${coursesWithRealDeadlines.length} courses with deadlines`);
    console.log("\n⚠️  NOTE: Update the dates in seedRealDeadlines.js with actual deadlines from official sources!");
    
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    await mongoose.disconnect();
    process.exit(1);
  }
};

seedDatabase();
