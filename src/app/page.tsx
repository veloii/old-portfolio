"use client";

import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { TechnologyList } from "@/components/TechnologyList";
import { CurrentProjectProvider } from "@/context/CurrentProjectContext";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <CurrentProjectProvider>
      <TechnologyList />
      <div className="space-y-12">
        <div className="max-w-7xl pt-16 pb-16 flex border-x-gray-800 mx-auto">
          <div>
            <Hero />
          </div>
        </div>
        <Projects />
      </div>
    </CurrentProjectProvider>
  );
}
