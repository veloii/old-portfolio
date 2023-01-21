import React from "react";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export const Actions = () => {
  return (
    <div className="pt-12">
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: "easeInOut",
        }}
        className="text-2xl bg-white hover:translate-y-1 transition group border-l inline-flex gap-3 items-center border-l-rose-500 p-3 px-6 text-rose-500"
      >
        <ArrowDownIcon className="h-6" />
        see projects
      </motion.button>
    </div>
  );
};
