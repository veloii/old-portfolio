import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const Lines = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="absolute flex w-full -z-10"
    >
      <motion.div
        className="border-l h-screen w-full"
        variants={item}
      ></motion.div>
      <motion.div
        className="border-l h-screen w-full"
        variants={item}
      ></motion.div>
      <motion.div
        className="border-l h-screen w-full"
        variants={item}
      ></motion.div>
      <motion.div
        className="border-l h-screen w-full"
        variants={item}
      ></motion.div>
      <motion.div
        className="border-x h-screen w-full"
        variants={item}
      ></motion.div>
    </motion.div>
  );
};
