import React, { useState, useMemo, useEffect } from "react";
import { IoFilterCircle } from "react-icons/io5";
import getCourses from "../Services/courses";

/* ---------- FILTER CATEGORIES ---------- */
// Object for image lookup
const CATEGORY_IMAGES = {
  "IT & Computer Courses": "/Courses/IT-Image.jpg",
  "Career-Oriented Courses": "/Courses/Job-oriented.jpg",
  "Soft Skills": "/Courses/Soft-Skills.jpg",
  "General Awareness": "/Courses/General-Awarness.jpg",
};

// Convert object keys into array for mapping
const COURSE_CATEGORIES = Object.keys(CATEGORY_IMAGES);


const CourseExplorer = () => {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // const courses = COURSES_DATA;

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses(page, 6, search);
        setCourses(data.courses);
        setTotalPages(data.totalPages);
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    };
    fetchCourses();
  }, [page, search]);

  /* ---------- FILTER LOGIC ---------- */
  const filteredCourses = useMemo(() => {
    return (courses || []).filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.skills.join(" ").toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(course.category);

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategories, courses]);

  /* ---------- HANDLERS ---------- */
  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedCategories([]);
  };

  return (
    <section className="bg-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* ---------- FILTER PANEL ---------- */}
        <aside className="bg-white  border border-slate-900/10  h-fit">
          <div className="bg-[#0F172A] flex items-center gap-1 py-2 rounded-t-lg justify-start mb-6 px-2">
            <div>
              <IoFilterCircle className="text-white flex justify-center items-center mx-auto size-5" />
            </div>
            <div>
              <h3 className="font-bold  text-white mx-auto">SEARCH FILTERS</h3>
            </div>
          </div>
          <div className="px-6 pb-6">
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full mb-6 rounded-lg border border-slate-900/20 px-4 py-2 text-sm focus:outline-none"
            />

            <p className="text-sm font-semibold text-slate-900 mb-3">
              Course Categories
            </p>

            <div className="space-y-2">
              {COURSE_CATEGORIES.map((category) => (
                <label
                  key={category}
                  className="flex items-center gap-2 text-sm"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                  />
                  {category}
                </label>
              ))}
            </div>

            <button
              onClick={clearFilters}
              className="mt-6 w-full rounded-lg border border-slate-900/20 py-2 text-sm font-semibold"
            >
              Clear All Filters
            </button>
          </div>
        </aside>

        {/* ---------- RESULTS ---------- */}
        <main className="md:col-span-3">
          <p className="mb-6 text-sm text-slate-900/60">
            Found{" "}
            <span className="font-semibold">{filteredCourses.length}</span>{" "}
            relevant courses
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl border border-slate-900/10 p-5 hover:shadow-lg transition"
              >
                <img
                  src={CATEGORY_IMAGES[course.category]}
                  alt={course.title}
                  className="w-full h-40 object-cover rounded-lg"
                />

                <span className="inline-block mb-3 mt-2 text-xs font-bold text-[#0d2176]">
                  {course.category}
                </span>

                <h4 className="font-bold text-[20px] text-slate-900">
                  {course.title}
                </h4>

                <p className="mt-2 text-[13px] text-slate-900/60">
                  {course.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {course.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded bg-slate-100 px-2 py-1 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={course.platformUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-academic-navy"
                >
                  View Course →
                </a>
              </div>
            ))}
          </div>
          {/* ---------- PAGINATION ---------- */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Prev
            </button>

            <span className="text-sm font-semibold">
              Page {page} of {totalPages}
            </span>

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </main>
      </div>
    </section>
  );
};

export default CourseExplorer;
