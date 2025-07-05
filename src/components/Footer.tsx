// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { Icons } from "./Icon";

// const Footer = () => {
//   return (
//     <footer className="relative bg-[#0f1d22] text-white">
//       <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C9AB81] to-transparent" />

//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:py-16">
//           <div className="col-span-1 flex flex-col items-center space-y-6 md:col-span-2 lg:col-span-1 lg:items-start">
//             <Link href="/" className="group">
//               <Image
//                 src="/images/logo.png"
//                 width={281}
//                 height={74}
//                 alt="Abaseen Restaurant Logo"
//                 className="h-auto w-32 transition-transform duration-300 group-hover:scale-105 lg:w-36"
//               />
//             </Link>

//             <p className="text-center text-sm leading-relaxed text-[#9C9E9F] lg:text-left lg:text-base">
//               Authentic flavors, unforgettable experiences. Discover the taste
//               of tradition at Abaseen.
//             </p>

//             <div className="flex space-x-4">
//               <Link
//                 href="https://www.instagram.com/abaseenmcr/"
//                 target="_blank"
//                 className="group rounded-full bg-[#C9AB81]/10 p-3 text-[#C9AB81] transition-all duration-300 hover:bg-[#C9AB81] hover:text-[#0f1d22]"
//                 aria-label="Follow us on Instagram"
//               >
//                 <Icons.instagram className="h-5 w-5" />
//               </Link>
//               <Link
//                 href="https://www.facebook.com/abaseenmanchester/"
//                 target="_blank"
//                 className="group rounded-full bg-[#C9AB81]/10 p-3 text-[#C9AB81] transition-all duration-300 hover:bg-[#C9AB81] hover:text-[#0f1d22]"
//                 aria-label="Follow us on Facebook"
//               >
//                 <Icons.facebook className="h-5 w-5" />
//               </Link>
//               <Link
//                 href="https://g.co/kgs/2wH8Uzf"
//                 target="_blank"
//                 className="group rounded-full bg-[#C9AB81]/10 p-3 text-[#C9AB81] transition-all duration-300 hover:bg-[#C9AB81] hover:text-[#0f1d22]"
//                 aria-label="Find us on Google"
//               >
//                 <Icons.google className="h-5 w-5" />
//               </Link>
//             </div>
//           </div>

//           <div className="space-y-6">
//             <h3 className="text-lg font-semibold uppercase tracking-wider text-[#C9AB81]">
//               Quick Links
//             </h3>
//             <nav className="flex flex-col space-y-3">
//               {[
//                 { href: "/", label: "Home" },
//                 { href: "/menu", label: "Menu" },
//                 { href: "/about-us", label: "Our Story" },
//                 { href: "/table-booking", label: "Reservations" },
//                 { href: "/contact", label: "Contact Us" },
//               ].map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className="group text-sm uppercase tracking-wide text-[#9C9E9F] transition-colors duration-300 hover:text-[#C9AB81]"
//                 >
//                   <span className="relative">
//                     {link.label}
//                     <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#C9AB81] transition-all duration-300 group-hover:w-full"></span>
//                   </span>
//                 </Link>
//               ))}
//             </nav>
//           </div>
//           {/*big screen */}
//           <div className="hidden space-y-6 md:block">
//             <h3 className="text-lg font-semibold uppercase tracking-wider text-[#C9AB81]">
//               Contact Info
//             </h3>
//             <div className="space-y-4">
//               <div className="group">
//                 <div className="mb-2 flex items-center space-x-2">
//                   <div className="h-1 w-1 rounded-full bg-[#C9AB81]"></div>
//                   <span className="text-xs font-medium uppercase tracking-wider text-[#C9AB81]">
//                     Address
//                   </span>
//                 </div>
//                 <Link
//                   href="https://g.co/kgs/2wH8Uzf"
//                   target="_blank"
//                   className="block text-sm leading-relaxed text-[#9C9E9F] transition-colors duration-300 hover:text-[#C9AB81]"
//                 >
//                   999 Stockport Rd, Manchester
//                   <br />
//                   M19 2SY, United Kingdom
//                 </Link>
//               </div>

//               <div className="group">
//                 <div className="mb-2 flex items-center space-x-2">
//                   <div className="h-1 w-1 rounded-full bg-[#C9AB81]"></div>
//                   <span className="text-xs font-medium uppercase tracking-wider text-[#C9AB81]">
//                     Email
//                   </span>
//                 </div>
//                 <Link
//                   href="mailto:finnextlearnings@gmail.com"
//                   className="block text-sm text-[#9C9E9F] transition-colors duration-300 hover:text-[#C9AB81]"
//                 >
//                   finnextlearnings@gmail.com
//                 </Link>
//               </div>

