"use client";

import React, { useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { IconCheck, IconMail, IconClock, IconSparkles } from "@tabler/icons-react";
import SparklesCore from "@/components/ui/sparkles";
import MinimalNavbar from "@/components/other/MinimalNavbar";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("payment_id");
  const packageName = searchParams.get("package");

  useEffect(() => {
    // Here you would typically send an email notification to contact@vinaytz.com
    // This can be done through an API route or serverless function
    if (paymentId) {
      // Example: fetch('/api/send-email', { method: 'POST', body: JSON.stringify({ paymentId, packageName }) })
      console.log("Payment successful:", paymentId, packageName);
    }
  }, [paymentId, packageName]);

  return (
    <div className="min-h-screen w-full relative bg-black text-white overflow-hidden">
      {/* Navbar */}
      <MinimalNavbar />
      
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-black to-black" />
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-24 h-24 mb-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
          >
            <IconCheck className="w-14 h-14 text-white" strokeWidth={3} />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-unbounded"
          >
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-400 leading-tight">
              Thank You!
            </span>
          </motion.h1>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 mb-12"
          >
            <p className="text-xl sm:text-2xl text-gray-300 font-space-grotesk leading-relaxed">
              Your payment has been successfully processed.
            </p>
            <p className="text-lg text-gray-400 font-space-grotesk max-w-2xl mx-auto">
              I'm excited to work with you on your{" "}
              <span className="text-blue-400 font-semibold">{packageName || "project"}</span>.
            </p>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="inline-flex p-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl mb-4">
                <IconMail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-syne">Check Your Email</h3>
              <p className="text-sm text-gray-400 font-space-grotesk">
                Payment confirmation has been sent to your email
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="inline-flex p-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl mb-4">
                <IconClock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-syne">Response Time</h3>
              <p className="text-sm text-gray-400 font-space-grotesk">
                I'll contact you within 48 hours to discuss details
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="inline-flex p-3 bg-gradient-to-r from-orange-600 to-red-500 rounded-xl mb-4">
                <IconSparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-syne">Next Steps</h3>
              <p className="text-sm text-gray-400 font-space-grotesk">
                We'll define project scope, timeline, and deliverables together
              </p>
            </div>
          </motion.div>

          {/* Payment Details */}
          {paymentId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-12 p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm"
            >
              <p className="text-sm text-gray-400 font-space-grotesk">
                Payment ID: <span className="text-white font-mono">{paymentId}</span>
              </p>
            </motion.div>
          )}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-12 p-8 bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-3xl backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-4 font-syne">Questions or Urgent Matters?</h3>
            <p className="text-gray-300 mb-4 font-space-grotesk">
              Feel free to reach out directly at{" "}
              <a href="mailto:contact@vinaytz.com" className="text-blue-400 hover:text-blue-300 font-semibold">
                contact@vinaytz.com
              </a>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:contact@vinaytz.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all font-syne"
              >
                <IconMail className="w-4 h-4 mr-2" />
                Email Me
              </a>
              <a
                href="https://wa.me/+917307157500"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full font-semibold hover:scale-105 transition-all font-syne"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-all w-full sm:w-auto font-syne"
            >
              Back to Home
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-full font-semibold hover:border-white/40 backdrop-blur-sm w-full sm:w-auto font-syne"
            >
              View More Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen w-full bg-black flex items-center justify-center">
        <div className="text-white text-xl font-space-grotesk">Loading...</div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}
