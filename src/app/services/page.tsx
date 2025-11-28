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

        {/* Premium Footer */}
        <footer className="relative border-t border-white/10 bg-gradient-to-b from-black via-black to-blue-950/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              {/* Brand Column */}
              <div className="space-y-4">
                <Link href="/" className="inline-block">
                  <h3 className="text-2xl font-bold font-unbounded bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    Vinaytz
                  </h3>
                </Link>
                <p className="text-gray-400 text-sm font-space-grotesk leading-relaxed">
                  Crafting premium digital experiences with cutting-edge technology and innovative solutions.
                </p>
                <div className="flex gap-3 pt-2">
                  {[
                    { icon: "fa-github", link: "https://github.com/vinaytz", label: "GitHub" },
                    { icon: "fa-linkedin-in", link: "https://linkedin.com/u/vinaytz", label: "LinkedIn" },
                    { icon: "fa-x-twitter", link: "https://x.com/vinaytzz/", label: "Twitter" },
                    { icon: "fa-instagram", link: "https://instagram.com/vinaytz", label: "Instagram" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:border-blue-400/50 hover:bg-blue-400/10 transition-all duration-300"
                    >
                      <i className={`fab ${social.icon} text-gray-400 hover:text-blue-400 transition-colors`}></i>
                    </a>
                  ))}
                </div>
              </div>

              {/* Services Column */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-white font-unbounded">Services</h4>
                <ul className="space-y-3 font-space-grotesk">
                  {[
                    { name: "Landing Pages", href: "#packages" },
                    { name: "Web Applications", href: "#packages" },
                    { name: "E-Commerce", href: "#packages" },
                    { name: "Custom Solutions", href: "#solutions" },
                    { name: "API Development", href: "#solutions" },
                    { name: "UI/UX Design", href: "#solutions" },
                  ].map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm inline-flex items-center gap-2 group"
                      >
                        <span className="w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-4 transition-all duration-300"></span>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Column */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-white font-unbounded">Legal</h4>
                <ul className="space-y-3 font-space-grotesk">
                  {[
                    { name: "Terms & Conditions", href: "/terms", icon: "📄" },
                    { name: "Privacy Policy", href: "/privacy", icon: "🔒" },
                    { name: "Refund Policy", href: "/refund", icon: "💰" },
                    { name: "Service Delivery", href: "/shipping", icon: "🚀" },
                  ].map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm inline-flex items-center gap-2 group"
                      >
                        <span className="text-xs">{item.icon}</span>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Column */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-white font-unbounded">Get in Touch</h4>
                <ul className="space-y-3 font-space-grotesk">
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm inline-flex items-center gap-2 group"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Contact Form
                    </Link>
                  </li>
                  <li>
                    <a
                      href="mailto:contact@vinaytz.com"
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm inline-flex items-center gap-2 group"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                      contact@vinaytz.com
                    </a>
                  </li>
                  <li className="pt-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="text-xs text-gray-300 font-medium">Available for Projects</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-white/10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-500 font-space-grotesk">
                  © {new Date().getFullYear()} Vinaytz. All rights reserved. Built with ❤️ and cutting-edge tech.
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-500 font-space-grotesk">
                  <span className="inline-flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                    Secured by Razorpay
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
                    PCI DSS Compliant
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        </footer>
      </div>
    </div>
  );
}
