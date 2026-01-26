const mongoose = require("mongoose");

const examSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
    },
    conductedBy: {
      type: String,
      required: true,
    },
    eligibility: {
      type: String,
      required: true,
    },
    examPattern: {
      type: String,
      required: true,
    },
    officialWebsite: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Exam", examSchema);
