import React from "react";
import { BookOpen, ClipboardList } from "lucide-react";
import { FaGraduationCap } from "react-icons/fa";

const AcademicResources = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Comprehensive Academic Resources
          </h2>
          <p className="mt-4 text-lg text-slate-900/60">
            Explore our curated database tailored to support your educational
            success and career aspirations.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* CARD 1 */}
          <div className="flex h-full flex-col rounded-2xl border border-slate-900/10 bg-white p-8 transition hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50">
              <BookOpen className="h-6 w-6 text-[#0d2176]" />
            </div>

            <h3 className="mt-6 text-xl font-bold text-[#0d2176]">
              Academic Courses
            </h3>

            <p className="mt-3 text-slate-900/60">
              Discover degree programs and professional certifications from
              accredited universities worldwide.
            </p>

            <a
              href="/course"
              className="mt-auto inline-flex items-center pt-6 font-semibold text-[#0d2176]"
            >
              Browse Directory →
            </a>
          </div>

          {/* CARD 2 */}
          <div className="flex h-full flex-col rounded-2xl border border-slate-900/10 bg-white p-8 transition hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50">
              <FaGraduationCap className="h-6 w-6 text-green-900" />
            </div>

            <h3 className="mt-6 text-xl font-bold text-green-900">
              Scholarships
            </h3>

            <p className="mt-3 text-slate-900/60">
              Discover merit-based and need-based scholarships that help reduce
              education costs and support students across various fields and
              regions.
            </p>

            <a
              href="/scholarship"
              className="mt-auto inline-flex items-center pt-6 font-semibold text-green-900"
            >
              Find Scholarships →
            </a>
          </div>

          {/* CARD 3 */}
          <div className="flex h-full flex-col rounded-2xl border border-slate-900/10 bg-white p-8 transition hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50">
              <ClipboardList className="h-6 w-6 text-orange-800" />
            </div>

            <h3 className="mt-6 text-xl font-bold text-orange-800">
              Exams
            </h3>

            <p className="mt-3 text-slate-900/60">
              Get essential details on exam syllabi, schedules, eligibility, and
              preparation resources for academic and competitive exams.
            </p>

            <a
              href="#"
              className="mt-auto inline-flex items-center pt-6 font-semibold text-orange-800"
            >
              Prepare Now →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AcademicResources;
