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
// import { LampContainer  } from "@/components/ui/lamp";
import  BackgroundCircles from "@/components/other/background-circles";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import MarqueeDemo from "@/components/other/demoskillMarquee";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { SplashCursor } from "@/components/other/splash-cursor";
import SparklesCore from "@/components/ui/sparkles";
import MyProjects from "@/components/other/MyProjects";
import { useState } from "react";
export default function Home() {
  const words = ["Full-stack", "Modern", "Scalable", "Optimized", "Ultra-Fast"];

  const [isOn, setIsOn] = useState(false);
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
            <Link className="relative hover:text-emerald-500 hover:text-lg transition-all duration-300 ease-in-out " href="#">Home</Link>
            <Link className="relative hover:text-emerald-500 hover:text-lg transition-all duration-300 ease-in-out " href="#projects">Projects</Link>
            <Link className="relative hover:text-emerald-500 hover:text-lg transition-all duration-300 ease-in-out " href="#skills">Skills</Link>
            <Link className="relative hover:text-emerald-500 hover:text-lg transition-all duration-300 ease-in-out " href="#about">About Me</Link>
          </div>
        </nav>
        <section className="h-full relative ">
                    <div className="absolute top-30 left-30 text-4xl mx-auto font-bold text-neutral-600 dark:text-neutral-400">
              Hii, I can <Cover>Build <FlipWords words={words} />Websites</Cover> , <span className="text-colorfull animate-gradient-x font-nyght tracking-wide   ">Call me...</span> 
          </div>
          <div className="absolute inset-0">
            <TextHoverEffect text="Vinaytz" />
          </div>
        </section>



        <section className="h-screen" id="about">
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
              {item.description}
            </div>
          </div>
        ))}
      </div>
      <div className="inline-flex -space-x-px divide-x divide-primary-foreground/30 rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse">
      </div>
    </TracingBeam>
      {/* <div className=" w-[90%] h-[90%]">
         <GlobeDemo/>
      </div> */}



      <section className="h-screen">
        <HeroHighlight>
          <div className="flex">
            <div className="ml-20">
              <div> 
                <BackgroundCircles/>
              </div>
              <div className="w-120 text-gray-400 absolute winky-text text-xl">I build high-performance, scalable applications using React, Next.js, TypeScript, GSAP, Tailwind CSS, and component libraries like ShadCN & AceternityUI. On the back-end, I develop robust APIs with Node.js, Express.js, Flask, PostgreSQL, MongoDB, and MySQL, using Jinja2 for templating.
              </div>
                {/* <div className="bg-black w-140 rounded-4xl">
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
              <SkillsList/>
            </div>
          </div>
          <div className="relative top-68">
          <MarqueeDemo/>

          </div>    
          {/* <SplashCursor /> */}
        </HeroHighlight>
      </section>



      <section className="h-fit" id="skills">
        <section id="projects">
         <MyProjects/>

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
               { icon: "fa-linkedin-in", link: "https://linkedin.com/u/vinaytz" },
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
        {/* <div className="flex items-center justify-center h-screen"> */}
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
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
      </section>
      
            
{/* <div className="h-screen">
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">   
 
<div className="flex flex-col items-center gap-4">
      <label className="relative inline-flex items-center cursor-pointer">
        <input 
          type="checkbox" 
          className="sr-only peer" 
          checked={isOn} 
          onChange={() => setIsOn(!isOn)}
        />
        <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5"></div>
        <span className="ml-3 text-sm font-medium text-white">{isOn ? "On" : "Off"}</span>
      </label>

      {isOn && (
        <div className="p-4 bg-blue-500 text-white rounded-lg shadow-lg">
          <p>This is the rendered component!</p>
        </div>
      )}
    </div>
  </span>
</button>
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
        I have independently designed, developed, and deployed high-performance web applications for clients worldwide through <span className="font-bold text-green-300 bg-slate-900 px-4 rounded-4xl"> freelance work </span> and  <span className="font-bold text-green-300 bg-slate-900 px-4 rounded-4xl"> personal projects.</span> With expertise in modern front-end frameworks and scalable back-end systems, I focus on delivering responsive, fast, and intuitive digital  <span className="font-bold text-red-300 bg-slate-900 px-4 rounded-4xl">experiences.</span> 
        </p>
        <p className="pt-7 text-gray-400">My expertise extends to UI/UX optimization, API integrations, and performance-driven development, ensuring seamless functionality across devices.</p>
      </>
    ),
    badge: "Experience",
  }
];

