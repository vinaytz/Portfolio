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
import NavbarDemo from "@/components/other/mynavbar";
import { useState } from "react";

import Sparkles from "@/components/other/sparkles";
import { useTheme } from "next-themes"



export default function Home() {
  const words = ["Full-stack", "Modern", "Scalable", "Optimized", "Ultra-Fast"];

  const [isOn, setIsOn] = useState(false);
  return (
    <>
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
        <Meteors number={15} />

        <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
            <TextHoverEffect text="Vinaytz" />
          </div>

        <section className="relative min-h-screen text-white overflow-hidden">
          <nav className="pt-4 sm:pt-6 md:pt-8 lg:pt-10 px-4 sm:px-6 md:px-8"><NavbarDemo/></nav>

          <div className="relative flex flex-col justify-center items-center min-h-[calc(100vh-100px)] px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
            <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-b from-black via-slate-900/30 to-black opacity-60 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto w-full">
              <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 md:space-y-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs sm:text-sm text-gray-300">Available for new projects</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 leading-tight">
                    Crafting Digital
                  </span>
                  <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500 leading-tight">
                    Experiences
                  </span>
                </h1>

                <p className="max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                  Full Stack Developer transforming ideas into{" "}
                  <span className="text-white font-semibold">scalable</span>,{" "}
                  <span className="text-white font-semibold">high-performance</span> web applications
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-4 sm:pt-6 w-full sm:w-auto">
                  <a
                    href="#projects"
                    className="group relative inline-flex items-center justify-center px-8 py-3.5 sm:py-4 overflow-hidden font-medium transition-all bg-white text-black rounded-full hover:bg-gray-100 w-full sm:w-auto"
                  >
                    <span className="relative">View My Work</span>
                  </a>
                  <a
                    href="mailto:developervinaytz@gmail.com"
                    className="group relative inline-flex items-center justify-center px-8 py-3.5 sm:py-4 overflow-hidden font-medium transition-all bg-transparent border-2 border-white/20 text-white rounded-full hover:border-white/40 backdrop-blur-sm w-full sm:w-auto"
                  >
                    <span className="relative flex items-center gap-2">
                      <span>Get In Touch</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
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
          </div>
        </section>

        <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3b82f6,transparent_70%)] before:opacity-40" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-zinc-900/20 dark:border-white/20 bg-white dark:bg-zinc-900" />
        <Sparkles density={800} className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"/>
      </div>
        <section className="min-h-screen py-12 sm:py-16 md:py-20 lg:py-24" id="about">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                  About Me
                </h2>
                <div className="space-y-4 text-gray-300 text-base sm:text-lg">
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
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 blur-3xl"></div>
                  <img
                    src="https://portfolio-gamma-two-38.vercel.app/bbb.png"
                    className="relative rounded-3xl shadow-2xl w-full h-full object-coveyy"
                    alt="profile"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="py-12 sm:py-16 md:py-20">
      <TracingBeam className="px-4 sm:px-6">
        <div className="max-w-4xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-12 sm:mb-16 md:mb-20">
              <button className="mb-6 sm:mb-8 relative inline-flex h-10 sm:h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#10b981_50%,#3b82f6_100%)] px-4" />{" "}
                <span className="px-6 sm:px-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black py-1 text-xs sm:text-sm text-white backdrop-blur-3xl font-bold">
                  {item.badge}
                </span>
              </button>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">{item.title}</p>

              <div className="text-base sm:text-lg md:text-xl lg:text-2xl prose prose-sm dark:prose-invert text-slate-300 leading-relaxed">
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

      <section className="min-h-screen py-12 sm:py-16 md:py-20 lg:py-24">
        <HeroHighlight>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center">
              <div className="flex justify-center lg:justify-start w-full lg:w-auto">
                <div className="relative">
                  <BackgroundCircles />
                </div>
              </div>
              <div className="w-full lg:w-auto flex justify-center">
                <SkillsList />
              </div>
            </div>
            <div className="mt-12 sm:mt-16 md:mt-20">
              <MarqueeDemo />
            </div>
          </div>
        </HeroHighlight>
      </section>

      <section className="h-fit" id="skills">
        <section id="projects">
          <MyProjects />
        </section>
      </section>
      <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="try (3).jpg" alt="background" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 font-bold mb-8 sm:mb-12">
            Let's Connect
          </h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {[
              { icon: "fa-x-twitter", link: "https://x.com/vinaytzz/", label: "Twitter" },
              { icon: "fa-instagram", link: "https://instagram.com/vinaytz", label: "Instagram" },
              { icon: "fa-github", link: "https://github.com/vinaytz", label: "GitHub" },
              { icon: "fa-linkedin-in", link: "https://linkedin.com/u/vinaytz", label: "LinkedIn" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="group w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full border-2 border-white/20 text-white hover:border-white/60 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <i className={`fab ${item.icon} text-xl sm:text-2xl group-hover:scale-110 transition-transform`}></i>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-screen py-20 sm:py-24 md:py-32">
        <div className="h-full w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-center text-white relative z-20 mb-8">
            Thank You
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl text-center max-w-2xl mb-12 relative z-20">
            Thank you for visiting my portfolio. Let's build something amazing together.
          </p>
          <div className="w-full max-w-3xl h-40 relative">
            <div className="absolute inset-x-0 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[2px] w-full sm:w-3/4 blur-sm" />
            <div className="absolute inset-x-0 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-full sm:w-3/4" />
            <div className="absolute inset-x-0 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-[5px] w-full sm:w-1/4 blur-sm" />
            <div className="absolute inset-x-0 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px w-full sm:w-1/4" />

            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={800}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
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
        <p className="pt-8 pb-30">
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
