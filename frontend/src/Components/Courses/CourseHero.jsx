// src/components/CourseHero.jsx
import React from "react";

const CourseHero = () => {
  return (
    <section className="bg-slate-50 border-b border-slate-900/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Breadcrumb */}
        <p className="text-sm font-medium text-slate-900/60">
          HOME <span className="mx-2">›</span> COURSE EXPLORER
        </p>

        {/* Main Content */}
        <div className="mt-6 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* Left */}
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Find the Right Undergraduate Course
            </h1>

            <p className="mt-4 text-lg text-slate-900/60">
              Explore 40+ skill-based courses across IT & Computer Science,
              Career-Oriented programs, Soft Skills, and General Awareness to
              support learning, employability, and personal development.
            </p>
          </div>

          {/* Right Stats */}
          {/* <div className="flex gap-10">
            <div className="border-l border-slate-900/10 pl-6">
              <p className="text-2xl font-bold text-academic-navy">
                1,200+
              </p>
              <p className="mt-1 text-sm font-medium text-slate-900/60">
                COLLEGES LISTED
              </p>
            </div>

            <div className="border-l border-slate-900/10 pl-6">
              <p className="text-2xl font-bold text-academic-navy">
                15.5L
              </p>
              <p className="mt-1 text-sm font-medium text-slate-900/60">
                ANNUAL APPLICANTS
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
