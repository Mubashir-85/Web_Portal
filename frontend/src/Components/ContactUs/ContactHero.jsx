import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* -------- LEFT CONTENT -------- */}
        <div>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
            Get in Touch with{" "}
            <span className="text-[#0d2176]">StudentPortal</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-900/60">
            Have questions about courses, scholarships, or exams? We're here to help you navigate your academic journey. Reach out to us and we'll get back to you as soon as possible.
          </p>

          {/* Contact Info Cards */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-[#0d2176]">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Email Us</p>
                <p className="text-slate-900/60">support@studentportal.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-[#0d2176]">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Call Us</p>
                <p className="text-slate-900/60">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-[#0d2176]">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Visit Us</p>
                <p className="text-slate-900/60">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* -------- RIGHT IMAGE -------- */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a"
              alt="Contact us"
              className="h-full w-full object-cover grayscale"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactHero;
