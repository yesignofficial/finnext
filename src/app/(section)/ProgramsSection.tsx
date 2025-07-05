import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface Program {
  id: number;
  title: string;
  image: string;
  description: string;
  link: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  category: string;
}

const ProgramsSection = () => {
  const programs: Program[] = [
    {
      id: 1,
      title: "HR Associate Programme",
      image: "/images/home/program/hr.jpg",
      description:
        "Comprehensive human resources training with practical skills development and real-world applications.",
      link: "/programs/hr-associate",
      level: "Intermediate",
      category: "Human Resources",
    },
    {
      id: 2,
      title: "Business Analyst Training Programme",
      image: "/images/home/program/business.jpg",
      description:
        "Advanced business analysis techniques with case studies and data-driven decision making.",
      link: "/programs/business-analyst",
      level: "Advanced",
      category: "Business Analysis",
    },
    {
      id: 3,
      title: "Expert 30 Senior-Level Accounting",
      image: "/images/home/program/expert.jpg",
      description:
        "Expert-level accounting principles for senior professionals with complex scenarios.",
      link: "/programs/senior-accounting",
      level: "Expert",
      category: "Accounting",
    },
    {
      id: 4,
      title: "Tally Certified Accountant Programme",
      image: "/images/home/program/accounts.jpg",
      description:
        "Master Tally software with hands-on training and professional certification.",
      link: "/programs/tally-certified",
      level: "Beginner",
      category: "Software Training",
    },
    {
      id: 5,
      title: "Healthcare Accounting Associate",
      image: "/images/home/program/health.jpg",
      description:
        "Specialized accounting training for healthcare industry with compliance focus.",
      link: "/programs/healthcare-accounting",
      level: "Intermediate",
      category: "Healthcare",
    },
  ];

  const getLevelColor = (level: Program["level"]): string => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-700";
      case "Intermediate":
        return "bg-blue-100 text-blue-700";
      case "Advanced":
        return "bg-purple-100 text-purple-700";
      case "Expert":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section className="relative h-full w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-16 lg:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Icons */}
        <div className="absolute left-[15%] top-20 text-xl text-indigo-300 opacity-40 md:text-2xl">
          📚
        </div>
        <div className="absolute right-[20%] top-32 text-2xl text-blue-300 opacity-50 md:text-3xl">
          🎓
        </div>
        <div className="absolute bottom-1/3 left-[10%] text-lg text-indigo-300 opacity-30 md:text-xl">
          💼
        </div>
        <div className="absolute bottom-1/4 right-1/3 text-base text-blue-300 opacity-40 md:text-lg">
          ⚡
        </div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header - Same animation pattern as Gallery */}
          <div className="mb-16 text-center">
            <motion.div
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
              <span className="text-sm font-medium text-indigo-700">
                Professional Training
              </span>
            </motion.div>

            <motion.h2
              className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              Our <span className="text-indigo-600">Programs</span>
            </motion.h2>

            <div className="mx-auto mb-6 h-1 w-20 bg-indigo-500"></div>

            <motion.p
              className="mx-auto max-w-2xl text-lg text-gray-600"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              Discover our comprehensive range of professional training programs
              designed to enhance your career prospects and industry expertise.
            </motion.p>
          </div>

          {/* Programs Grid - Same animation pattern as Gallery */}
          <motion.div
            className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {programs.map((program, index) => (
              <div
                key={program.id}
                className={`group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl ${
                  index === 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Program Image Container */}
                <div
                  className={`relative overflow-hidden ${
                    index === 0 ? "aspect-[4/3]" : "aspect-square"
                  }`}
                >
                  <Image
                    width={500}
                    height={400}
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                  {/* Level Badge */}
                  <div
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-sm font-medium shadow-sm ${getLevelColor(program.level)}`}
                  >
                    {program.level}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-sm font-medium text-gray-700 shadow-sm">
                    {program.category}
                  </div>

                  {/* Program Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full transform p-4 transition-transform duration-300 group-hover:translate-y-0">
                    <div className="rounded-lg bg-white/95 p-3 backdrop-blur-sm">
                      <h3 className="text-base font-semibold text-gray-900">
                        {program.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm text-gray-600">
                        {program.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Program Content */}
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-slate-800 transition-colors duration-300 group-hover:text-indigo-600">
                    {program.title}
                  </h3>

                  <p className="mb-4 text-sm leading-relaxed text-slate-600">
                    {program.description}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    href={program.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-all duration-300 hover:gap-3 hover:text-indigo-500"
                  >
                    Learn More
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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

                {/* Certification Badge - appears on hover */}
                <div className="absolute bottom-28 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex items-center gap-2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                    <svg
                      className="h-3 w-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Certified
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* View All Programs Button - Same pattern as Gallery */}
          <div className="mb-16 text-center">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-indigo-700"
            >
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              View All Programs
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
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default ProgramsSection;
