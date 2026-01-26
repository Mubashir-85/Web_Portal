import React from "react";

const Header = () => {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-lg font-bold text-[#0d2176]">
          <span className="text-2xl">🎓</span>
          <span className="text-2xl">StudentPortal</span>
        </div>

        {/* Center Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer">HOME</li>
          <li className="hover:text-blue-600 cursor-pointer">COURSES</li>
          <li className="hover:text-blue-600 cursor-pointer">SCHOLARSHIPS</li>
          <li className="hover:text-blue-600 cursor-pointer">EXAMS</li>
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
