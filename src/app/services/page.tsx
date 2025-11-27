"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import MinimalNavbar from "@/components/other/MinimalNavbar";
import ServicePackages from "@/components/other/ServicePackages";
import SolutionsSection from "@/components/other/SolutionsSection";

export default function ServicesPage() {
  return (
    <div className="min-h-screen w-full relative bg-black text-white overflow-x-hidden">
      {/* Premium Navigation */}
      <MinimalNavbar />

      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center px-4 sm:px-6 md:px-8 py-20">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-sm text-blue-300 font-syne">Premium Services</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight font-unbounded">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-400 leading-tight">
                  Transform Your Vision
                </span>
                <span className="block mt-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-tight">
                  Into Digital Reality
                </span>
              </h1>

              <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed font-space-grotesk">
                Professional full-stack development services crafted with precision,
                <span className="text-blue-400 font-semibold"> innovation</span>, and
                <span className="text-purple-400 font-semibold"> excellence</span>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                <a
                  href="#packages"
                  className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold transition-all bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:scale-105 w-full sm:w-auto"
                >
                  <span className="relative font-syne">View Packages</span>
                </a>
                <a
                  href="#solutions"
                  className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold transition-all bg-transparent border-2 border-white/20 text-white rounded-full hover:border-white/40 backdrop-blur-sm w-full sm:w-auto"
                >
                  <span className="relative font-syne">Explore Solutions</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Packages Section */}
        <section id="packages" className="py-20">
          <ServicePackages />
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-20">
          <SolutionsSection />
        </section>

        {/* CTA Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-purple-600/10 to-transparent" />
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 font-unbounded">
                Ready to Build Something Extraordinary?
              </h2>
              <p className="text-xl text-gray-300 font-space-grotesk">
                Let's bring your ideas to life with cutting-edge technology and exceptional design
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href="mailto:contact@vinaytz.com"
                  className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold transition-all bg-white text-black rounded-full hover:bg-gray-100 w-full sm:w-auto"
                >
                  <span className="relative font-syne">Get in Touch</span>
                </a>
                <Link
                  href="/"
                  className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold transition-all bg-transparent border-2 border-white/20 text-white rounded-full hover:border-white/40 backdrop-blur-sm w-full sm:w-auto"
                >
                  <span className="relative font-syne">Back to Home</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
