import { useEffect, useState } from "react";
import getExams from "../Services/exams";

export default function ExamsExplore() {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const data = await getExams();
        setExams(data);
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    fetchExams();
  }, []);

  return (
    <section className="bg-slate-100 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-8">
        {/* LEFT SIDEBAR */}
        <div className="lg:w-72 space-y-6">
          {/* Filters */}
          <div className="bg-white border rounded-md p-5">
            <h3 className="text-xs tracking-widest text-gray-400 mb-4">
              CATEGORY
            </h3>

            {[
              "Engineering",
              "Medical & Dental",
              "Civil Services",
              "Management (MBA)",
            ].map((item, i) => (
              <label key={i} className="flex items-center gap-2 mb-2 text-sm">
                <input type="checkbox" className="accent-blue-600" />
                {item}
              </label>
            ))}

            <hr className="my-4" />

            <h3 className="text-xs tracking-widest text-gray-400 mb-3">
              APPLICATION STATUS
            </h3>

            {["Open Applications", "Counselling Stage", "Results Declared"].map(
              (item, i) => (
                <label key={i} className="flex items-center gap-2 mb-2 text-sm">
                  <input type="checkbox" className="accent-blue-600" />
                  {item}
                </label>
              ),
            )}
          </div>

          {/* Assistance Card */}
          <div className="bg-slate-800 text-white p-6 rounded-md">
            <h4 className="font-semibold mb-2">NEED ASSISTANCE?</h4>
            <p className="text-sm text-slate-300 mb-4">
              Our helpdesk can guide you through JoSAA and MCC counselling
              processes.
            </p>
            <button className="bg-white text-slate-800 text-xs font-semibold px-4 py-2 w-full">
              CONTACT HELPDESK
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <p className="text-sm text-gray-500">
              SHOWING{" "}
              <span className="font-semibold text-gray-700">8 RESULTS</span> FOR
              ALL INDIA
            </p>
            <p className="text-sm text-gray-500">
              SORT BY:{" "}
              <span className="font-semibold text-gray-700">
                Recent Activity
              </span>
            </p>
          </div>

          {loading ? (
            <p>Loading exams...</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {exams.map((exam) => (
                <div
                  key={exam.id}
                  className="bg-white border rounded-md p-6 space-y-4"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold bg-slate-100 px-2 py-1 rounded">
                      {exam.category.toUpperCase()}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      {exam.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      Conducted By: {exam.conductedBy}
                    </p>
                  </div>

                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <strong>Eligibility:</strong> {exam.eligibility}
                    </p>
                    <p>
                      <strong>Exam Pattern:</strong> {exam.examPattern}
                    </p>
                  </div>

                  <div className="flex gap-3 pt-3">
                    <a
                      href={exam.officialWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800 text-white px-4 py-2 text-xs font-semibold"
                    >
                      OFFICIAL WEBSITE
                    </a>

                    <button className="border px-4 py-2 text-xs font-semibold text-gray-600">
                      DETAILS
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom Button */}
          <div className="text-center mt-10">
            <button className="border px-8 py-3 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50">
              BROWSE ALL STATE EXAMS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
