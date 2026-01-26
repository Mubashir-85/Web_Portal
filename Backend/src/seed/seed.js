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
    await Course.deleteMany();
    await Exam.deleteMany();
    await Scholarship.deleteMany();

    // Insert fresh data
    await Course.insertMany(coursesData);
    await Exam.insertMany(examsData);
    await Scholarship.insertMany(scholarshipsData);

    console.log("Database seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedDatabase();
