import React from "react";
import {
  GraduationCap,
  Mail,
  Phone,
  Globe,
  Share2,
} from "lucide-react";

const Footer = () => {
  return (
    
    <footer className="bg-[#030c32]  border-academic-navy">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2 text-white">
              <GraduationCap className="h-6 w-6 text-white " />
              <span className="text-lg font-bold">StudentPortal</span>
            </div>

            <p className="mt-4 max-w-sm text-gray-50 font-thin">
              Empowering students with precise information. Join thousands of
              scholars navigating their future with our resources.
            </p>
          </div>

          {/* PLATFORM */}
          <div>
            <h4 className="text-sm font-bold tracking-widest text-white">
              PLATFORM
            </h4>
            <ul className="mt-4 space-y-3 text-gray-50 font-thin">
              <li>Courses</li>
              <li>Scholarships</li>
              <li>Exams</li>
              <li>Insights</li>
            </ul>
          </div>

          {/* ORGANIZATION */}
          <div>
            <h4 className="text-sm font-bold tracking-widest text-white">
              ORGANIZATION
            </h4>
            <ul className="mt-4 space-y-3 text-gray-50 font-thin">
              <li>About Us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-bold tracking-widest text-white">
              CONTACT
            </h4>
            <ul className="mt-4 space-y-3 text-gray-50 font-thin">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-academic-navy" />
                support@studentportal.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-academic-navy" />
                +1 (555) 123-4567
              </li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        {/* <div className="my-12 h-px bg-slate-900/10" /> */}

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-slate-900/60">
            © 2026 StudentPortal. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-slate-900/60">
            <Globe className="h-5 w-5 cursor-pointer hover:text-academic-navy" />
            <Share2 className="h-5 w-5 cursor-pointer hover:text-academic-navy" />
            <Mail className="h-5 w-5 cursor-pointer hover:text-academic-navy" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
