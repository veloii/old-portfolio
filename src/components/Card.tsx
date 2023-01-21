import { motion } from "framer-motion";
import React from "react";

export const Card = ({
  color,
  className,
  title,
  image,
  desc,
}: {
  color: string;
  className: string;
  title: string;
  image: string;
  desc: string;
}) => {
  return (
    <div className="w-full p-4 border-y">
      <motion.div
        initial={{
          background: `radial-gradient(circle at 100% 0px, ${color}50, rgb(249, 250, 251) 70px)`,
        }}
        whileHover={{
          background: `radial-gradient(circle at 100% 0px, ${color}50, rgb(249, 250, 251) 170px)`,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="w-full relative shadow-sm bg-gray-50 rounded-2xl border"
      >
        <div className="absolute -top-[17px] shadow-md rounded-md -right-[17px]">
          <img className="h-8 rounded-md border" src={`/${image}.webp`} />
        </div>
        <p
          className={`text-center pointer-events-none ${className} text-2xl font-black pt-4`}
        >
          {title}
        </p>
        <p className="text-center text-gray-500 pointer-events-none font-semibold text-xs p-3 pt-1">
          {desc}
        </p>
      </motion.div>
    </div>
  );
};
