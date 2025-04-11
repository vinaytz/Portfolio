import * as React from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  pauseOnHover?: boolean
  direction?: "left" | "right"
  speed?: number
}

export function Marquee({
  children,
  pauseOnHover = true,
  direction = "left",
  speed = 80,
  className,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn(
        " overflow-hidden z-10 px-20",
        className
      )} 
      {...props}
    >
      <div   style={{
    WebkitMaskImage:
      "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
  }}
      className="relative flex overflow-hidden">
        <div
        className={cn(
          "flex w-max animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]",
          direction === "right" && "animate-marquee-reverse"
        )}
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >

          {children}
          {children}
        </div>
      </div>
    </div>
  )
}