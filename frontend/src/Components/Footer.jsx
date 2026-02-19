// import React from "react";
// import {
//   GraduationCap,
//   Mail,
//   Phone,
//   Globe,
//   Share2,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   const scrollTotop = ()=>{
//     window.scrollTo({top:0, left:0, behavior:"smooth"});

//   }
//   return (
    
//     <footer className="bg-[#030c32]  border-academic-navy">
//       <div className="mx-auto max-w-7xl px-6 py-20">

//         {/* TOP GRID */}
//         <div className="grid grid-cols-1 gap-12 md:grid-cols-4">

//           {/* BRAND */}
//           <div>
//             <div className="flex items-center gap-2 text-white">
//               <GraduationCap className="h-6 w-6 text-white " />
//               <span className="text-lg font-bold">StudentPortal</span>
//             </div>

//             <p className="mt-4 max-w-sm text-gray-50 font-thin">
//               Empowering students with precise information. Join thousands of
//               scholars navigating their future with our resources.
//             </p>
//           </div>

//           {/* PLATFORM */}
//           <div>
//             <h4 className="text-sm font-bold tracking-widest text-white">
//               PLATFORM
//             </h4>
//             <ul className="mt-4 space-y-3 text-gray-50 font-thin flex flex-col">
//               <Link to="/course" onClick={scrollTotop}>Courses</Link>
//               <Link to="/scholarship" onClick={scrollTotop}>Scholarships</Link>
//               <Link to="" onClick={scrollTotop}>Exams</Link>
              
//             </ul>
//           </div>

//           {/* ORGANIZATION */}
//           <div>
//             <h4 className="text-sm font-bold tracking-widest text-white">
//               ORGANIZATION
//             </h4>
//             <ul className="mt-4 space-y-3 text-gray-50 font-thin flex flex-col">
//               <Link to="/aboutus" onClick={scrollTotop}>About Us</Link>
//               <Link>Careers</Link>
//               <Link>Privacy Policy</Link>
//               <Link>Terms of Service</Link>
//             </ul>
//           </div>

//           {/* CONTACT */}
//           <div>
//             <h4 className="text-sm font-bold tracking-widest text-white">
//               CONTACT
//             </h4>
//             <ul className="mt-4 space-y-3 text-gray-50 font-thin">
//               <li className="flex items-center gap-2">
//                 <Mail className="h-4 w-4 text-academic-navy" />
//                 support@studentportal.com
//               </li>
//               <li className="flex items-center gap-2">
//                 <Phone className="h-4 w-4 text-academic-navy" />
//                 +1 (555) 123-4567
//               </li>
//             </ul>
//           </div>

//         </div>

//         {/* DIVIDER */}
//         {/* <div className="my-12 h-px bg-slate-900/10" /> */}

//         {/* BOTTOM BAR */}
//         <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
//           <p className="text-sm text-slate-900/60">
//             © 2026 StudentPortal. All rights reserved.
//           </p>

//           <div className="flex items-center gap-4 text-slate-900/60">
//             <Globe className="h-5 w-5 cursor-pointer hover:text-academic-navy" />
//             <Share2 className="h-5 w-5 cursor-pointer hover:text-academic-navy" />
//             <Mail className="h-5 w-5 cursor-pointer hover:text-academic-navy" />
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const platformLinks = [
    { name: 'Courses', href: '/course', description: 'Browse all available courses' },
    { name: 'Scholarships', href: '/scholarship', description: 'Find funding opportunities' },
    { name: 'Exams', href: '/exams', description: 'View exam schedules' },
    { name: 'Resources', href: '#', description: 'Access study materials' },
  ];

  const organizationLinks = [
    { name: 'About Us', href: '#', description: 'Learn our story' },
    { name: 'Careers', href: '#', description: 'Join our team' },
    { name: 'Privacy Policy', href: '#', description: 'Read our privacy terms' },
    { name: 'Terms of Service', href: '#', description: 'View usage terms' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 via-transparent to-blue-950/20 pointer-events-none" />
      
      {/* Animated background shapes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-500 blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                <GraduationCap className="relative w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                StudentPortal
              </span>
            </div>
            
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Empowering students with precise information. Join thousands of scholars navigating their future with our comprehensive resources and tools.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="group relative p-2.5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              PLATFORM
            </h3>
            <ul className="space-y-4">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-start gap-2 text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    <span className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400">
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                    <span>
                      <span className="block font-medium">{link.name}</span>
                      <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                        {link.description}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              ORGANIZATION
            </h3>
            <ul className="space-y-3">
              {organizationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              CONTACT
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:support@studentportal.com"
                  className="group flex items-center gap-3 p-3 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-indigo-500/30 hover:bg-slate-900/50 transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Email</p>
                    <p className="text-sm text-slate-300 group-hover:text-white truncate transition-colors">
                      support@studentportal.com
                    </p>
                  </div>
                </a>
              </li>
              
              <li>
                <a 
                  href="tel:+15551234567"
                  className="group flex items-center gap-3 p-3 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-blue-500/30 hover:bg-slate-900/50 transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Phone</p>
                    <p className="text-sm text-slate-300 group-hover:text-white transition-colors">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </a>
              </li>

              <li className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/30 border border-slate-800">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Location</p>
                  <p className="text-sm text-slate-300">
                    San Francisco, CA
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} StudentPortal. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;