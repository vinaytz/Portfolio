'use client'

import { SplineScene } from "@/components/ui/splite";
import Link from "next/link";
import { Cover } from "@/components/ui/cover";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Vortex } from "@/components/ui/vortex";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Badge from "@/components/ui/badge";
import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { cn } from "@/lib/utils";
import { Meteors } from "@/components/ui/meteors";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

import { Button } from "@/components/ui/button";
import DownArrow from "@/components/other/DownArrow";
import GlobeDemo from "@/components/other/GlobeDemo";
import SkillsList from "@/components/other/skillsSection";

export default function Home() {
  const words = ["Full-stack", "Modern", "Scalable", "Optimized", "Ultra-Fast"];
  return (
    <>    
      <div className={cn("absolute inset-0", "opacity-30", "z-0", "[background-size:20px_20px]","[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]","dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",)}/>
      <div className="h-screen w-full">
        <div className="flex justify-center">
        <DownArrow/>
        </div>
         <Meteors number={20} />
        <nav className="flex justify-center m-10">
        <h1 className="absolute font-extrabold text-3xl text-amber-400 left-36 opacity-60 filter drop-shadow-[0_0_9px_rgba(251,191,36,1)]">.Portfolio :)</h1>
          <div className="text-gray-500 gap-10 flex h-10">
            <Link className="relative hover:text-emerald-500 hover:text-lg transition-all duration-300 ease-in-out " href="/about">Home</Link>
            <Link className="relative hover:text-emerald-500 hover:text-lg transition-all duration-300 ease-in-out " href="/about">Projects</Link>
            <Link className="relative hover:text-emerald-500 hover:text-lg transition-all duration-300 ease-in-out " href="/about">Skills</Link>
            <Link className="relative hover:text-emerald-500 hover:text-lg transition-all duration-300 ease-in-out " href="/about">About Me</Link>
          </div>
        </nav>
        <section className="h-full relative ">
                    <div className="absolute top-30 left-30 text-4xl mx-auto font-bold text-neutral-600 dark:text-neutral-400">
              Hii, I can <Cover>Build <FlipWords words={words} />Websites</Cover> , Call me...
          </div>
          <div className="absolute inset-0">
            <TextHoverEffect text="Vinaytz" />
          </div>
        </section>



        <section className="h-screen">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mt-6 e py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            {/* Build amazing websites <br/> at <Cover>warp speed</Cover> */}
          </h1>
          <div className="">
            {/* <img src="ss.svg" alt=""  className="absolute top-0"/> */}
            <img src="/bbb.png" className="-rotate-20 m-5 justify-between rounded-3xl absolute right-10 " width={600} alt="profile"/>
          </div>
        </div>
        </section>
      </div>
      <div>
      </div>
      <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <button className="mb-8 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"><span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4694f4_0%,#34D399_50%,#4694f4_100%)] px-4" /> <span className="px-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black py-1 text-sm  text-white backdrop-blur-3xl  font-bold">
               {item.badge}</span>
            </button>
            <p className={"text-5xl font-bold mb-8"}>
              {item.title}
            </p>
 
            <div className="winky-text text-2xl prose prose-sm dark:prose-invert text-slate-300">
              {item.image && (<div className="absolute"/>)}
              {item.description}
            </div>
          </div>
        ))}
      </div>
      <div className="inline-flex -space-x-px divide-x divide-primary-foreground/30 rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse">
      </div>
    </TracingBeam>
      {/* <div className=" w-[90%] h-[70%]">
         <GlobeDemo/>
      </div> */}
    </>
  );
}



const dummyContent = [
  {
    title: "Greetings, Ladies & Gentlemen. 👋",
    description: (
      <>
        <p>
        I am a self-made <span className="font-bold text-yellow-100 bg-slate-900 px-4 rounded-4xl">Full-Stack Developer</span> with 3 years of experience in building modern, <span className="underline decoration-gray-800  underline-offset-4">high-performance web applications.</span> My expertise lies in crafting visually compelling designs and developing seamless, user-friendly websites that provide an <span className="font-bold text-yellow-100 bg-slate-900 px-4 rounded-4xl">Exceptional user experience.</span>
        </p>
        <p className="pt-8 pb-30">I’m also a <span className="font-bold">Video Editor, a Tech Enthusiast, Astrophile, </span>and a <span className="font-bold">Creator</span> at heart,  but that’s another story never to be told.</p>
      </>
    ),
    badge: "About Me",
  },
  {
    title: "Freelance & Personal Projects",
    description: (
      <>
        <p>
        I have independently designed, developed, and deployed high-performance web applications for clients worldwide through freelance work and personal projects. With expertise in modern front-end frameworks and scalable back-end systems, I focus on delivering responsive, fast, and intuitive digital experiences.
        </p>
        <p className="pt-7 text-gray-400 pb-30">My expertise extends to UI/UX optimization, API integrations, and performance-driven development, ensuring seamless functionality across devices.</p>
      </>
    ),
    badge: "Experience",
    image:
      "",
  },
  { 
    title: "My Tech Stack 📂",
    description: (
      <>
        <p>
         I build high-performance, scalable applications using React, Next.js, TypeScript, GSAP, Tailwind CSS, and component libraries like ShadCN & AceternityUI. On the back-end, I develop robust APIs with Node.js, Express.js, Flask, PostgreSQL, MongoDB, and MySQL, using Jinja2 for templating.
        </p>
        <SkillsList/>
        <p className=""> 
        I specialize in API integrations (REST, GraphQL, Firebase), secure authentication (JWT), and Docker & Kubernetes for deployment in Linux environments. With expertise in DSA, C++, and Python libraries like PyAutoGUI, PyCrypto, OS and Matplotlib, I streamline workflows using Git, GitHub, and cloud platforms (Vercel, Netlify) for optimized performance.

        </p>
      </>
    ),
    badge: "Skills",
    image:
      "",
  },
];

