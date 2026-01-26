import { VscVerifiedFilled } from "react-icons/vsc";
import { FaGraduationCap } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 mt-20">
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block rounded-full border border-[#0d2176] bg-white px-4 py-1 text-sm font-bold tracking-wide text-[#0d2176]">
              THE #1 STUDENT RESOURCE
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              Unlock Your
              <br />
              <span className="text-[#0d2176] italic">Academic Potential</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-900/70">
              Your comprehensive guide to top-tier courses, scholarship
              opportunities, and rigorous exam preparations. Begin your academic
              journey with confidence.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="inline-flex items-center justify-center rounded-lg bg-[#0d2176] px-6 py-3 text-sm font-semibold text-white transition-all duration-500 hover:bg-black">
                Explore Courses →
              </button>

              <button className="inline-flex items-center justify-center rounded-lg border border-academic-navy px-6 py-3 text-sm font-semibold text-academic-navy transition-all hover:bg-academic-navy hover:bg-black hover:text-white duration-500 ">
                Find Scholarships
              </button>
            </div>

            {/* TRUST BADGES */}
            <div className="mt-10 flex flex-wrap gap-8 text-sm font-medium text-slate-900/70">
              <div className="flex items-center gap-2">
                <VscVerifiedFilled className="text-green-500 size-5" /> Verified
                Information
              </div>
              <div className="flex items-center gap-2"> <FaGraduationCap className="text-black size-5"/>Accredited Sources</div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/Home/Herosection.jpg"
                alt="Students studying"
                className="h-full w-full object-cover"
              />
            </div>

            {/* FLOATING CARD */}
            {/* <div className="absolute -bottom-6 left-6 rounded-xl bg-white px-6 py-4 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-wide text-academic-navy">
                New Grant
              </p>
              <p className="mt-1 text-xl font-bold text-slate-900">
                $5,000 Award
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
