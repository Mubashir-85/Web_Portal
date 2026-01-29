import React, { useState, useMemo } from "react";
import { IoFilterCircle } from "react-icons/io5";

/* ---------- STATIC COURSE DATA (TEMPORARY) ---------- */
const COURSES_DATA = [
  { id: 1, title: "Web Development", category: "IT & Computer Courses", description: "HTML, CSS, JS, React", skills: ["HTML","CSS","JS","React"], platformUrl: "https://coursera.org" },
  { id: 2, title: "Python Programming", category: "IT & Computer Courses", description: "Python basics to advanced", skills: ["Python"], platformUrl: "https://udemy.com" },
  { id: 3, title: "Java Programming", category: "IT & Computer Courses", description: "Core Java and OOP", skills: ["Java","OOP"], platformUrl: "https://coursera.org" },
  { id: 4, title: "C Programming", category: "IT & Computer Courses", description: "Programming fundamentals", skills: ["C"], platformUrl: "https://udemy.com" },
  { id: 5, title: "Data Structures", category: "IT & Computer Courses", description: "DSA fundamentals", skills: ["DSA"], platformUrl: "https://coursera.org" },

  { id: 6, title: "Digital Marketing", category: "Career-Oriented Courses", description: "SEO & marketing", skills: ["SEO"], platformUrl: "https://udemy.com" },
  { id: 7, title: "Graphic Designing", category: "Career-Oriented Courses", description: "Design tools", skills: ["Design"], platformUrl: "https://coursera.org" },
  { id: 8, title: "UI/UX Design", category: "Career-Oriented Courses", description: "User interface design", skills: ["UI","UX"], platformUrl: "https://coursera.org" },

  { id: 9, title: "Communication Skills", category: "Soft Skills", description: "Improve speaking", skills: ["Communication"], platformUrl: "https://khanacademy.org" },
  { id: 10, title: "Interview Preparation", category: "Soft Skills", description: "Crack interviews", skills: ["Interview"], platformUrl: "https://linkedin.com/learning" },

  { id: 11, title: "Financial Literacy", category: "General Awareness", description: "Money basics", skills: ["Finance"], platformUrl: "https://swayam.gov.in" },
  { id: 12, title: "Career Planning", category: "General Awareness", description: "Career guidance", skills: ["Planning"], platformUrl: "https://swayam.gov.in" },
];

/* ---------- FILTER CATEGORIES ---------- */
const COURSE_CATEGORIES = [
  "IT & Computer Courses",
  "Career-Oriented Courses",
  "Soft Skills",
  "General Awareness",
];

const CourseExplorer = () => {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const courses = COURSES_DATA;

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
        : [...prev, category]
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
                <IoFilterCircle className="text-white flex justify-center items-center mx-auto size-5"/> 


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
              <label key={category} className="flex items-center gap-2 text-sm">
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
            Found <span className="font-semibold">{filteredCourses.length}</span>{" "}
            relevant courses
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl border border-slate-900/10 p-5 hover:shadow-lg transition"
              >
                <img src="" alt="" className="bg-black h-45 border w-full" />
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
        </main>
      </div>
    </section>
  );
};

export default CourseExplorer;
