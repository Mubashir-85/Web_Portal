import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { logout, getStoredUser, isAuthenticated } from "./Services/auth";
import { LogOut, User } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    if (isAuthenticated()) {
      const userData = getStoredUser();
      setUser(userData);
      setIsLoggedIn(true);
    }
  }, [location]);

  const handleLogout = () => {
    logout();
    setUser(null);
    setIsLoggedIn(false);
    alert("Logged out successfully!");
    navigate("/login");
  };

  const dynamicNavbar = () => {
    // if (path === "/course") return "bg-black text-white border-b border-gray-200";
    // return "bg-white border-b border-gray-200 shadow-md";
  };

  return (
    <nav className={`w-full border-b border-gray-200 bg-white`}>
      <div className={`mx-auto flex h-16 w-full px-15 items-center justify-between px-6 transition-all duration-300 ${dynamicNavbar()}`}>
        {/* Logo */}
        <div className="flex items-center gap-2 text-lg font-bold text-[#0d2176]">
          <Link to="/home" className="flex items-center gap-2">
            <span className="text-2xl">🎓</span>
            <span className="text-2xl">StudentPortal</span>
          </Link>
        </div>

        {/* Center Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link to="/course" className="hover:text-blue-600 cursor-pointer">
            COURSES
          </Link>
          <Link to="/scholarship" className="hover:text-blue-600 cursor-pointer">
            SCHOLARSHIPS
          </Link>
          <Link to="/exams" className="hover:text-blue-600 cursor-pointer">
            EXAMS
          </Link>
          <Link to="/aboutus" className="hover:text-blue-600 cursor-pointer">
            ABOUT US
          </Link>
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <User size={18} />
                <span>Hi, {user?.fullName?.split(' ')[0]}</span>
              </div>
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition-all duration-300"
              >
                <LogOut size={16} />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="text-sm font-medium text-gray-700 hover:text-blue-600">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="rounded-md bg-[#0d2176] px-4 py-2 text-sm font-medium text-white hover:bg-black">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
