"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Gradient } from "@/lib/gradient";

export const Text = ({ className }: { className?: string }) => {
  const [hovered, setHovered] = useState(true);

  useEffect(() => {
    const gradient: any = new Gradient();

    gradient.initGradient("#gradient-canvas");

    setTimeout(() => {
      setHovered(false);
    }, 1000);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        delay: 0.3,
        ease: "easeInOut",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${className} relative w-[769px] group`}
    >
      <motion.div
        initial={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 100%, black 100%)",
        }}
        animate={{
          WebkitMaskImage: hovered
            ? "linear-gradient(to right, transparent 100%, black 100%)"
            : "linear-gradient(to right, transparent 0%, black 0%)",
          letterSpacing: hovered ? "0.2rem" : "0.025rem",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="z-10 text-neutral-800 pointer-events-none absolute border-l border-l-rose-500 pl-8 w-full"
      >
        <h1
          style={{
            WebkitFontSmoothing: "subpixel-antialiased",
          }}
          className="text-8xl font-black leading-tight"
        >
          I create apps and websites
        </h1>
      </motion.div>
      <motion.div
        initial={{
          WebkitMaskImage: "linear-gradient(to left, transparent 0%, black 0%)",
        }}
        animate={{
          WebkitFontSmoothing: "subpixel-antialiased",
          WebkitMaskImage: hovered
            ? "linear-gradient(to left, transparent 0%, black 0%)"
            : "linear-gradient(to left, transparent 100%, black 100%)",
          letterSpacing: hovered ? "0.2rem" : "0.025rem",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="z-10 text-white pointer-events-none absolute pl-8 w-full"
      >
        <h1 className="text-8xl font-black leading-tight">
          I create apps and websites
        </h1>
      </motion.div>
      <motion.canvas
        id="gradient-canvas"
        initial={{
          WebkitMaskImage: "linear-gradient(to left, transparent 0%, black 0%)",
        }}
        animate={{
          WebkitMaskImage: hovered
            ? "linear-gradient(to left, transparent 0%, black 0%)"
            : "linear-gradient(to left, transparent 100%, black 0%)",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="h-64 w-full -mb-10 relative bottom-3 transition-all"
        data-transition-in
        data-js-darken-top
      />
    </motion.div>
  );
};
