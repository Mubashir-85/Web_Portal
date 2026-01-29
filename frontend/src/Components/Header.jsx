import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  const dynamicNavbar = () => {
    // if (path === "/course") return "bg-black text-white border-b border-gray-200";

    // return "bg-white border-b border-gray-200 shadow-md";
  };
  return (
    <nav className={`w-full border-b border-gray-200 bg-white`}>
      <div className={`mx-auto flex h-16 w-full px-15 items-center justify-between px-6 transition-all duration-300 ${dynamicNavbar()}`}>
        {/* Logo */}
        <div className="flex items-center gap-2 text-lg font-bold text-[#0d2176]">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🎓</span>
            <span className="text-2xl">StudentPortal</span>
          </Link>
        </div>

        {/* Center Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link to="/course" className="hover:text-blue-600 cursor-pointer">
            COURSES
          </Link>
          <Link to="/" className="hover:text-blue-600 cursor-pointer">
            SCHOLARSHIPS
          </Link>
          <Link to="/" className="hover:text-blue-600 cursor-pointer">
            EXAMS
          </Link>
          <Link to="" className="hover:text-blue-600 cursor-pointer">
            ABOUT US
          </Link>
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Login
          </button>
          <button className="rounded-md bg-[#0d2176] px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
