"use client";

import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Link from "next/link";
import { Cover } from "@/components/ui/cover";
import { FlipWords } from "@/components/ui/flip-words";
import { cn } from "@/lib/utils";
import { Meteors } from "@/components/ui/meteors";
import { TracingBeam } from "@/components/ui/tracing-beam";
import DownArrow from "@/components/other/DownArrow";
// import GlobeDemo from "@/components/other/GlobeDemo";
import SkillsList from "@/components/other/skillsSection";
import BackgroundCircles from "@/components/other/background-circles";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import MarqueeDemo from "@/components/other/demoskillMarquee";
import SparklesCore from "@/components/ui/sparkles";
import MyProjects from "@/components/other/MyProjects";
import PremiumProjects from "@/components/other/PremiumProjects";
import MinimalNavbar from "@/components/other/MinimalNavbar";
import { useState } from "react";
import { WebGLShader } from "@/components/ui/WebGLShader";
import Sparkles from "@/components/other/sparkles";



export default function Home() {
  const words = ["Full-stack", "Modern", "Scalable", "Optimized", "Ultra-Fast"];

  const [isOn, setIsOn] = useState(false);
  return (
    <>
      {/* Premium Navigation */}
      <MinimalNavbar />

      <div
        className={cn(
          "fixed inset-0",
          "opacity-20",
          "z-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      <div className="min-h-screen w-full relative">
        {/* <Meteors number={15} /> */}

        <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
            {/* <TextHoverEffect text="Vinaytz" /> */}
          </div>

        <section id="home" className="relative min-h-screen text-white overflow-hidden pt-20">

          <div className="relative flex flex-col justify-center items-center min-h-[calc(100vh-100px)] px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
            {/* <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-b from-black via-slate-900/30 to-black opacity-60 pointer-events-none" /> */}

            <div className="relative z-10 max-w-7xl mx-auto w-full">
              <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 md:space-y-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs sm:text-sm text-gray-300">Available for new projects</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight font-unbounded">
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 leading-tight">
                    Crafting Digital
                  </span>
                  <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500 leading-tight">
                    Experiences
                  </span>
                </h1>

                <p className="max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-space-grotesk">
                  Full Stack Developer transforming ideas into{" "}
                  <span className="text-white font-semibold">scalable</span>,{" "}
                  <span className="text-white font-semibold">high-performance</span> web applications
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-4 sm:pt-6 w-full sm:w-auto">
                  <a
                    href="#projects"
                    className="group relative inline-flex items-center justify-center px-8 py-3.5 sm:py-4 overflow-hidden font-medium transition-all bg-white text-black rounded-full hover:bg-gray-100 w-full sm:w-auto font-syne"
                  >
                    <span className="relative">View My Work</span>
                  </a>
                  <Link
                    href="/services"
                    className="group relative inline-flex items-center justify-center px-8 py-3.5 sm:py-4 overflow-hidden font-medium transition-all bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:scale-105 w-full sm:w-auto font-syne"
                  >
                    <span className="relative flex items-center gap-2">
                      <span>Hire Me</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                  <a
                    href="mailto:developervinaytz@gmail.com"
                    className="group relative inline-flex items-center justify-center px-8 py-3.5 sm:py-4 overflow-hidden font-medium transition-all bg-transparent border-2 border-white/20 text-white rounded-full hover:border-white/40 backdrop-blur-sm w-full sm:w-auto font-syne"
                  >
                    <span className="relative flex items-center gap-2">
                      <span>Get In Touch</span>
                    </span>
                  </a>
                </div>

                <div className="flex items-center gap-6 sm:gap-8 pt-8 sm:pt-12">
                  {[
                    { icon: "fa-github", link: "https://github.com/vinaytz", label: "GitHub" },
                    { icon: "fa-linkedin-in", link: "https://linkedin.com/u/vinaytz", label: "LinkedIn" },
                    { icon: "fa-x-twitter", link: "https://x.com/vinaytzz/", label: "Twitter" },
                  ].map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-3 rounded-full border border-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                      aria-label={item.label}
                    >
                      <i className={`fab ${item.icon} text-lg sm:text-xl text-gray-400 group-hover:text-white transition-colors`}></i>
                    </a>
                  ))}
                </div>
                
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:block">
              <DownArrow />
            </div>


            {/* Premium Sparkles Section - Bottom of Hero */}
            <div className="absolute bottom-0 left-0 right-0 h-64 sm:h-80 md:h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
              <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3b82f6,transparent_70%)] before:opacity-40" />
              <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-zinc-900/20 dark:border-white/20 bg-white dark:bg-zinc-900" />
              <Sparkles density={800} className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"/>
            </div>
          </div>
  
        </section>

        <section className="min-h-screen py-12 sm:py-16 md:py-20 lg:py-24" id="about">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 font-unbounded">
                  About Me
                </h2>
                <div className="space-y-4 text-gray-300 text-base sm:text-lg font-space-grotesk">
                  <p>
                    A passionate <span className="text-white font-semibold">Full-Stack Developer</span> with 3 years of experience building modern, scalable web applications that deliver exceptional user experiences.
                  </p>
                  <p>
                    Specializing in cutting-edge technologies including React, Next.js, TypeScript, and Node.js to create high-performance digital solutions.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-10 bottom-50 right-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-3xl blur-3xl"></div>
                  <img
                    src="https://portfolio-gamma-two-38.vercel.app/bbb.png"
                    className="relative rounded-3xl w-full h-full object-cover -rotate-[19deg] border-white/10"
                    alt="profile"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
      <TracingBeam className="px-4 sm:px-6">
        <div className="max-w-4xl mx-auto antialiased pt-4 relative pl-[30px]">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-12 sm:mb-16 md:mb-20">
              <button className="mb-6 sm:mb-8 relative inline-flex h-10 sm:h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#10b981_50%,#3b82f6_100%)] px-4" />{" "}
                <span className="px-6 sm:px-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black py-1 text-xs sm:text-sm text-white backdrop-blur-3xl font-bold font-syne">
                  {item.badge}
                </span>
              </button>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 font-unbounded">{item.title}</p>

              <div className="text-base sm:text-lg md:text-xl lg:text-2xl prose prose-sm dark:prose-invert text-slate-300 leading-relaxed font-space-grotesk">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
      </div>
      {/* <div className=" w-[90%] h-[90%]">
         <GlobeDemo/>
      </div> */}

      <section id="skills">
        
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex flex-col gap-2 sm:gap-4 items-start justify-start">
              <div className="flex justify-start w-full mb-2">
                <BackgroundCircles />
              </div>
              <div className="w-full lg:pl-8">
                <SkillsList />
              </div>
            </div>
            <div className="mt-66 sm:mt-20 md:mt-20 lg:mt-80">
              <MarqueeDemo />
            </div>
          </div>
      </section>

      <section className="min-h-screen" id="projects">
        <PremiumProjects />
      </section>
      <section className="relative py-32 pb-0 sm:py-40 md:py-48 lg:pb-10 overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] z-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm text-gray-300 font-medium">Get In Touch</span>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 font-unbounded">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-500">
                Let's Connect
              </span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto font-space-grotesk leading-relaxed">
              Ready to collaborate? Let's create something extraordinary together.
            </p>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto mb-16">
            {[
              { icon: "fa-x-twitter", link: "https://x.com/vinaytzz/", label: "Twitter", color: "from-blue-400 to-cyan-400" },
              { icon: "fa-instagram", link: "https://instagram.com/vinaytz", label: "Instagram", color: "from-pink-400 to-purple-400" },
              { icon: "fa-github", link: "https://github.com/vinaytz", label: "GitHub", color: "from-gray-300 to-gray-500" },
              { icon: "fa-linkedin-in", link: "https://linkedin.com/u/vinaytz", label: "LinkedIn", color: "from-blue-500 to-blue-700" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-8 transition-all duration-500 hover:border-white/30 hover:bg-black/60 hover:scale-105">
                  {/* Icon */}
                  <div className="flex flex-col items-center gap-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500 absolute inset-0 m-auto blur-xl`}></div>
                    <div className="relative w-14 h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover:border-white/40 transition-all duration-500">
                      <i className={`fab ${item.icon} text-2xl text-gray-300 group-hover:text-white transition-colors duration-500`}></i>
                    </div>
                    <span className="text-sm font-semibold text-gray-400 group-hover:text-white transition-colors duration-500 font-space-grotesk">
                      {item.label}
                    </span>
                  </div>

                  {/* Hover Gradient Border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <a
              href="mailto:developervinaytz@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Send Me an Email</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center justify-center py-20 sm:py-32 overflow-hidden">
        {/* WebGL Shader as Full Background */}
        <div className="absolute inset-0">
          <WebGLShader />
        </div>

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        
        {/* Cinematic Background with Rays */}
        <div className="absolute inset-0">
          {/* Radial Gradient */}
          {/* <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/60"></div> */}
          
          {/* Ambient Light Effects */}
          {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-purple-500/5 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-[150px]"></div> */}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          {/* Main Content */}
          <div className="mb-16">
            {/* Thank You Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-300 font-medium">Journey Complete</span>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 font-unbounded">
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-100 to-gray-500 leading-tight">
                Thank You
              </span>
            </h1>
            
            {/* <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 max-w-3xl mx-auto mb-6 font-space-grotesk leading-relaxed">
              Thank you for taking the time to explore my portfolio.
            </p> */}
            
            <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto font-space-grotesk">
              Let's collaborate and build something extraordinary together.
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#home"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-white/10"
            >
              <svg className="w-5 h-5 transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>Back to Top</span>
            </a>
            


<a
  href="mailto:developervinaytz@gmail.com"
  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full
  bg-[linear-gradient(135deg,rgba(255,255,255,0.15),rgba(255,255,255,0.03))]
  backdrop-blur-xl border border-white/10
  text-white font-semibold hover:scale-105 transition-all duration-300
  shadow-xl shadow-black/50"
>

              <span>Start a Project</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Bottom Gradient Fade */}
          {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div> */}
        </div>
      </section>
    </>
  );
}

const dummyContent = [
  {
    title: "Greetings, Ladies & Gentlemen. 👋",
    description: (
      <>
        <p>
          I am a self-made{" "}
          <span className="font-bold text-yellow-100 bg-slate-900 px-4 rounded-4xl">
            Full-Stack Developer
          </span>{" "}
          with 3 years of experience in building modern,{" "}
          <span className="underline decoration-gray-800  underline-offset-4">
            high-performance web applications.
          </span>{" "}
          My expertise lies in crafting visually compelling designs and
          developing seamless, user-friendly websites that provide an{" "}
          <span className="font-bold text-yellow-100 bg-slate-900 px-4 rounded-4xl">
            Exceptional user experience.
          </span>
        </p>
        <p className="pt-8 pb-15">
          I’m also a{" "}
          <span className="font-bold">
            Video Editor, a Tech Enthusiast, Astrophile,{" "}
          </span>
          and a <span className="font-bold">Creator</span> at heart, but that’s
          another story never to be told.
        </p>
      </>
    ),
    badge: "About Me",
  },
  {
    title: "Freelance & Personal Projects",
    description: (
      <>
        <p>
          I have independently designed, developed, and deployed
          high-performance web applications for clients worldwide through{" "}
          <span className="font-bold text-green-300 bg-slate-900 px-4 rounded-4xl">
            {" "}
            freelance work{" "}
          </span>{" "}
          and{" "}
          <span className="font-bold text-green-300 bg-slate-900 px-4 rounded-4xl">
            {" "}
            personal projects.
          </span>{" "}
          With expertise in modern front-end frameworks and scalable back-end
          systems, I focus on delivering responsive, fast, and intuitive digital{" "}
          <span className="font-bold text-red-300 bg-slate-900 px-4 rounded-4xl">
            experiences.
          </span>
        </p>
        <p className="pt-7 text-gray-400">
          My expertise extends to UI/UX optimization, API integrations, and
          performance-driven development, ensuring seamless functionality across
          devices.
        </p>
      </>
    ),
    badge: "Experience",
  },
];
