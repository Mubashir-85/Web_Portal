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

    // Insert fresh data
    await Course.insertMany(coursesData,{ordered: false});
    await Exam.insertMany(examsData,{ordered: false});
    await Scholarship.insertMany(scholarshipsData,{ordered: false});

    console.log("Database seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    await mongoose.disconnect()
    process.exit(1);
  }
};

seedDatabase();
