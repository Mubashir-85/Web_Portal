require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = require("../config/db");

const Course = require("../models/Course");
const Exam = require("../models/Exams");
const Scholarship = require("../models/Scholarship");

const coursesData = require("../data/course");
const examsData = require("../data/exams");
const scholarshipsData = require("../data/scholarship");

// Helper function to generate random date within next N days
const getRandomFutureDate = (minDays, maxDays) => {
  const today = new Date();
  const randomDays = Math.floor(Math.random() * (maxDays - minDays + 1)) + minDays;
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + randomDays);
  return futureDate;
};

const seedDatabase = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Course.deleteMany({});
    await Exam.deleteMany({});
    await Scholarship.deleteMany({});

    // Add deadlines to scholarships (random dates within next 30 days)
    const scholarshipsWithDeadlines = scholarshipsData.slice(0, 10).map((scholarship, index) => ({
      ...scholarship,
      deadline: getRandomFutureDate(1, 30),
      status: index < 3 ? 'open' : index < 7 ? 'upcoming' : 'open',
    }));

    // Add deadlines to exams (random dates within next 30 days)
    const examsWithDeadlines = examsData.slice(0, 10).map((exam, index) => ({
      ...exam,
      registrationDeadline: getRandomFutureDate(2, 25),
      examDate: getRandomFutureDate(15, 45),
      status: index < 5 ? 'upcoming' : 'ongoing',
    }));

    // Add deadlines to courses (random dates within next 30 days)
    const coursesWithDeadlines = coursesData.slice(0, 10).map((course, index) => ({
      ...course,
      enrollmentDeadline: getRandomFutureDate(3, 28),
      startDate: getRandomFutureDate(10, 40),
      status: index < 4 ? 'open' : index < 7 ? 'upcoming' : 'open',
    }));

    // Insert data with deadlines
    await Scholarship.insertMany(scholarshipsWithDeadlines, { ordered: false });
    await Exam.insertMany(examsWithDeadlines, { ordered: false });
    await Course.insertMany(coursesWithDeadlines, { ordered: false });

    // Insert remaining data without deadlines
    await Scholarship.insertMany(scholarshipsData.slice(10), { ordered: false });
    await Exam.insertMany(examsData.slice(10), { ordered: false });
    await Course.insertMany(coursesData.slice(10), { ordered: false });

    console.log("✅ Database seeded successfully with deadlines!");
    console.log(`📚 ${scholarshipsWithDeadlines.length} scholarships with deadlines`);
    console.log(`📝 ${examsWithDeadlines.length} exams with deadlines`);
    console.log(`🎓 ${coursesWithDeadlines.length} courses with deadlines`);
    
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    await mongoose.disconnect();
    process.exit(1);
  }
};

seedDatabase();
