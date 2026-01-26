import React from "react";
import { CalendarDays, FileCheck, BarChart3 } from "lucide-react";

const DeadlinesUpdates = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="flex items-end justify-between border-b border-slate-900/10 pb-6">
          <div>
            <p className="text-sm font-semibold tracking-widest text-academic-navy">
              ANNOUNCEMENTS
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              Deadlines & Updates
            </h2>
          </div>

          <a
            href="#"
            className="text-sm font-semibold text-academic-navy"
          >
            View Archive →
          </a>
        </div>

        {/* CARDS */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">

          {/* CARD 1 – URGENT */}
          <div className="relative flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm">
            <span className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-red-600" />

            <div className="flex items-center justify-between">
              <span className="rounded-md bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
                URGENT
              </span>
              <span className="text-xs text-slate-900/50">
                2 days left
              </span>
            </div>

            <h3 className="mt-6 text-lg font-bold text-slate-900">
              National Scholarship Deadline
            </h3>

            <hr className="my-4 border-slate-900/10" />

            {/* CTA pinned to bottom */}
            <p className="mt-auto pt-4 text-sm font-medium text-slate-900/60">
              Oct 12th, 2023
            </p>
          </div>

          {/* CARD 2 – UPCOMING */}
          <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <CalendarDays className="h-5 w-5 text-[#0d2176]" />
              <span className="text-xs text-slate-900/50">
                Upcoming
              </span>
            </div>

            <h3 className="mt-6 text-lg font-bold text-slate-900">
              Engineering <br /><span>Entrance Exam</span>
            </h3>

            <hr className="my-4 border-slate-900/10" />

            {/* CTA pinned to bottom */}
            <p className="mt-auto pt-4 text-sm font-medium text-slate-900/60">
              Oct 15th, 2023
            </p>
          </div>

          {/* CARD 3 – OPEN */}
          <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <FileCheck className="h-5 w-5 text-green-800" />
              <span className="text-xs text-slate-900/50">
                Open
              </span>
            </div>

            <h3 className="mt-6 text-lg font-bold text-slate-900">
              Fall <br /><span>Semester Applications</span>
            </h3>

            <hr className="my-4 border-slate-900/10" />

            {/* CTA pinned to bottom */}
            <p className="mt-auto pt-4 text-sm font-medium text-slate-900/60">
              Nov 1st, 2023
            </p>
          </div>

          {/* CARD 4 – PENDING */}
          <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <BarChart3 className="h-5 w-5 text-orange-800" />
              <span className="text-xs text-slate-900/50">
                Pending
              </span>
            </div>

            <h3 className="mt-6 text-lg font-bold text-slate-900">
              Medical <br /><span>Entrance Results</span>
            </h3>

            <hr className="my-4 border-slate-900/10" />

            {/* CTA pinned to bottom */}
            <p className="mt-auto pt-4 text-sm font-medium text-slate-900/60">
              Dec 10th, 2023
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DeadlinesUpdates;
