import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I find scholarships that match my profile?",
      answer: "Navigate to our Scholarships page where you can browse through various scholarship opportunities. Each listing includes eligibility criteria, application deadlines, and award amounts to help you find the perfect match."
    },
    {
      question: "Are the courses listed on your platform accredited?",
      answer: "Yes, all courses featured on StudentPortal are from accredited institutions. We verify each course listing to ensure quality and legitimacy before adding them to our platform."
    },
    {
      question: "How often is exam information updated?",
      answer: "We update exam schedules, registration deadlines, and related information in real-time. Our team monitors official sources daily to ensure you have the most current information available."
    },
    {
      question: "Can I get personalized guidance for my academic journey?",
      answer: "While our platform provides comprehensive resources, you can contact our support team for general guidance. For personalized academic counseling, we recommend reaching out through our contact form."
    },
    {
      question: "Is there a cost to use StudentPortal?",
      answer: "StudentPortal is completely free to use. We believe that access to educational information should be available to everyone without barriers."
    }
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* -------- Header -------- */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 text-sm text-slate-500 uppercase tracking-widest">
            <span className="h-px w-12 bg-slate-300"></span>
            Frequently Asked Questions
            <span className="h-px w-12 bg-slate-300"></span>
          </div>

          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-slate-900">
            Quick Answers to Common Questions
          </h2>

          <p className="mt-4 text-slate-900/60 text-lg">
            Find answers to the most common questions about StudentPortal. Can't find what you're looking for? Contact us directly.
          </p>
        </div>

        {/* -------- FAQ Accordion -------- */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-[#0d2176]">
                    <HelpCircle size={20} />
                  </div>

                  <h3 className="font-semibold text-slate-900 text-lg pr-4">
                    {faq.question}
                  </h3>
                </div>

                <ChevronDown
                  size={20}
                  className={`text-slate-500 transition-all duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-900/70 leading-relaxed border-t border-slate-200 transition-all duration-300">
                  <div className="pt-4 pl-14">{faq.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