//               <div className="group">
//                 <div className="mb-2 flex items-center space-x-2">
//                   <div className="h-1 w-1 rounded-full bg-[#C9AB81]"></div>
//                   <span className="text-xs font-medium uppercase tracking-wider text-[#C9AB81]">
//                     Phone
//                   </span>
//                 </div>
//                 <Link
//                   href="tel:+441614420900"
//                   className="block text-sm text-[#9C9E9F] transition-colors duration-300 hover:text-[#C9AB81]"
//                 >
//                   +44 161 442 0900
//                 </Link>
//               </div>
//             </div>
//           </div>
//           {/*mobile screen */}
//           <div className="flex flex-col items-end justify-end space-y-6 md:hidden">
//             <h3 className="text-end text-lg font-semibold uppercase tracking-wider text-[#C9AB81]">
//               Contact Info
//             </h3>
//             <div className="flex flex-col items-end justify-end space-y-4">
//               <div className="group">
//                 <div className="mb-2 flex items-center justify-end space-x-2">
//                   <div className="flex h-1 w-1 items-end justify-end rounded-full bg-[#C9AB81]"></div>
//                   <span className="text-end text-xs font-medium uppercase tracking-wider text-[#C9AB81]">
//                     Address
//                   </span>
//                 </div>
//                 <Link
//                   href="https://g.co/kgs/2wH8Uzf"
//                   target="_blank"
//                   className="block text-end text-sm leading-relaxed text-[#9C9E9F] transition-colors duration-300 hover:text-[#C9AB81]"
//                 >
//                   999 Stockport Rd, Manchester
//                   <br />
//                   M19 2SY, United Kingdom
//                 </Link>
//               </div>

//               <div className="group">
//                 <div className="mb-2 flex items-center justify-end space-x-2">
//                   <div className="h-1 w-1 rounded-full bg-[#C9AB81]"></div>
//                   <span className="text-end text-xs font-medium uppercase tracking-wider text-[#C9AB81]">
//                     Email
//                   </span>
//                 </div>
//                 <Link
//                   href="mailto:finnextlearnings@gmail.com"
//                   className="block text-end text-sm text-[#9C9E9F] transition-colors duration-300 hover:text-[#C9AB81]"
//                 >
//                   finnextlearnings@gmail.com
//                 </Link>
//               </div>

//               <div className="group">
//                 <div className="mb-2 flex items-center justify-end space-x-2">
//                   <div className="h-1 w-1 rounded-full bg-[#C9AB81]"></div>
//                   <span className="text-end text-xs font-medium uppercase tracking-wider text-[#C9AB81]">
//                     Phone
//                   </span>
//                 </div>
//                 <Link
//                   href="tel:+441614420900"
//                   className="block text-sm text-[#9C9E9F] transition-colors duration-300 hover:text-[#C9AB81]"
//                 >
//                   +44 161 442 0900
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="space-y-6">
//             <h3 className="text-center text-lg font-semibold uppercase tracking-wider text-[#C9AB81]">
//               Opening Hours
//             </h3>
//             <div className="space-y-3">
//               <div className="rounded-lg bg-[#C9AB81]/5 p-4 text-center">
//                 <div className="mb-2 text-sm font-medium text-[#C9AB81]">
//                   Daily
//                 </div>
//                 <div className="text-lg font-semibold text-white">
//                   1:00 PM - 12:00 AM
//                 </div>
//                 <div className="mt-1 text-xs text-[#9C9E9F]">
//                   Monday - Sunday
//                 </div>
//               </div>

