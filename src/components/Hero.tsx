import React from "react";
import { Actions } from "./Actions";
import { Text } from "./HeroText";
import { Lines } from "./Lines";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="max-w-7xl flex relative min-h-screen mx-auto">
      <Lines />
      <div>
        <div className="mt-32 mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            style={{
              WebkitFontSmoothing: "subpixel-antialiased",
            }}
            className="text-2xl -mt-12 italic w-full absolute font-black uppercase tracking-widest text-gray-600 px-10"
          >
            Hello I&lsquo;m zelr
          </motion.div>

          <Text />
        </div>
      </div>
    </div>
  );
};
