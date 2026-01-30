import React from "react";
import { Eye, Lightbulb } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="bg-slate-100 py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* -------- Section Heading -------- */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Advancing Educational Equity
          </h2>

          <p className="mt-6 text-lg text-slate-900/60">
            We operate on the fundamental belief that high-quality information
            is a catalyst for academic success. Our platform democratizes
            access to opportunities that were previously fragmented or hidden.
          </p>
        </div>

        {/* -------- Cards -------- */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* -------- Mission Card -------- */}
          <div className="relative rounded-xl bg-white border border-slate-200 shadow-sm p-8">

            {/* Left Accent Border */}
            <div className="absolute left-0 top-0 h-full w-1 bg-[#0d2176] rounded-l-xl"></div>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-[#0d2176]">
                <Lightbulb size={20} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Our Mission
              </h3>
            </div>

            <p className="text-slate-900/60 leading-relaxed">
              To create a transparent, centralized ecosystem where students can
              seamlessly discover and apply for educational opportunities,
              ensuring that merit and ambition are the only prerequisites for success.
            </p>
          </div>

          {/* -------- Vision Card -------- */}
          <div className="relative rounded-xl bg-white border border-slate-200 shadow-sm p-8">

            {/* Left Accent Border */}
            <div className="absolute left-0 top-0 h-full w-1 bg-green-600 rounded-l-xl"></div>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                <Eye size={20} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Our Vision
              </h3>
            </div>

            <p className="text-slate-900/60 leading-relaxed">
              A future where information asymmetry in education is eliminated,
              enabling every student to fully realize their academic potential
              through accessible guidance and financial support.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
