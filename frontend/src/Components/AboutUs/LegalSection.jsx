import React, { useState } from "react";
import { ChevronDown, FileText, Shield } from "lucide-react";

const LegalSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Terms of Service",
    //   subtitle: "Last updated: October 15, 2023",
      icon: <FileText size={20} />,
      content:
        "These Terms of Service govern your access to and use of the platform. By accessing the Educational Awareness Portal, you agree to comply with all policies, usage guidelines, and applicable laws. Misuse of the platform may result in restricted access."
    },
    {
      title: "Privacy Policy",
    //   subtitle: "Effective Date: January 1, 2024",
      icon: <Shield size={20} />,
      content:
        "We are committed to safeguarding your personal data. Information collected is used solely for improving platform functionality and user experience. We do not sell or share personal data with third parties without consent."
    }
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* -------- Header -------- */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 text-sm text-slate-500 uppercase tracking-widest">
            <span className="h-px w-12 bg-slate-300"></span>
            Legal Documentation
            <span className="h-px w-12 bg-slate-300"></span>
          </div>

          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-slate-900">
            Terms & Privacy Protocol
          </h2>

          <p className="mt-4 text-slate-900/60 text-lg">
            Please review our comprehensive policies governing the use of
            StudentAware services and our commitment to data protection.
          </p>
        </div>

        {/* -------- Accordion -------- */}
        <div className="mt-12 space-y-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-all durantion-300"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-[#0d2176]">
                    {section.icon}
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg">
                      {section.title}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {section.subtitle}
                    </p>
                  </div>
                </div>

                <ChevronDown
                  size={20}
                  className={`text-slate-500 transition-all duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Content */}
              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-900/70 leading-relaxed border-t border-slate-200 transition-all durantion-300">
                  <div className="pt-4">{section.content}</div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LegalSection;
