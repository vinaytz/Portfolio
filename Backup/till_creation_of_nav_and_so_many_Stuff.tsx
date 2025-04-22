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
import MenuBarDemo from "@/components/other/mynavbar";
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
          "absolute inset-0",
          "opacity-30",
          "z-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      <div className="h-screen w-full">
        <div className="flex justify-center">
          <DownArrow />
        </div>
        <Meteors number={20} />

        {/* <section className="h-full relative "> */}
        {/* <div className="absolute top-30 left-30 text-4xl mx-auto font-bold text-neutral-600 dark:text-neutral-400">
              Hii, I can <Cover>Build <FlipWords words={words} />Websites</Cover> , <span className="text-colorfull animate-gradient-x font-nyght tracking-wide   ">Call me...</span> 
          </div> */}
        <div className="absolute inset-0 opacity-[0.2]">
            <TextHoverEffect text="Vinaytz" />
          </div>

        <section className="min-h-screen text-white overflow-hidden">
          <nav className="mt-10 flex w-full flex justify-center relative z-50"><MenuBarDemo/></nav>
          <div className="flex justify-center items-center h-[80vh]">
          <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-b from-black via-purple-900/20 to-[#0A0A0A] opacity-80 pointer-events-none" />
          
          <div className="z-10 text-center px-4">
                {/* <div className="flex justify-center mb-4">
                  <span className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full font-medium">New</span><span className="text-sm text-white ml-2">Next Ventures is live! <span className="ml-1">&gt;</span></span>
                </div> */}
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                I help founders turn ideas <br /> into seamless{" "}<span className="italic text-purple-400">digital experiences</span>
              </h1>
              <p className="text-lg md:text-xl mb-6">Hello, I'm <span className="font-semibold">Vinay Tiwari</span>, a Full Stack Developer</p>
              <div className="flex justify-center items-center gap-4">
                <button className="bg-white text-black px-5 py-3 rounded-full font-medium hover:bg-gray-200 transition-all">Let&apos;s Connect</button>
                <a href="mailto:developervinaytz@gmail.com" className="flex items-center space-x-2 hover:underline" >
                  <span className="material-symbols-outlined">Mail: </span>
                  <span>developervinaytz@gmail.com</span>
                </a>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 w-full h-24 bg-gradient-to-t to-[#0A0A0A]   to-transparent" />
          </div>
          
        </section>

        <div className="relative -mt-97 h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-40" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-zinc-900/20 dark:border-white/20 bg-white dark:bg-zinc-900" />
        <Sparkles density={1200} className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"/>
      </div>
        <section className="h-screen" id="about">
          <div className="flex items-center justify-center">
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mt-6 e py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
              {/* Build amazing websites <br/> at <Cover>warp speed</Cover> */}
            </h1>
            <div className="">
              {/* <img src="ss.svg" alt=""  className="absolute top-0"/> */}
              <img
                src="/aboutme.png"
                className="-rotate-20 m-5 justify-between rounded-3xl absolute right-10 "
                width={600}
                alt="profile"
              />
            </div>
          </div>  
        </section>
      </div>
      <div></div>
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <button className="mb-8 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4694f4_0%,#34D399_50%,#4694f4_100%)] px-4" />{" "}
                <span className="px-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black py-1 text-sm  text-white backdrop-blur-3xl  font-bold">
                  {item.badge}
                </span>
              </button>
              <p className={"text-5xl font-bold mb-8"}>{item.title}</p>

              <div className="winky-text text-2xl prose prose-sm dark:prose-invert text-slate-300">
                {item.description}
              </div>
            </div>
          ))}
        </div>
        <div className="inline-flex -space-x-px divide-x divide-primary-foreground/30 rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse"></div>
      </TracingBeam>
      {/* <div className=" w-[90%] h-[90%]">
         <GlobeDemo/>
      </div> */}

      <section className="h-screen">
        <HeroHighlight>
          <div className="lg:flex">
            <div className="ml-20">
              <div>
                <BackgroundCircles />
              </div>
              {/* <div className="w-120 text-gray-400 absolute winky-text text-xl">
                I build high-performance, scalable applications using React,
                Next.js, TypeScript, GSAP, Tailwind CSS, and component libraries
                like ShadCN & AceternityUI. On the back-end, I develop robust
                APIs with Node.js, Express.js, Flask, PostgreSQL, MongoDB, and
                MySQL, using Jinja2 for templating.
              </div>
              <div className="bg-black w-140 rounded-4xl">
                <MaskContainer revealText={
                    <p className="winky-text text-xl text-center text-slate-800 dark:text-white">
                      I build high-performance, scalable applications using React, Next.js, TypeScript, GSAP, Tailwind CSS, and component libraries like ShadCN & AceternityUI. On the back-end, I develop robust APIs with Node.js, Express.js, Flask, PostgreSQL, MongoDB, and MySQL, using Jinja2 for templating.
                    </p>
                  }
                  className="rounded-4xl border text-white dark:text-black">
                  Discover the power of <span className="text-blue-500">Tailwind CSS v4</span> with native CSS
                  variables and container queries with<span className="text-blue-500"> advanced animations</span>.
                </MaskContainer>
              </div> */}
            </div>
            <div className="ml-46 mt-35">
              <SkillsList />
            </div>
          </div>
          <div className="relative top-68">
            <MarqueeDemo />
          </div>
          {/* < Cursor /> */}
        </HeroHighlight>
      </section>

      <section className="h-fit" id="skills">
        <section id="projects">
          <MyProjects />
        </section>
      </section>
      <section className="h-screen">
        <div className="relative z-10 top-70 left-40 ">
          <h1 className="text-lg md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground font-sans font-bold">
            Follow Me
          </h1>
          <div className="flex space-x-4 p-6 pl-0">
            {[
              { icon: "fa-x-twitter", link: "https://x.com/vinaytzz/" },
              { icon: "fa-instagram", link: "https://instagram.com/vinaytz" },
              { icon: "fa-github", link: "https://github.com/vinaytz" },
              {
                icon: "fa-linkedin-in",
                link: "https://linkedin.com/u/vinaytz",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500 text-white hover:bg-gray-700 transition-all"
              >
                <i className={`fab ${item.icon} text-2xl`}></i>
              </a>
            ))}
          </div>
        </div>
        <div>h</div>
        <img src="try (3).jpg" alt="" />
      </section>

      <section className="h-screen">
        <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-7xl text-3xl pt-28 lg:text-9xl font-bold text-center text-white relative z-20">
            ThankYou :)
          </h1>
          <div className="w-[40rem] h-40 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
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
