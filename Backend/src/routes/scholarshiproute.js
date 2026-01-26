const express = require("express");
const scholarshipsData = require("../data/scholarship");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(scholarshipsData);
});

module.exports = router;
