import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const PlacementSection = () => {
  const placedStudents = [
    {
      id: 1,
      name: "Mihraj K K",
      position: "Accounts Assistant",
      company: "Zued",
      image: "/images/home/placed/1.jpg",
      course: "Expert 30 Senior-Level Accounting",
      testimonial:
        "Finnext Learnings gave me the practical skills and confidence I needed to excel in my career.",
    },
    {
      id: 2,
      name: "Athira",
      position: "HR Associate",
      company: "BHRC",
      image: "/images/home/placed/2.jpg",
      course: "HR Associate Programme",
      testimonial:
        "The hands-on training and expert mentorship helped me land my dream job in HR.",
    },
    {
      id: 3,
      name: "Shahana C",
      position: "Pharmacy Assistant",
      company: "Mother & Child Hospital",
      image: "/images/home/placed/3.jpg",
      course: "Healthcare Accounting Associate",
      testimonial:
        "The real-world projects and industry exposure made all the difference in my career growth.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
            <span className="text-sm font-medium text-emerald-700">
              Success Stories
            </span>
          </motion.div>

          <motion.h2
            className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Our <span className="text-emerald-600">Placed Students</span>
          </motion.h2>

          <div className="mx-auto mb-6 h-1 w-20 bg-emerald-500"></div>

          <motion.p
            className="mx-auto max-w-2xl text-lg text-gray-600"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Meet our successful graduates who have transformed their careers
            through our practical training programs and are now thriving in
            leading companies across various industries.
          </motion.p>
        </div>

        {/* Placement Cards Grid */}
        <motion.div
          className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {placedStudents.map((student) => (
            <div
              key={student.id}
              className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              {/* Student Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  width={400}
                  height={400}
                  src={student.image}
                  alt={`${student.name} - ${student.position} at ${student.company}`}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />

                {/* Overlay with student info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                {/* Success Badge */}
                <div className="absolute right-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-sm font-medium text-white">
                  Placed
                </div>

                {/* Salary Badge */}

                {/* Student Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="mb-1 text-xl font-bold text-white">
                    {student.name}
                  </h3>
                  <p className="mb-1 font-medium text-emerald-300">
                    {student.position}
                  </p>
                  <p className="text-sm text-gray-200">{student.company}</p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Course Info */}
                <div className="mb-4 flex items-center gap-3 rounded-lg bg-gray-50 p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
                    <svg
                      className="h-5 w-5 text-emerald-600"
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
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      Course Completed
                    </h4>
                    <p className="text-sm text-gray-600">{student.course}</p>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="border-l-4 border-emerald-200 pl-4">
                  <p className="text-sm italic text-gray-600">
                    "{student.testimonial}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Placement Statistics */}

        {/* Call to Action */}
      </div>
    </section>
  );
};

export default PlacementSection;
