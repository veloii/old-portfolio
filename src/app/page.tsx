"use client";

import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="max-w-7xl flex relative min-h-screen mx-auto">
      <div>
        <Hero />
        <Projects />
      </div>
    </div>
  );
}
