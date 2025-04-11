"use client"

import { useEffect, useState } from "react";
import "@/styles/arrow.css"; // Import the CSS file

export default function DownArrow() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToSection}
      className={`absolute bottom-15 flex flex-col items-center justify-center ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <div className="chevron"></div>
      <div className="chevron"></div>
      <div className="chevron"></div>
    </button>
  );
}
