import React from "react";

const HeroScholarship = () => {
  return (
    <section className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        
        {/* Breadcrumb */}
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          Home <span className="mx-1">/</span> Scholarships Listing
        </p>

        {/* Title Row */}
        <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          
          {/* Left */}
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-[#0d2176]">
                Indian Scholarship Directory
              </h1>

              {/* <span className="rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                FY 2023–24
              </span> */}
            </div>

            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Browse verified financial aid opportunities from the National
              Scholarship Portal (NSP), state departments, and CSR initiatives.
            </p>
          </div>

          {/* Right Actions */}
          {/* <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
              ⬇ Export List
            </button>

            <button className="rounded-md bg-[#0d2176] px-4 py-2 text-sm font-medium text-white hover:bg-blue-800">
              🔔 Get Alerts
            </button>
          </div> */}
        </div>

      </div>
    </section>
  );
};

export default HeroScholarship;
