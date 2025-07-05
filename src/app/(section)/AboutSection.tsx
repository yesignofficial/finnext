import React from "react";
import { motion } from "framer-motion";

const DirectionalAnimatedAboutSection: React.FC = () => {
  return (
    <section className="relative h-full w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 lg:py-24">
      {/* Background Elements - Fade in from center */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        {/* Floating Particles */}
        <div className="absolute left-[15%] top-20 text-xl text-blue-300 opacity-40 md:text-2xl">
          📚
        </div>
        <div className="absolute right-[20%] top-32 text-2xl text-indigo-300 opacity-50 md:text-3xl">
          🎓
        </div>
        <div className="absolute bottom-1/3 left-[10%] text-lg text-blue-300 opacity-30 md:text-xl">
          💼
        </div>
        <div className="absolute bottom-1/4 right-1/3 text-base text-indigo-300 opacity-40 md:text-lg">
          ⚡
        </div>
      </motion.div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* TOP SECTION - Gallery-style animations */}
          <div className="mb-12 text-center md:mb-16">
            {/* Badge - Slides from LEFT (Gallery pattern) */}
            <motion.div
              className="mb-4 inline-flex items-center gap-3 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 shadow-sm md:mb-6 md:px-6 md:py-3"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500"></div>
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-700 md:text-sm">
                About Finnext Learning
              </span>
            </motion.div>

            {/* Main Title - Slides from RIGHT (Gallery pattern) */}
            <motion.h2
              className="mb-4 text-3xl font-bold text-slate-900 md:mb-6 md:text-4xl lg:text-5xl xl:text-6xl"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              Empowering Careers Through{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Expert Training
              </span>
            </motion.h2>

            <div className="mx-auto mb-6 h-1 w-20 bg-blue-500"></div>

            {/* Description - Slides from RIGHT (Gallery pattern) */}
            <motion.p
              className="mx-auto max-w-3xl px-4 text-base leading-relaxed text-slate-600 md:px-0 md:text-lg"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              Finnext Learning is a professional training institute committed to
              delivering practical, work-integrated education in accounting,
              finance, and business skills.
            </motion.p>
          </div>

          {/* MIDDLE SECTION - Two Column Layout with Gallery animations */}
          <div className="mb-16 grid items-center gap-8 md:mb-20 md:gap-12 lg:grid-cols-2 lg:gap-20">
            {/* LEFT COLUMN - Slides from LEFT (Gallery pattern) */}
            <motion.div
              className="order-2 space-y-6 md:space-y-8 lg:order-1"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {/* Mission Section Header */}
              <div className="space-y-4 md:space-y-6">
                <motion.h3
                  className="text-2xl font-bold text-slate-900 md:text-3xl lg:text-4xl"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                >
                  Our Mission
                </motion.h3>

                <motion.p
                  className="text-base leading-relaxed text-slate-600 md:text-lg"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                >
                  To bridge the gap between education and employment by
                  providing hands-on training with real-world data,
                  industry-standard software, and expert instruction.
                </motion.p>
              </div>

              {/* Mission Points - Gallery-style grid animation */}
              <motion.div
                className="space-y-3 md:space-y-4"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
              >
                {/* First Point */}
                <div className="group relative overflow-hidden rounded-xl bg-white p-3 shadow-md transition-all duration-300 hover:shadow-lg md:p-4">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="flex h-8 w-8 animate-pulse items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 md:h-10 md:w-10">
                      <svg
                        className="h-4 w-4 text-white md:h-5 md:w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-slate-800 md:text-base">
                      Real-World Training Experience
                    </span>
                  </div>

                  {/* Gallery-style overlay effect */}
                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                  {/* Gallery-style badge overlay */}
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full transform p-2 transition-transform duration-300 group-hover:translate-y-0">
                    <div className="rounded-lg bg-blue-600/95 p-2 backdrop-blur-sm">
                      <span className="text-xs font-medium text-white">
                        Practical Skills
                      </span>
                    </div>
                  </div>
                </div>

                {/* Second Point */}
                <div className="group relative overflow-hidden rounded-xl bg-white p-3 shadow-md transition-all duration-300 hover:shadow-lg md:p-4">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="flex h-8 w-8 animate-pulse items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 md:h-10 md:w-10">
                      <svg
                        className="h-4 w-4 text-white md:h-5 md:w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-slate-800 md:text-base">
                      Industry-Standard Software Training
                    </span>
                  </div>

                  {/* Gallery-style overlay effect */}
                  <div className="absolute inset-0 bg-indigo-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                  {/* Gallery-style badge overlay */}
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full transform p-2 transition-transform duration-300 group-hover:translate-y-0">
                    <div className="rounded-lg bg-indigo-600/95 p-2 backdrop-blur-sm">
                      <span className="text-xs font-medium text-white">
                        Modern Tools
                      </span>
                    </div>
                  </div>
                </div>

                {/* Third Point */}
                <div className="group relative overflow-hidden rounded-xl bg-white p-3 shadow-md transition-all duration-300 hover:shadow-lg md:p-4">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="flex h-8 w-8 animate-pulse items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 md:h-10 md:w-10">
                      <svg
                        className="h-4 w-4 text-white md:h-5 md:w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-slate-800 md:text-base">
                      Expert Mentorship & Guidance
                    </span>
                  </div>

                  {/* Gallery-style overlay effect */}
                  <div className="absolute inset-0 bg-green-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                  {/* Gallery-style badge overlay */}
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full transform p-2 transition-transform duration-300 group-hover:translate-y-0">
                    <div className="rounded-lg bg-green-600/95 p-2 backdrop-blur-sm">
                      <span className="text-xs font-medium text-white">
                        Expert Faculty
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Additional Mission Benefits - Gallery-style animation */}
              <motion.div
                className="mt-6 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 md:mt-8 md:p-6"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
              >
                <h4 className="mb-3 text-lg font-bold text-slate-900">
                  Why Choose Our Training?
                </h4>
                <div className="grid grid-cols-1 gap-2 text-sm text-slate-700 md:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Flexible Scheduling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Certification Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Job Placement Assistance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Lifetime Learning Access</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN - Gallery-style image with overlays */}
            <motion.div
              className="relative order-1 lg:order-2"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-blue-50 shadow-2xl transition-transform duration-500 hover:scale-105 md:rounded-3xl">
                {/* Main Image - Gallery-style */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                    alt="Professional training at Finnext Learning"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Gallery-style image overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                  {/* Gallery-style badges */}
                  <div className="absolute left-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-sm font-medium text-white shadow-sm">
                    Training
                  </div>

                  <div className="absolute right-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white shadow-sm">
                    Professional
                  </div>

                  {/* Gallery-style title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full transform p-4 transition-transform duration-300 group-hover:translate-y-0">
                    <div className="rounded-lg bg-white/95 p-3 backdrop-blur-sm">
                      <h3 className="text-base font-semibold text-gray-900">
                        Professional Learning Environment
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        Modern facilities with expert instruction
                      </p>
                    </div>
                  </div>
                </div>

                {/* Gallery-style floating stats */}
                <div className="absolute bottom-6 left-6 rounded-xl bg-white/95 p-4 shadow-xl backdrop-blur-sm">
                  <div className="mb-2 text-sm font-bold text-slate-800">
                    Student Success Rate
                  </div>
                  <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                  </div>
                  <div className="mt-1 text-xs font-semibold text-blue-600">
                    95% Success Rate
                  </div>
                </div>

                {/* Gallery-style floating element */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 transform">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-red-500 shadow-lg">
                    <span className="text-xl text-white">🏆</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* BOTTOM SECTION - Gallery-style animations */}
          <div className="mx-auto max-w-4xl pt-12 text-center md:pt-16">
            {/* Vision Title - Slides from LEFT (Gallery pattern) */}
            <motion.h3
              className="mb-4 text-2xl font-bold text-slate-900 md:mb-6 md:text-3xl"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              Our Vision
            </motion.h3>

            {/* Vision Text - Slides from RIGHT (Gallery pattern) */}
            <motion.p
              className="px-4 text-base leading-relaxed text-slate-600 md:px-0 md:text-lg"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              To become a leading provider of work-integrated learning that
              empowers individuals with practical skills, real-world experience,
              and industry-relevant knowledge—bridging the gap between education
              and employment.
            </motion.p>

            {/* Call to Action Button - Gallery-style */}
            <div className="mt-6 md:mt-8">
              <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700">
                {/* Left icon */}
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Join Finnext Learning Today!
                {/* Animated right arrow */}
                <svg
                  className="animate-bounce-right h-5 w-5"
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
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default DirectionalAnimatedAboutSection;