//               <Link
//                 href="/table-booking"
//                 className="block w-full rounded-lg bg-gradient-to-r from-[#C9AB81] to-[#d4af37] py-3 text-center text-sm font-semibold uppercase tracking-wide text-[#0f1d22] transition-all duration-300 hover:from-[#d4af37] hover:to-[#C9AB81] hover:shadow-lg hover:shadow-[#C9AB81]/25"
//               >
//                 Book a Table
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-[#C9AB81]/20 py-6">
//           <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
//             <div className="text-center text-sm text-[#9C9E9F] md:text-left">
//               © 2025 Finnext Learnings. All Rights Reserved.
//             </div>

//             <div className="flex items-center space-x-2 text-sm text-[#9C9E9F]">
//               <span>Powered by</span>
//               <span className="font-medium text-[#C9AB81] transition-colors duration-300 hover:text-white">
//                 Yesign
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C9AB81] to-transparent" />
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Symbols */}
        <div className="absolute left-1/4 top-20 animate-pulse text-lg text-cyan-400 opacity-10">
          📚
        </div>
        <div className="right-1/5 absolute top-32 animate-bounce text-xl text-teal-300 opacity-15">
          💼
        </div>
        <div className="left-1/6 absolute bottom-1/4 text-lg text-cyan-400 opacity-20">
          🎯
        </div>
        <div className="absolute bottom-1/3 right-1/3 animate-pulse text-sm text-teal-300 opacity-15">
          ⚡
        </div>

        {/* Geometric Shapes */}
        <div className="absolute right-1/4 top-1/4 h-16 w-16 rotate-45 animate-spin border border-cyan-400 opacity-5"></div>
        <div className="absolute bottom-1/3 left-1/4 h-8 w-8 animate-pulse rounded-full bg-teal-400 opacity-10"></div>

        {/* Network Lines */}
        <svg className="absolute inset-0 h-full w-full opacity-5">
          <defs>
            <linearGradient
              id="footerLineGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#0891b2" />
            </linearGradient>
          </defs>
          <line
            x1="10%"
            y1="30%"
            x2="30%"
            y2="50%"
            stroke="url(#footerLineGradient)"
            strokeWidth="1"
          />
          <line
            x1="70%"
            y1="40%"
            x2="90%"
            y2="20%"
            stroke="url(#footerLineGradient)"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Top Section */}
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-6 lg:col-span-1">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-white">
                  <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
                    Finnext
                  </span>{" "}
                  Learnings
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  Offers practical, software-based training in Accounting,
                  Healthcare Finance, and HR to make you job-ready.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-red-500 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="group flex items-center gap-2 text-gray-300 transition-colors duration-300 hover:text-cyan-400"
                  >
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-programs"
                    className="group flex items-center gap-2 text-gray-300 transition-colors duration-300 hover:text-cyan-400"
                  >
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    Our Programs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="group flex items-center gap-2 text-gray-300 transition-colors duration-300 hover:text-cyan-400"
                  >
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="group flex items-center gap-2 text-gray-300 transition-colors duration-300 hover:text-cyan-400"
                  >
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Edapal Location */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">
                Edapal Campus
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm leading-relaxed text-gray-300">
                      Finnext Learnings
                      <br />
                      PG Academy Building
                      <br />
                      Thrissur Road, Edapal
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-green-500">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <a
                    href="tel:9567867986"
                    className="text-gray-300 transition-colors duration-300 hover:text-emerald-400"
                  >
                    9567 86 79 86
                  </a>
                </div>
              </div>
            </div>

            {/* Cochin Location */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">
                Cochin Campus
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm leading-relaxed text-gray-300">
                      Finnext Learnings
                      <br />
                      Max Business Bay
                      <br />
                      Near Vyttila Hub & Metro Station
                      <br />
                      Vyttila, Cochin
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-green-500">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <a
                    href="tel:9020112211"
                    className="text-gray-300 transition-colors duration-300 hover:text-emerald-400"
                  >
                    9020 11 22 11
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Email Section */}
          <div className="mt-12 border-t border-slate-700 pt-8">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-red-400 to-red-500">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.086a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email us at</p>
                  <a
                    href="mailto:finnextlearnings@gmail.com"
                    className="font-medium text-white transition-colors duration-300 hover:text-cyan-400"
                  >
                    finnextlearnings@gmail.com
                  </a>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-cyan-400 hover:to-teal-400 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 border-t border-slate-700 pt-8">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <div className="text-center text-sm text-[#9C9E9F] md:text-left">
                © 2025 Finnext Learnings. All Rights Reserved.
              </div>

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
                <div className="flex items-center space-x-2 text-sm text-[#9C9E9F]">
                  <span>Powered by</span>
                  <span className="font-medium text-[#C9AB81] transition-colors duration-300 hover:text-white">
                    Yesign
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Gradient Fade */}
      <div className="absolute left-0 right-0 top-0 h-32 bg-gradient-to-b from-slate-900 to-transparent"></div>
    </footer>
  );
};

export default Footer;
