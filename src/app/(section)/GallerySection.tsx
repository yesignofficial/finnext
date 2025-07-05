import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const GallerySection = () => {
  const galleryImages = [
    {
      id: 1,
      src: "/images/home/gallery/5.jpg",
      alt: "Professional training session at Finnext Learnings",
      title: "Focused Learning Sessions",
      category: "Memories",
    },
    {
      id: 2,
      src: "/images/home/gallery/2.jpg",
      alt: "Students working on practical accounting exercises",
      title: "Practical Training",
      category: "Hands-on Learning",
    },
    {
      id: 3,
      src: "/images/home/gallery/4.jpg",
      alt: "Professional training setup with modern equipment",
      title: "Professional Setup",
      category: "Excellence",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
            <span className="text-sm font-medium text-blue-700">
              Our Institute
            </span>
          </motion.div>

          <motion.h2
            className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Gallery <span className="text-blue-600">Highlights</span>
          </motion.h2>

          <div className="mx-auto mb-6 h-1 w-20 bg-blue-500"></div>

          <motion.p
            className="mx-auto max-w-2xl text-lg text-gray-600"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Take a glimmotion.pse into our focused learning environment,
            professional training setup, and the dedicated community of learners
            at Finnext Learnings.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <motion.div
          className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image Container */}
              <div
                className={`relative overflow-hidden ${
                  index === 0 ? "aspect-[4/3]" : "aspect-square"
                }`}
              >
                <Image
                  width={500}
                  height={400}
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                {/* Category Badge */}
                <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-sm font-medium text-gray-700 shadow-sm">
                  {image.category}
                </div>

                {/* Image Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full transform p-4 transition-transform duration-300 group-hover:translate-y-0">
                  <div className="rounded-lg bg-white/95 p-3 backdrop-blur-sm">
                    <h3 className="text-base font-semibold text-gray-900">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* View Full Gallery Button */}
        <div className="mb-16 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
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
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            View Full Gallery
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
    </section>
  );
};

export default GallerySection;
