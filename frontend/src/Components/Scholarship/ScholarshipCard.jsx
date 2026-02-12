const ScholarshipCard = ({ scholarship }) => {
  return (
    <div className="bg-white border border-[#DCE3F1] rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <div>
          <span className="text-xs bg-[#F3F5FF] text-[black] px-2 py-1 rounded-md font-bold">
            {/* {scholarship.category?.trim() || scholarship.name?.slice(0 , 3).toUpperCase() || "NA"} */}
            {scholarship.category?.trim() ||
              scholarship.name
                ?.split(" ")
                .map((word) => word[0])
                .join("")
                .toUpperCase()}
          </span>

          <h3 className="text-[#1F2937] font-bold mt-3 text-lg">
            {scholarship.name}
          </h3>

          <div className="flex gap-4 text-sm font-semibold text-[#6B7280] mt-2">
            <span>{scholarship.provider}</span>
            <span>{scholarship.eligibility}</span>
          </div>
        </div>

        <div className="text-right">
          <div className="text-sm  text-[#6B7280] mt-3">
            <span className="font-bold text-xl">Award Value</span> <br />
            {scholarship.benefits}
          </div>
          <a
            href={scholarship.applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-[#0d2176] hover:bg-[black] text-white px-4 py-2  rounded-lg text-sm transition"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};
export default ScholarshipCard;
