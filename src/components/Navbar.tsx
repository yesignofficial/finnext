"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const d = localStorage.getItem("positiond");
    if (d !== null) {
      setPositiond(d);
    }
  }, []);

  const [positiond, setPositiond] = useState<string>("");

  useEffect(() => {
    if (positiond) {
      localStorage.setItem("positiond", positiond);
    }
  }, [positiond]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Navigation items
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/programs", label: "Our Programs" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className={cn(
        `${position} top-0 z-50 w-full py-4 transition-all duration-500 md:py-4`,
        pathname !== "/" && "bg-slate-900/90 backdrop-blur-md",
        // isScrolled ? "bg-slate-900/90 backdrop-blur-md" : "bg-transparent",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Desktop Navigation */}
      <div className="hidden px-6 lg:block lg:px-20">
        <div className="flex flex-row items-center justify-between">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/" className="group">
              <Image
                src="/images/logo.webp"
                width={281}
                height={74}
                alt="Brainz Academy Logo"
                className="w-20 drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="flex flex-row items-center justify-center gap-8 xl:gap-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "group relative text-sm font-medium uppercase tracking-wider transition-all duration-300",
                    pathname === item.href
                      ? "text-cyan-400 drop-shadow-sm"
                      : "text-white hover:text-cyan-300",
                  )}
                >
                  <span className="relative">
                    {item.label}
                    <span className="ml-1 text-lg text-teal-400/70 transition-colors duration-300 group-hover:text-cyan-400">
                      ✦
                    </span>
                    {/* Underline effect */}
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-300 shadow-sm shadow-cyan-400/50 transition-all duration-300",
                        pathname === item.href
                          ? "w-full"
                          : "w-0 group-hover:w-full",
                      )}
                    ></span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Sidebar Button */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Sidebar>
              <Button
                variant="ghost"
                className="group relative rounded-full border border-cyan-400/40 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 p-3 text-cyan-400 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-cyan-300 hover:bg-gradient-to-br hover:from-cyan-400/20 hover:to-teal-400/20 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-400/25"
              >
                <EqualizerIcon />
              </Button>
            </Sidebar>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="block px-6 lg:hidden">
        <div className="flex flex-row items-center justify-between">
          {/* Mobile Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="group">
              <Image
                src="/images/logo.webp"
                width={281}
                height={74}
                alt="Brainz Academy Logo"
                className="md:w-18 w-16 drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </motion.div>

          {/* Mobile Sidebar Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sidebar>
              <Button
                variant="ghost"
                className="group relative rounded-full border border-cyan-400/40 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 p-3 text-cyan-400 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-cyan-300 hover:bg-gradient-to-br hover:from-cyan-400/20 hover:to-teal-400/20 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-400/25"
              >
                <EqualizerIcon />
              </Button>
            </Sidebar>
          </motion.div>
        </div>
      </div>

      {/* Bottom Border */}
      {/* <motion.div
        className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent shadow-sm shadow-cyan-400/30"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      /> */}
    </motion.nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  return (
    <div className="relative flex items-center space-x-1">
      {/* Animated bars */}
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="w-1 rounded-full bg-current"
          style={{ height: "16px" }}
          animate={{
            scaleY: [1, 1.5, 0.8, 1.2, 1],
            opacity: [0.6, 1, 0.7, 1, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
