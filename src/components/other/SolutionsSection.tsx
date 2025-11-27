"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconBuildingStore, IconStethoscope, IconSchool, IconShoppingCart, IconHome2, IconBriefcase, IconDevices, IconChartBar } from "@tabler/icons-react";

interface Solution {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  gradient: string;
}

const solutions: Solution[] = [
  {
    title: "Restaurant Websites",
    description: "Appetizing designs that boost online orders and reservations",
    icon: <IconBuildingStore className="w-8 h-8" />,
    benefits: [
      "Online menu & ordering system",
      "Table reservation integration",
      "Mobile-optimized for dine-in browsing",
    ],
    gradient: "from-orange-500 to-red-600",
  },
  {
    title: "Healthcare & Clinics",
    description: "HIPAA-compliant patient portals and appointment systems",
    icon: <IconStethoscope className="w-8 h-8" />,
    benefits: [
      "Appointment booking system",
      "Patient record management",
      "HIPAA compliance & security",
    ],
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Educational Platforms",
    description: "Comprehensive learning management and coaching systems",
    icon: <IconSchool className="w-8 h-8" />,
    benefits: [
      "Student enrollment & tracking",
      "Course management system",
      "Live class integration",
    ],
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    title: "E-Commerce Stores",
    description: "High-conversion online stores with seamless payment integration",
    icon: <IconShoppingCart className="w-8 h-8" />,
    benefits: [
      "Secure payment gateway",
      "Inventory management",
      "Customer analytics dashboard",
    ],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Real Estate Listings",
    description: "Stunning property showcases with virtual tours and CRM",
    icon: <IconHome2 className="w-8 h-8" />,
    benefits: [
      "Property listing management",
      "Virtual tour integration",
      "Lead capture & CRM",
    ],
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    title: "Professional Portfolios",
    description: "Showcase your work with elegance and sophistication",
    icon: <IconBriefcase className="w-8 h-8" />,
    benefits: [
      "Project showcase galleries",
      "Client testimonials section",
      "Contact & inquiry forms",
    ],
    gradient: "from-slate-500 to-gray-700",
  },
  {
    title: "Business Websites",
    description: "Corporate presence that builds trust and drives conversions",
    icon: <IconDevices className="w-8 h-8" />,
    benefits: [
      "Custom branding & design",
      "Service showcase pages",
      "SEO optimization included",
    ],
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    title: "High-Converting Landing Pages",
    description: "Laser-focused pages designed to maximize conversions",
    icon: <IconChartBar className="w-8 h-8" />,
    benefits: [
      "A/B testing ready structure",
      "Fast load times (<2s)",
      "Lead capture optimization",
    ],
    gradient: "from-yellow-500 to-orange-600",
  },
];

export default function SolutionsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6 font-unbounded">
          Solutions I Build
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-grotesk">
          Specialized web solutions tailored for high-demand industries. Your business deserves more than a template.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">
              {/* Gradient Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${solution.gradient} rounded-t-2xl`} />

              {/* Icon */}
              <div className={`inline-flex p-3 bg-gradient-to-r ${solution.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {solution.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 font-unbounded">{solution.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 font-space-grotesk leading-relaxed">
                {solution.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2">
                {solution.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                    <span className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r ${solution.gradient} mt-1.5 flex-shrink-0`} />
                    <span className="font-space-grotesk">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-3xl backdrop-blur-sm">
          <p className="text-lg text-gray-300 font-space-grotesk">
            Don't see your industry? Let's discuss your custom requirements.
          </p>
          <a
            href="#packages"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-transform font-syne"
          >
            Choose Your Package
          </a>
        </div>
      </motion.div>
    </div>
  );
}
