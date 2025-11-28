"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Services", link: "/services" },
];

export default function MinimalNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Navbar Container */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 sm:px-6 pt-6"
      >
        <motion.nav
          animate={{
            backgroundColor: isScrolled ? "rgba(10, 10, 10, 0.8)" : "rgba(10, 10, 10, 0.6)",
            backdropFilter: isScrolled ? "blur(20px)" : "blur(10px)",
            boxShadow: isScrolled
              ? "0 0 0 1px rgba(255, 255, 255, 0.08), 0 8px 32px rgba(0, 0, 0, 0.4)"
              : "0 0 0 1px rgba(255, 255, 255, 0.06)",
          }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-between px-4 sm:px-6 py-3.5 rounded-full w-full max-w-4xl relative"
          style={{
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src="/favicon.png"
                alt="Vinaytz"
                className="relative w-8 h-8 rounded-full"
              />
            </motion.div>
            <span className="text-base font-semibold text-white hidden sm:block font-unbounded tracking-tight">
              Vinaytz
            </span>
          </Link>

          {/* Mobile Center Text */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 md:hidden">
            <span className="text-base font-semibold text-white font-unbounded tracking-tight">
              Vinaytz
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={item.link}
                  onClick={() => setActiveItem(item.name)}
                  className="relative px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-full group"
                >
                  <span className="relative z-10">{item.name}</span>
                  {activeItem === item.name && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="hidden md:block"
          >
            <Link
              href="/services"
              className="group relative inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 rounded-full transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Hire Me
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/15 transition-colors"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="h-5 w-5 text-white" />
          </motion.button>
        </motion.nav>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={toggleMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-24 left-4 right-4 bg-[#0a0a0a]/95 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl z-50 md:hidden overflow-hidden"
            >
              {/* Close Button */}
              <div className="absolute top-4 right-4">
                <motion.button
                  onClick={toggleMenu}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/15 transition-colors"
                >
                  <X className="h-5 w-5 text-white" />
                </motion.button>
              </div>

              <div className="p-6 pt-14">
                {/* Navigation Items */}
                <div className="space-y-1 mb-6">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                    >
                      <Link
                        href={item.link}
                        onClick={toggleMenu}
                        className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4 border-t border-white/10"
                >
                  <Link
                    href="/services"
                    onClick={toggleMenu}
                    className="group relative flex items-center justify-center w-full px-5 py-3.5 text-base font-semibold text-white bg-white/10 hover:bg-white/15 rounded-full transition-all overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Hire Me
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </motion.div>

                {/* Social Links */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-xs text-gray-500 mb-3 font-medium uppercase tracking-wider">
                    Connect
                  </p>
                  <div className="flex space-x-3">
                    {[
                      { icon: "fa-github", link: "https://github.com/vinaytz" },
                      { icon: "fa-linkedin-in", link: "https://linkedin.com/in/vinaytz" },
                      { icon: "fa-x-twitter", link: "https://x.com/vinaytzz/" },
                    ].map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center justify-center w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                      >
                        <i className={`fab ${item.icon} text-sm text-gray-400`}></i>
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
