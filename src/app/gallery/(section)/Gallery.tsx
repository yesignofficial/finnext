import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Gallery images data
const galleryImages = [
  {
    id: 1,
    src: "/images/home/gallery/1.jpg",
    alt: "Gallery image 1",
  },
  {
    id: 2,
    src: "/images/home/gallery/2.jpg",
    alt: "Gallery image 2",
  },
  {
    id: 3,
    src: "/images/home/gallery/3.jpg",
    alt: "Gallery image 3",
  },
  {
    id: 4,
    src: "/images/home/gallery/4.jpg",
    alt: "Gallery image 4",
  },
  {
    id: 5,
    src: "/images/home/gallery/5.jpg",
    alt: "Gallery image 5",
  },
  {
    id: 6,
    src: "/images/home/gallery/6.jpg",
    alt: "Gallery image 6",
  },
  {
    id: 7,
    src: "/images/home/gallery/7.jpg",
    alt: "Gallery image 7",
  },
  {
    id: 8,
    src: "/images/home/gallery/8.jpg",
    alt: "Gallery image 8",
  },
  {
    id: 9,
    src: "/images/home/gallery/9.jpg",
    alt: "Gallery image 9",
  },
  {
    id: 10,
    src: "/images/home/gallery/10.jpg",
    alt: "Gallery image 10",
  },
  {
    id: 11,
    src: "/images/home/gallery/11.jpg",
    alt: "Gallery image 10",
  },
  {
    id: 12,
    src: "/images/home/gallery/12.jpg",
    alt: "Gallery image 10",
  },
];

const GalleryPage: React.FC = () => {
  return (
    <section className="h-full w-full bg-white py-16 lg:py-24">
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
              Our Gallery
            </span>
          </motion.div>

          <motion.h2
            className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Training <span className="text-blue-600">Moments</span>
          </motion.h2>

          <div className="mx-auto mb-6 h-1 w-20 bg-blue-500"></div>

          <motion.p
            className="mx-auto max-w-2xl text-lg text-gray-600"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Explore our learning environment, training sessions, and the
            dedicated community at Finnext Learnings.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  width={2000}
                  height={2000}
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.currentTarget.src = `https://images.unsplash.com/photo-${1520 + index}000000000000?auto=format&fit=crop&w=400&q=80`;
                  }}
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                {/* Image Number Badge */}
                <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-700 shadow-sm">
                  {image.id}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full transform p-4 transition-transform duration-300 group-hover:translate-y-0">
                  <div className="rounded-lg bg-white/95 p-3 backdrop-blur-sm">
                    <h3 className="text-base font-semibold text-gray-900">
                      Finnext Learning {image.id}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPage;
