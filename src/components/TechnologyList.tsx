import { CurrentProjectContext } from "@/context/CurrentProjectContext";
import { motion } from "framer-motion";
import React, { useContext } from "react";
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

export const TechnologyList = () => {
  const { myVirtualPet, unifiedBookmarks } = useContext(CurrentProjectContext);

  return (
    <>
      <motion.div
        style={{
          background: `linear-gradient(90deg, rgba(17, 24, 39,0) 0%, rgba(17, 24, 39,1) 60%)`,
        }}
        variants={container}
        initial="hidden"
        animate={myVirtualPet || unifiedBookmarks ? "show" : "hidden"}
        className="w-96 fixed md:flex hidden right-0 z-20 h-screen justify-center pr-2 pl-32 flex-col pt-4"
      >
        <motion.div variants={item} className={`w-full p-4`}>
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
        <motion.div variants={item} className={`w-full p-4`}>
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
        <motion.div variants={item} className={`w-full p-4`}>
          <div
            className={`w-full ${
              (unifiedBookmarks || myVirtualPet) &&
              "scale-90 opacity-30 blur-sm"
            } transition duration-500 ease-in-out`}
          >
            <Card
              image="next"
              color={"#000000"}
              className={"text-white"}
              title={"Next.js"}
              desc={
                "I've been working with next.js since I started React and I use it in many of my projects. I'm very proficient in it."
              }
            />
          </div>
        </motion.div>
        <motion.div variants={item} className={`w-full p-4`}>
          <div
            className={`w-full ${
              myVirtualPet && "scale-90 opacity-30 blur-sm"
            } transition duration-500 ease-in-out`}
          >
            <Card
              image="react"
              color={"#61dafb"}
              className={"text-[#1694b7]"}
              title={"React.js"}
              desc={
                "React.js is a gold standard for web applications in 2023. With 2 years of experience of React.js I believe I am experienced in it."
              }
            />
          </div>
        </motion.div>
        <motion.div variants={item} className={`w-full p-4`}>
          <Card
            image="prisma"
            color={"#0c344b"}
            className={"text-white"}
            title={"Prisma"}
            desc={
              "Prisma is my goto ORM for the backend of an application. It provides an easy and good way to manage my databases."
            }
          />
        </motion.div>
      </motion.div>
    </>
  );
};
