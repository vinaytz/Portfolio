"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconCheck, IconSparkles, IconRocket, IconCrown } from "@tabler/icons-react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface Package {
  name: string;
  icon: React.ReactNode;
  price: {
    india: number;
    international: number;
  };
  description: string;
  features: string[];
  popular?: boolean;
  deliveryTime: string;
  gradient: string;
}

const packages: Package[] = [
  {
    name: "Landing Page",
    icon: <IconSparkles className="w-8 h-8" />,
    price: {
      india: 15000,
      international: 300,
    },
    description: "Perfect for startups and personal brands seeking a stunning first impression",
    features: [
      "Single page responsive design",
      "Modern animations & interactions",
      "SEO optimized",
      "Contact form integration",
      "Mobile-first approach",
      "2 rounds of revisions",
    ],
    deliveryTime: "5-7 days",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    name: "Business Website",
    icon: <IconRocket className="w-8 h-8" />,
    price: {
      india: 35000,
      international: 600,
    },
    description: "Comprehensive solution for established businesses looking to scale online",
    features: [
      "Up to 10 pages",
      "Custom design & branding",
      "CMS integration",
      "Advanced SEO optimization",
      "Analytics dashboard",
      "3 months free support",
      "4 rounds of revisions",
    ],
    popular: true,
    deliveryTime: "14-21 days",
    gradient: "from-purple-600 to-pink-500",
  },
  {
    name: "Full-Stack Application",
    icon: <IconCrown className="w-8 h-8" />,
    price: {
      india: 75000,
      international: 1500,
    },
    description: "Enterprise-grade custom web applications with complete backend infrastructure",
    features: [
      "Custom frontend & backend",
      "Database design & setup",
      "Authentication & authorization",
      "RESTful API development",
      "Admin panel",
      "6 months free support",
      "Unlimited revisions",
      "Scalable architecture",
    ],
    deliveryTime: "30-45 days",
    gradient: "from-orange-600 to-red-500",
  },
];

export default function ServicePackages() {
  const [location, setLocation] = useState<"india" | "international">("india");
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  // Load Razorpay script
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setIsScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = (pkg: Package) => {
    if (!isScriptLoaded) {
      alert("Payment gateway is loading. Please try again in a moment.");
      return;
    }

    const amount = location === "india" ? pkg.price.india : pkg.price.international;
    const currency = location === "india" ? "INR" : "USD";

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay key
      amount: amount * 100, // Amount in smallest currency unit
      currency: currency,
      name: "Vinaytz",
      description: `${pkg.name} Package`,
      image: "/favicon.png",
      handler: function (response: any) {
        // Redirect to thank you page with payment details
        window.location.href = `/thank-you?payment_id=${response.razorpay_payment_id}&package=${encodeURIComponent(pkg.name)}`;
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      notes: {
        package: pkg.name,
        delivery_time: pkg.deliveryTime,
      },
      theme: {
        color: "#6366f1",
      },
      modal: {
        ondismiss: function () {
          console.log("Payment cancelled");
        },
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

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
          Service Packages
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 font-space-grotesk">
          Choose the perfect package tailored to your needs. Fixed pricing, transparent process, exceptional results.
        </p>

        {/* Location Selector */}
        <div className="inline-flex items-center gap-2 p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
 <button
  onClick={() => setLocation("india")}
  className={`px-6 py-2 rounded-full font-semibold transition-all font-syne
    ${location === "india"
      ? "bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] text-white shadow-[0_4px_20px_rgba(233,64,87,0.35)]"
      : "text-gray-400 hover:text-white hover:bg-white/5"}`
    }
>
  India (INR)
</button>

<button
  onClick={() => setLocation("international")}
  className={`px-6 py-2 rounded-full font-semibold transition-all font-syne
    ${location === "international"
      ? "bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] text-white shadow-[0_4px_20px_rgba(233,64,87,0.35)]"
      : "text-gray-400 hover:text-white hover:bg-white/5"}`
    }
>
  International (USD)
</button>

        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative group ${pkg.popular ? "lg:-mt-6" : ""}`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold font-syne">
                  Most Popular
                </div>
              </div>
            )}

            <div
              className={`relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 ${
                pkg.popular
                  ? "shadow-[0_0_50px_rgba(168,85,247,0.2)] hover:shadow-[0_0_80px_rgba(168,85,247,0.3)]"
                  : "hover:shadow-[0_0_50px_rgba(59,130,246,0.1)]"
              } hover:border-white/20 hover:-translate-y-2`}
            >
              {/* Icon */}
              <div className={`inline-flex p-3 bg-gradient-to-r ${pkg.gradient} rounded-2xl mb-6`}>
                {pkg.icon}
              </div>

              {/* Package Name */}
              <h3 className="text-2xl font-bold text-white mb-3 font-unbounded">{pkg.name}</h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 font-space-grotesk">
                  {location === "india" ? "₹" : "$"}
                  {location === "india" ? pkg.price.india.toLocaleString() : pkg.price.international}
                </span>
                <span className="text-gray-400 ml-2 font-syne">one-time</span>
              </div>

              {/* Delivery Time */}
              <div className="mb-6 text-sm text-gray-400 font-syne">
                🚀 Delivery: <span className="text-blue-400">{pkg.deliveryTime}</span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 font-space-grotesk">{pkg.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm font-space-grotesk">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => handlePayment(pkg)}
                className={`w-full py-4 rounded-full font-semibold transition-all bg-gradient-to-r ${pkg.gradient} text-white hover:scale-105 hover:shadow-lg font-syne`}
              >
                Get Started
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 text-center space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
          <span className="text-blue-300 font-semibold font-syne">💎 100% Satisfaction Guaranteed</span>
        </div>
        <p className="text-gray-400 max-w-2xl mx-auto font-space-grotesk">
          After successful payment, you'll be redirected to a confirmation page. I'll contact you within 48 hours to discuss your project requirements and timeline.
        </p>
      </motion.div>
    </div>
  );
}
