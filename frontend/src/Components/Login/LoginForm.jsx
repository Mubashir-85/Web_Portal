import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, GraduationCap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login submitted:", formData);
    alert("Login successful!");
    navigate("/");
  };

  return (
    <section className="bg-slate-50 min-h-screen flex items-center justify-center py-12 px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* -------- LEFT SIDE - Branding -------- */}
        <div className="hidden lg:block">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[#0d2176] blur-lg opacity-40" />
              <GraduationCap className="relative w-12 h-12 text-[#0d2176]" strokeWidth={1.5} />
            </div>
            <span className="text-3xl font-bold text-slate-900">
              StudentPortal
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 mb-6">
            Welcome Back to Your{" "}
            <span className="text-[#0d2176]">Academic Journey</span>
          </h1>

          <p className="text-lg text-slate-900/60 mb-8">
            Access your personalized dashboard to explore courses, track scholarship applications, and stay updated on exam schedules.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#0d2176]"></div>
              <p className="text-slate-900/70">Track your scholarship applications</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#0d2176]"></div>
              <p className="text-slate-900/70">Save your favorite courses</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#0d2176]"></div>
              <p className="text-slate-900/70">Get personalized recommendations</p>
            </div>
          </div>
        </div>

        {/* -------- RIGHT SIDE - Login Form -------- */}
        <div className="w-full">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-10">
            
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center gap-3 mb-6 justify-center">
              <GraduationCap className="w-8 h-8 text-[#0d2176]" strokeWidth={1.5} />
              <span className="text-2xl font-bold text-slate-900">
                StudentPortal
              </span>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900">Sign In</h2>
              <p className="text-slate-900/60 mt-2">
                Enter your credentials to access your account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail size={18} className="text-slate-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d2176] focus:border-transparent transition"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-slate-900 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock size={18} className="text-slate-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-12 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d2176] focus:border-transparent transition"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#0d2176] border-slate-300 rounded focus:ring-[#0d2176]"
                  />
                  <span className="text-sm text-slate-900/70">Remember me</span>
                </label>
                <a href="#" className="text-sm text-[#0d2176] hover:underline font-semibold">
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#0d2176] text-white font-semibold py-3 px-6 rounded-lg hover:bg-black transition-all duration-300"
              >
                Sign In
              </button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-slate-500">Or continue with</span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-300 rounded-lg hover:bg-slate-50 transition-all duration-300"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-sm font-semibold text-slate-900">Google</span>
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-300 rounded-lg hover:bg-slate-50 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-sm font-semibold text-slate-900">Facebook</span>
                </button>
              </div>

              {/* Sign Up Link */}
              <p className="text-center text-sm text-slate-900/60 mt-6">
                Don't have an account?{" "}
                <Link to="/signup" className="text-[#0d2176] hover:underline font-semibold">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LoginForm;
