"use client";

import DisplayCards from "@/components/other/display-cards";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
const class1 =
  "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0";

const class2 =
  "[grid-area:stack] translate-x-6 sm:translate-x-12 translate-y-8 sm:translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0";

const class3 =
  "[grid-area:stack] translate-x-12 sm:translate-x-24 translate-y-16 sm:translate-y-20 hover:translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0";

const class4 =
  "[grid-area:stack] translate-x-18 sm:translate-x-36 translate-y-24 sm:translate-y-30 hover:translate-y-20 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0";

const class5 =
  "[grid-area:stack] translate-x-24 sm:translate-x-48 translate-y-32 sm:translate-y-40 hover:translate-y-30 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0";

const class6 =
  "[grid-area:stack] translate-x-30 sm:translate-x-60 translate-y-40 sm:translate-y-50 hover:translate-y-40";

  
export default function SkillsList() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768); // sm < 768, md >= 768
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const defaultCards = [
    {
      icon: <Sparkles className="size-4 text-pink-300" />,
      title: "Tools",
      description: "Git, GitHub, VS Code, Figma, Postman",
      date: "Daily Use",
      iconClassName: "text-pink-500",
      titleClassName: "text-pink-500",
      className: class1,
    },
    {
      icon: <Sparkles className="size-4 text-orange-300" />,
      title: "Languages",
      description: "JavaScript, TypeScript, Python, C++",
      date: "Polyglot",
      iconClassName: "text-orange-500",
      titleClassName: "text-orange-500",
      className: `${isMobile? "hidden": class2}`,
    },
    {
      icon: <Sparkles className="size-4 text-cyan-300" />,
      title: "DevOps",
      description: "Docker, Kubernetes, Linux, Vercel, Netlify",
      date: "Engineer",
      iconClassName: "text-cyan-500",
      titleClassName: "text-cyan-500",
      className: `${isMobile? class2: class3}`,
    },
    {
      icon: <Sparkles className="size-4 text-emerald-300" />,
      title: "API & Auth",
      description: "REST, GraphQL, Firebase, JWT, OAuth",
      date: "Expert",
      iconClassName: "text-emerald-500",
      titleClassName: "text-emerald-500",
      className: `${isMobile? "hidden": class4}`,
    },
    {
      icon: <Sparkles className="size-4 text-purple-300" />,
      title: "Back-End",
      description: "Node.js, Express.js, Flask, PostgreSQL, MongoDB",
      date: "Developer",
      iconClassName: "text-purple-500",
      titleClassName: "text-purple-500",
      className: `${isMobile? class3: class5}`,
    },
    {
      icon: <Sparkles className="size-4 text-blue-300" />,
      title: "Front-End",
      description: "React, Next.js, TypeScript, GSAP, TailwindCSS, ShadCN",
      date: "Specialist",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
      className: `${isMobile? class4: class6}`,
    },
  ];
  return (
    <div className="w-full max-w-[95vw] sm:max-w-3xl">
      <DisplayCards cards={defaultCards} />
    </div>
  );
}
