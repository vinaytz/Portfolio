"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Sparkles, Award, TrendingUp, Zap, Code2, Globe, Lock, Cpu } from "lucide-react";
import Image from "next/image";

interface ProjectProps {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  gradient: string;
  icon: React.ReactNode;
  stats: {
    label: string;
    value: string;
  }[];
  features: string[];
  demoLink?: string;
  githubLink?: string;
}

const projects: ProjectProps[] = [
  {
    id: 1,
    title: "Musarion",
    category: "AI Platform",
    description: "AI-Powered Platform for Intelligent Content Generation & Automation",
    longDescription: "A cutting-edge AI platform that integrates multiple language models to deliver intelligent, context-aware responses. Built with modern MERN stack architecture for seamless scalability.",
    tags: ["React", "Node.js", "AI/ML", "MongoDB", "TypeScript"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    gradient: "from-blue-600 via-purple-600 to-pink-600",
    icon: <Sparkles className="w-6 h-6" />,
    stats: [
      { label: "AI Models", value: "5+" },
      { label: "Response Time", value: "<2s" },
      { label: "Accuracy", value: "98%" },
    ],
    features: [
      "Multi-AI model integration",
      "Real-time content generation",
      "Advanced context awareness",
      "Scalable cloud infrastructure",
    ],
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "NoctiFlex",
    category: "Streaming Platform",
    description: "A Scalable & Secure Video Streaming Platform",
    longDescription: "Enterprise-grade video streaming solution with adaptive bitrate streaming, DRM protection, and CDN integration. Built to handle millions of concurrent users.",
    tags: ["Next.js", "AWS", "WebRTC", "Redis", "HLS/DASH"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    gradient: "from-red-600 via-orange-600 to-yellow-600",
    icon: <Globe className="w-6 h-6" />,
    stats: [
      { label: "Concurrent Users", value: "10M+" },
      { label: "Uptime", value: "99.9%" },
      { label: "Latency", value: "<100ms" },
    ],
    features: [
      "Adaptive streaming (HLS/DASH)",
      "DRM content protection",
      "CDN integration for global reach",
      "Real-time analytics dashboard",
    ],
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Brainify",
    category: "EdTech Platform",
    description: "Simplifying Education & Seamless Learning & Assessment",
    longDescription: "Comprehensive learning management system with integrated assessment tools, progress tracking, and personalized learning paths powered by AI.",
    tags: ["React", "Python", "PostgreSQL", "Docker", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    icon: <Award className="w-6 h-6" />,
    stats: [
      { label: "Active Users", value: "50K+" },
      { label: "Courses", value: "1000+" },
      { label: "Completion Rate", value: "87%" },
    ],
    features: [
      "Adaptive learning algorithms",
      "Integrated quiz & exam system",
      "Real-time progress tracking",
      "Mobile-first responsive design",
    ],
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 4,
    title: "QuantumPay",
    category: "FinTech Solution",
    description: "Next-Generation Payment Processing System",
    longDescription: "Secure, lightning-fast payment gateway with blockchain integration, supporting multiple currencies and payment methods with enterprise-grade security.",
    tags: ["Node.js", "Blockchain", "Stripe", "Plaid", "MongoDB"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
    icon: <Lock className="w-6 h-6" />,
    stats: [
      { label: "Transactions/day", value: "1M+" },
      { label: "Security Score", value: "A+" },
      { label: "Processing Time", value: "<3s" },
    ],
    features: [
      "Multi-currency support",
      "Blockchain transaction ledger",
      "PCI DSS compliant security",
      "Fraud detection AI",
    ],
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 5,
    title: "DevOps Central",
    category: "Infrastructure Platform",
    description: "Unified DevOps & CI/CD Orchestration Platform",
    longDescription: "Comprehensive DevOps platform that streamlines deployment pipelines, container orchestration, and infrastructure management with intelligent automation.",
    tags: ["Kubernetes", "Terraform", "Jenkins", "Grafana", "Prometheus"],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop",
    gradient: "from-cyan-600 via-blue-600 to-indigo-600",
    icon: <Cpu className="w-6 h-6" />,
    stats: [
      { label: "Deployments/day", value: "500+" },
      { label: "Infrastructure", value: "Cloud-Native" },
      { label: "Automation", value: "95%" },
    ],
    features: [
      "Automated CI/CD pipelines",
      "Container orchestration",
      "Infrastructure as Code",
      "Real-time monitoring & alerts",
    ],
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 6,
    title: "NeuroCommerce",
    category: "E-Commerce AI",
    description: "AI-Driven Personalized Shopping Experience",
    longDescription: "Revolutionary e-commerce platform using machine learning to deliver hyper-personalized shopping experiences with predictive recommendations and dynamic pricing.",
    tags: ["Next.js", "TensorFlow", "GraphQL", "Redis", "Elasticsearch"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    gradient: "from-orange-600 via-red-600 to-pink-600",
    icon: <TrendingUp className="w-6 h-6" />,
    stats: [
      { label: "Conversion Rate", value: "+45%" },
      { label: "Revenue Growth", value: "+120%" },
      { label: "Customer Satisfaction", value: "4.9/5" },
    ],
    features: [
      "AI-powered recommendations",
      "Dynamic pricing engine",
      "Visual search technology",
      "Predictive inventory management",
    ],
    demoLink: "#",
    githubLink: "#",
  },
];

export default function PremiumProjects() {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Professional Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/3 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <Code2 className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300 font-medium">Featured Work</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 font-unbounded">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Premium
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Projects
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-space-grotesk">
            Crafting exceptional digital experiences with cutting-edge technology
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-700 hover:border-white/30 hover:shadow-2xl hover:shadow-white/5">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    animate={{
                      scale: hoveredId === project.id ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  
                  {/* Gradient Overlay - More Subtle */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 mix-blend-overlay`} />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20">
                    <div className="flex items-center gap-2">
                      {project.icon}
                      <span className="text-xs font-semibold text-white">{project.category}</span>
                    </div>
                  </div>

                  {/* Quick Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredId === project.id ? 1 : 0,
                      y: hoveredId === project.id ? 0 : 20,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute top-4 right-4 flex gap-2"
                  >
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-full bg-black/70 backdrop-blur-md border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                      >
                        <Github className="w-4 h-4 text-white" />
                      </a>
                    )}
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-full bg-black/70 backdrop-blur-md border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </a>
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-unbounded transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2 font-space-grotesk">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-gray-300">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                    {project.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle Hover Glow Effect */}
                <motion.div
                  animate={{
                    opacity: hoveredId === project.id ? 0.15 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 blur-2xl -z-10 pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider font-semibold">Built With Modern Technologies</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", "Docker", "Kubernetes", "AI/ML", "Blockchain"].map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all"
              >
                <span className="text-sm text-gray-300 font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Detailed Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-50 overflow-y-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8"
          >
            <div className="min-h-full flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-black/80 backdrop-blur-3xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl shadow-black/50"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 p-3 rounded-full bg-black/80 backdrop-blur-md border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-xl"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

              {/* Modal Content */}
              <div className="relative h-80">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.gradient} opacity-30 mix-blend-overlay`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/20">
                      {selectedProject.icon}
                    </div>
                    <span className="text-sm text-gray-300 font-semibold">{selectedProject.category}</span>
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2 font-unbounded">{selectedProject.title}</h3>
                  <p className="text-lg text-gray-300 font-space-grotesk">{selectedProject.description}</p>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 font-unbounded">Overview</h4>
                  <p className="text-gray-400 leading-relaxed font-space-grotesk">{selectedProject.longDescription}</p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {selectedProject.stats.map((stat, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-3 font-unbounded">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400 text-sm font-space-grotesk">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-3 font-unbounded">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-sm rounded-lg bg-white/5 border border-white/10 text-gray-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  {selectedProject.demoLink && (
                    <a
                      href={selectedProject.demoLink}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-105 transition-transform"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Live Demo
                    </a>
                  )}
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      View Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
