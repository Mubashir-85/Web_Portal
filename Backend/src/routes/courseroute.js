const express = require("express");
const coursesData = require("../data/course");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(coursesData);
});

module.exports = router;
