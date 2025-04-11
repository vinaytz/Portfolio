"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface BackgroundCirclesProps {
    title?: string;
    description?: string;
    className?: string;
    variant?: keyof typeof COLOR_VARIANTS;
}

const COLOR_VARIANTS = {
    octonary: {
        border: [
            "border-red-500/60",
            "border-rose-400/50",
            "border-red-600/30",
        ],
        gradient: "from-red-500/30",
    },
} as const;



export default function BackgroundCircles({
    title = "Background Circles",
    variant = "octonary",
}: BackgroundCirclesProps) {
    const variantStyles = COLOR_VARIANTS[variant];

    const variants = Object.keys(
        COLOR_VARIANTS
    ) as (keyof typeof COLOR_VARIANTS)[];

    return (
        <div className={clsx("relative flex items-center justify-center h-[340px] w-[340px] overflow-hidden")}>
        <motion.div className="absolute h-[240px] w-[240px]">
            {[0, 1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    className={clsx(
                        "absolute inset-0 rounded-full",
                        "border-2 bg-gradient-to-br to-transparent",
                        variantStyles.border[i],
                        variantStyles.gradient
                    )}
                    animate={{
                        rotate: 360,
                        scale: [1, 1.05 + i * 0.05, 1],
                        opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                >
                    <div
                        className={clsx(
                            "absolute inset-0 rounded-full mix-blend-screen",
                            `bg-[radial-gradient(ellipse_at_center,${variantStyles.gradient.replace(
                                "from-",
                                ""
                            )}/10%,transparent_70%)]`
                        )}
                    />
                </motion.div>
            ))}
        </motion.div>
    
        {/* Centered Text */}
        <h1 className="absolute text-5xl font-bold tracking-tight md:text-7xl bg-gradient-to-b from-slate-950 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent drop-shadow-[0_0_32px_rgba(94,234,212,0.4)]">
            Skills
        </h1>
    </div>
    
    );
}