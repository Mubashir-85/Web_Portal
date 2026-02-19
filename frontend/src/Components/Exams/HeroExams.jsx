import { Search } from "lucide-react";

const  HeroExams = ()=> {
  return (
    <section className="border-b border-gray-200 py-14 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-start md:justify-between gap-10">

        {/* LEFT CONTENT */}
        <div className="max-w-2xl">
          {/* Breadcrumb */}
          <div className="text-xs tracking-widest text-gray-400 mb-5">
            PORTAL › <span className="font-semibold text-gray-600">EXAMS DIRECTORY</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            National Entrance{" "}
            <em className="italic font-medium text-slate-600">
              Examinations
            </em>
          </h1>

          {/* Description */}
          <p className="mt-5 text-gray-500 leading-relaxed">
            Official repository for Indian entrance exams including JEE, NEET,
            UPSC, GATE, and CAT. Access cut-offs, counselling schedules, and
            admission notices.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        {/* <div className="w-full md:w-80"> */}
          {/* Search Box */}
          {/* <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mb-3 focus-within:ring-2 focus-within:ring-blue-500">
            <input
              type="text"
              placeholder="Search Exam Name..."
              className="flex-1 outline-none text-sm"
            />
            <Search size={18} className="text-gray-500" />
          </div> */}

          {/* Quick Links */}
          {/* <div className="text-xs tracking-wider text-gray-400">
            <span className="mr-2">QUICK LINKS:</span>
            <a href="#" className="font-semibold text-gray-700 mr-4 hover:text-blue-600">
              JEE ADV
            </a>
            <a href="#" className="font-semibold text-gray-700 mr-4 hover:text-blue-600">
              UPSC MAINS
            </a>
            <a href="#" className="font-semibold text-gray-700 hover:text-blue-600">
              NEET UG
            </a>
          </div> */}
        {/* </div> */}

      </div>
    </section>
  );
}
export default HeroExams; 
