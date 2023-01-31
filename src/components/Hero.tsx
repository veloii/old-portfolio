import React from "react";
import { Actions } from "./Actions";
import { Text } from "./HeroText";
import { motion } from "framer-motion";
import { Card } from "./Card";

export const Hero = () => {
  return (
    <div className="flex pt-16 items-center">
      <div>
        <div className="mb-12">
          {/* <motion.div
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
          </motion.div> */}

          <Text />
        </div>
      </div>
    </div>
  );
};
