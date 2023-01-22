import React from "react";
import { Actions } from "./Actions";
import { Text } from "./HeroText";
import { motion } from "framer-motion";
import { Card } from "./Card";

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

export const Hero = () => {
  return (
    <div>
      <div className="w-full">
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
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full flex pt-4"
        >
          <motion.div variants={item} className="w-full p-4 border-y">
            <Card
              color={"#01b7d6"}
              className={"text-[#01b7d6]"}
              title={"TailwindCSS"}
              desc={
                "I used Tailwind to create beautiful UIs. I've used other frameworks like MUI, but they are too opinionated for me."
              }
              image="tw"
            />
          </motion.div>
          <motion.div variants={item} className="w-full p-4 border-y">
            <Card
              image="ts"
              color={"#017acc"}
              className={"text-[#017acc]"}
              title={"Typescript"}
              desc={
                "I have 2 years of experience in Typescript and use it in all my projects. It's my goto language because of it's strong types."
              }
            />
          </motion.div>
          <motion.div variants={item} className="w-full p-4 border-y">
            <Card
              image="next"
              color={"#000000"}
              className={"text-[#000000]"}
              title={"Next.js"}
              desc={
                "I've been working with next.js since I started React and I use it in many of my projects. I'm very proficient in it."
              }
            />
          </motion.div>
          <motion.div variants={item} className="w-full p-4 border-y">
            <Card
              image="react"
              color={"#61dafb"}
              className={"text-[#1694b7]"}
              title={"React.js"}
              desc={
                "React.js is a gold standard for web applications in 2023. With 2 years of experience of React.js I believe I am experienced in it."
              }
            />
          </motion.div>
          <motion.div variants={item} className="w-full p-4 border-y">
            <Card
              image="prisma"
              color={"#0c344b"}
              className={"text-[#0c344b]"}
              title={"Prisma"}
              desc={
                "Prisma is my goto ORM for the backend of an application. It provides an easy and good way to manage my databases."
              }
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
