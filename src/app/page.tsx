"use client";

import ViewMenu from "@/components/floating-buttons/ViewMenu";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactFormModal from "@/components/ContactFormModal"; // Import the modal component
import { useEffect, useState } from "react";
import Hero from "./(section)/Hero";
import AboutSection from "./(section)/AboutSection";
import ProgramsSection from "./(section)/ProgramsSection";
import GallerySection from "./(section)/GallerySection";
import PlacementSection from "./(section)/PlacementSection";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight ?? 0;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Show modal on page load with a slight delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContactModal(true);
    }, 2000); // Show modal after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  // Close modal function
  const closeModal = () => {
    setShowContactModal(false);
  };

  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center overflow-x-hidden">
        <Navbar position="absolute" />
        <Hero />
        <AboutSection />
        <ProgramsSection />
        <GallerySection />
        <PlacementSection />
        <Footer />
      </div>

      {isScrolled && (
        <div className="fixed bottom-6 right-2 z-50 flex md:bottom-[54px] md:right-[48px]">
          <ViewMenu />
        </div>
      )}

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={showContactModal} onClose={closeModal} />
    </main>
  );
}
