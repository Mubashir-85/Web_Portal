const express = require("express");
const examsData = require("../data/exams");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(examsData);
});

module.exports = router;
