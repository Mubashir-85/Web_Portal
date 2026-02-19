import { useEffect, useState, useMemo } from "react";
import ScholarshipCard from "./ScholarshipCard";
import getScholarships from "../Services/scholarship";

const ITEMS_PER_PAGE = 6;

const ScholarshipExplorer = () => {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedEligibility, setSelectedEligibility] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [minGrant, setMinGrant] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // ================= FETCH DATA =================
  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const res = await getScholarships();
        const data = res?.data || res;
        setScholarships(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching scholarships:", err);
        setScholarships([]);
      } finally {
        setLoading(false);
      }
    };

    fetchScholarships();
  }, []);

  // ================= FILTER LOGIC =================
  const filteredScholarships = useMemo(() => {
    let filtered = [...scholarships];

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((item) =>
        selectedCategories.includes(item.category)
      );
    }

    if (selectedEligibility.length > 0) {
      filtered = filtered.filter((item) =>
        selectedEligibility.includes(item.eligibility)
      );
    }

    if (minGrant > 0) {
      filtered = filtered.filter(
        (item) => Number(item.amount || 0) >= minGrant
      );
    }

    if (selectedStatus) {
      filtered = filtered.filter(
        (item) => item.status === selectedStatus
      );
    }

    return filtered;
  }, [scholarships, selectedCategories, selectedEligibility, minGrant, selectedStatus]);

  const totalPages = Math.ceil(filteredScholarships.length / ITEMS_PER_PAGE);

  const paginatedScholarships = filteredScholarships.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories, selectedEligibility, minGrant, selectedStatus]);

  const handleCheckboxChange = (value, setter, current) => {
    if (current.includes(value)) {
      setter(current.filter((item) => item !== value));
    } else {
      setter([...current, value]);
    }
  };

  // ================= UI =================
  return (
    <div className="bg-[#F3F5FF] min-h-screen px-6 py-10">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* ================= SIDEBAR ================= */}
        <div className="lg:col-span-1 max-w-[360px] sticky top-6">
          <div className="bg-white rounded-xl border border-[#DCE3F1] shadow-sm">

            {/* HEADER */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-[#E5EAF3]">
              <h3 className="text-[#1F2937] font-semibold tracking-wide">
                REFINE SEARCH
              </h3>
              <button
                onClick={() => {
                  setSelectedCategories([]);
                  setSelectedEligibility([]);
                  setSelectedStatus("");
                  setMinGrant(0);
                }}
                className="text-[#3B82F6] text-sm font-medium"
              >
                CLEAR ALL
              </button>
            </div>

            <div className="px-6 py-6 space-y-8">

              {/* PROVIDER CATEGORY */}
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#8A94A6] mb-4">
                  PROVIDER CATEGORY
                </p>

                <div className="space-y-3 text-sm text-[#374151]">
                  {[
                    "Government (NSP/State)",
                    "Corporate / Private",
                    "Merit-cum-Means",
                    "Reserved (SC/ST/OBC)",
                  ].map((cat) => (
                    <label key={cat} className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 accent-[#3B82F6]"
                        checked={selectedCategories.includes(cat)}
                        onChange={() =>
                          handleCheckboxChange(
                            cat,
                            setSelectedCategories,
                            selectedCategories
                          )
                        }
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* ELIGIBILITY LEVEL */}
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#8A94A6] mb-4">
                  ELIGIBILITY LEVEL
                </p>

                <div className="space-y-3 text-sm text-[#374151]">
                  {[
                    "Schooling (1-12)",
                    "Undergraduate (UG)",
                    "Postgraduate (PG)",
                  ].map((level) => (
                    <label key={level} className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 accent-[#3B82F6]"
                        checked={selectedEligibility.includes(level)}
                        onChange={() =>
                          handleCheckboxChange(
                            level,
                            setSelectedEligibility,
                            selectedEligibility
                          )
                        }
                      />
                      {level}
                    </label>
                  ))}
                </div>
              </div>

              {/* MINIMUM GRANT */}
              {/* <div>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-xs font-semibold tracking-wider text-[#8A94A6]">
                    MINIMUM GRANT
                  </p>
                  <span className="text-[#1F2937] font-semibold">
                    ₹{minGrant.toLocaleString()}
                  </span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="200000"
                  step="1000"
                  value={minGrant}
                  onChange={(e) => setMinGrant(Number(e.target.value))}
                  className="w-full accent-[#3B82F6]"
                />

                <div className="flex justify-between text-xs text-[#8A94A6] mt-2">
                  <span>₹0</span>
                  <span>₹2,00,000+</span>
                </div>
              </div> */}

              {/* APPLICATION STATUS */}
              {/* <div>
                <p className="text-xs font-semibold tracking-wider text-[#8A94A6] mb-4">
                  APPLICATION STATUS
                </p>

                <div className="space-y-3 text-sm text-[#374151]">
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="status"
                      className="w-4 h-4 accent-[#3B82F6]"
                      checked={selectedStatus === "open"}
                      onChange={() => setSelectedStatus("open")}
                    />
                    Currently Open
                  </label>

                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="status"
                      className="w-4 h-4 accent-[#3B82F6]"
                      checked={selectedStatus === "closing"}
                      onChange={() => setSelectedStatus("closing")}
                    />
                    Closing Soon
                  </label>
                </div>
              </div> */}

              {/* APPLY BUTTON */}
              <button
                onClick={() => setCurrentPage(1)}
                className="w-full bg-[#0F172A] hover:bg-[#1E293B] text-white py-3 rounded-lg font-medium transition"
              >
                Apply Filters
              </button>

            </div>
          </div>
        </div>

        {/* ================= LIST ================= */}
        <div className="lg:col-span-3 space-y-6">

          <p className="text-sm text-gray-500">
            Showing {filteredScholarships.length} results
          </p>

          {loading ? (
            <p>Loading...</p>
          ) : paginatedScholarships.length > 0 ? (
            paginatedScholarships.map((scholarship) => (
              <ScholarshipCard
                key={scholarship.id}
                scholarship={scholarship}
              />
            ))
          ) : (
            <p className="text-gray-500">No scholarships found.</p>
          )}

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 pt-6">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-8 h-8 rounded-md text-sm ${
                    currentPage === index + 1
                      ? "bg-[#3B82F6] text-white"
                      : "border border-[#DCE3F1]"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ScholarshipExplorer;
