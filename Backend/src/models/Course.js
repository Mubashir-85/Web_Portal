const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    skills: {
      type: [String],
      default: [],
    },
    image: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
    },
    platformUrl: {
      type: String,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Course", courseSchema);
