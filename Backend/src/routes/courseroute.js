const express = require("express");
const coursesData = require("../data/course");

const router = express.Router();

router.get("/", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 6;
  const search = req.query.search ? req.query.search.toLocaleLowerCase() : "";

  let filteredCourses = coursesData;
  if (search) {
    filteredCourses = coursesData.filter(
      (course) =>
        course.title.toLowerCase().includes(search) ||
        course.skills.join(" ").toLowerCase().includes(search),
    );
  }

  // then paginate
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedCourses = filteredCourses.slice(startIndex, endIndex);

  res.status(200).json({
    courses: paginatedCourses,
    currentPage: page,
    totalPages: Math.ceil(filteredCourses.length / limit),
    courses: paginatedCourses,
  });
});

module.exports = router;
