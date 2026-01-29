import React from "react";

const AboutHero = () => {
  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* -------- LEFT CONTENT -------- */}
        <div>
          
          

          {/* Heading */}
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
            Bridging Ambition with{" "}
            <span className="text-[#0d2176]">Academic Opportunity</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg text-slate-900/60">
            StudentAware is the definitive resource for students navigating the
            complexities of higher education. We provide verified data on
            scholarships, competitive exams, and university courses.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-md bg-[#0d2176] px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800 transition">
              Browse Resources
            </button>

            <button className="rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition">
              Our Methodology
            </button>
          </div>
        </div>

        {/* -------- RIGHT IMAGE -------- */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Students studying together"
              className="h-full w-full object-cover grayscale"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutHero;
