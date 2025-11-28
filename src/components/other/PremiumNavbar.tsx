"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Services", link: "/services" },
];

export default function PremiumNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-xl bg-black/80 border-b border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                <img
                  src="/favicon.png"
                  alt="Vinaytz"
                  className="relative w-10 h-10 rounded-full border-2 border-white/20"
                />
              </motion.div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 font-unbounded">
                Vinaytz
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.name.toLowerCase() || 
                               (item.link === "/services" && window.location.pathname === "/services");
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.link}
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group font-syne ${
                        isActive
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeNav"
                          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10 group-hover:scale-105 inline-block transition-transform">
                        {item.name}
                      </span>
                      {!isActive && (
                        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-white/5 transition-opacity" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.a
                href="mailto:contact@vinaytz.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 text-sm font-semibold text-white border border-white/20 rounded-full hover:border-white/40 backdrop-blur-sm transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] font-syne"
              >
                Contact
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all font-syne"
              >
                Hire Me
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative p-2 text-white rounded-full hover:bg-white/10 transition-colors"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconX className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconMenu2 className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-gradient-to-br from-gray-900 via-black to-gray-900 border-l border-white/10 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-white rounded-full hover:bg-white/10 transition-colors"
                  >
                    <IconX className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Logo */}
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-3 mb-12"
                >
                  <img
                    src="/favicon.png"
                    alt="Vinaytz"
                    className="w-10 h-10 rounded-full border-2 border-white/20"
                  />
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 font-unbounded">
                    Vinaytz
                  </span>
                </Link>

                {/* Navigation Items */}
                <div className="space-y-2 mb-12">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.link}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-6 py-4 text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all border border-transparent hover:border-white/10 font-syne"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <motion.a
                    href="mailto:contact@vinaytz.com"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full px-6 py-4 text-center text-sm font-semibold text-white border border-white/20 rounded-full hover:border-white/40 backdrop-blur-sm transition-all font-syne"
                  >
                    Contact Me
                  </motion.a>
                  <motion.a
                    href="/services"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full px-6 py-4 text-center text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all font-syne"
                  >
                    Hire Me
                  </motion.a>
                </div>

                {/* Social Links */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-sm text-gray-400 mb-4 font-space-grotesk">Connect with me</p>
                  <div className="flex space-x-4">
                    {[
                      { icon: "fa-github", link: "https://github.com/vinaytz", label: "GitHub" },
                      { icon: "fa-linkedin-in", link: "https://linkedin.com/in/vinaytz", label: "LinkedIn" },
                      { icon: "fa-x-twitter", link: "https://x.com/vinaytzz/", label: "Twitter" },
                    ].map((item) => (
                      <motion.a
                        key={item.label}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all"
                      >
                        <i className={`fab ${item.icon} text-lg`}></i>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
