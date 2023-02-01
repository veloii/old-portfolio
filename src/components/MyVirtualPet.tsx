import { CurrentProjectContext } from "@/context/CurrentProjectContext";
import useOnScreen from "@/hooks/useOnScreen";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { useRef, useState } from "react";

export default function MyVirtualPet() {
  const { setMyVirtualPet } = useContext(CurrentProjectContext);
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    setMyVirtualPet(isVisible);
  }, [isVisible]);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 32 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.75,
        ease: "easeInOut",
      }}
      className="pb-64"
    >
      <div className="pl-16 max-w-7xl mt-32 mx-auto bg-gray-800 bg-opacity-10 rounded-3xl border shadow-lg px-6 border-gray-800">
        <div className="mx-auto relative right-8 pt-8">
          <svg
            width="606"
            className="absolute opacity-20 -z-10 right-0 top-16"
            height="570"
            viewBox="0 0 606 570"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M226.806 0.240244C278.853 -3.96778 316.227 48.244 364.773 67.4759C428.939 92.8958 513.277 78.0949 557.367 131.194C601.835 184.746 624.344 275.756 585.904 333.787C543.526 397.763 439.162 369.718 373.29 409.085C335.993 431.374 329.021 483.896 293.31 508.648C247.912 540.113 197.403 575.775 142.585 568.987C86.3581 562.025 28.4846 525.306 6.41817 473.124C-15.4825 421.333 25.0397 365.665 33.0721 310.011C38.4771 272.562 34.5833 235.645 45.9037 199.541C58.572 159.138 74.0104 120.036 102.469 88.6833C137.36 50.2441 175.062 4.42377 226.806 0.240244Z"
              fill="#fda4af"
            />
          </svg>
          <svg
            width="582"
            className="absolute h-1/3 opacity-20 -z-10 left-32 bottom-2"
            height="522"
            viewBox="0 0 582 522"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M279.791 10.2617C326.787 -0.99403 376.671 -4.36508 421.806 12.901C472.395 32.2533 518.639 65.5945 546.25 112.193C575.327 161.265 587.501 220.51 578.164 276.78C568.923 332.48 538.838 384.741 495.104 420.45C454.511 453.595 397.435 448.623 347.652 464.995C295.691 482.083 249.083 532.517 196.14 518.771C143.277 505.045 118.09 445.117 90.2106 398.153C66.2836 357.846 59.5045 312.512 46.8994 267.365C32.1671 214.6 -20.1951 156.395 9.93717 110.643C41.7876 62.2811 121.388 92.0421 175.662 71.8531C214.24 57.5027 239.763 19.8486 279.791 10.2617Z"
              fill="#fda4af"
            />
          </svg>

          <div className="space-y-2">
            <h3 className="text-3xl uppercase border-l-4 pt-2 pl-4 tracking-widest font-black text-rose-300 border-l-rose-300">
              My Virtual Pet.
            </h3>
            <p className="text-xl font-bold max-w-3xl pt-3 leading-relaxed text-gray-200">
              Take care to pets with friends.
            </p>
            <ul className="space-y-1 pt-4 ">
              <li className="text-lg max-w-3xl leading-relaxed text-gray-300">
                In early development.
              </li>
              <li className="text-lg max-w-3xl leading-relaxed text-gray-300">
                Native iOS and Android App.
              </li>
              <li className="text-lg max-w-3xl leading-relaxed text-gray-300">
                Created with{" "}
                <a
                  href="https://reactnative.dev/"
                  target="_blank"
                  className="font-bold text-rose-300 hover:text-rose-400 transition ease-in-out duration-200"
                  rel="noreferrer"
                >
                  React Native
                </a>
                .
              </li>
            </ul>
          </div>
          {/* <div className={`flex gap-5 relative top-64`}>
            <Image
              src="/un-mobile.png"
              width={400}
              height={1185}
              className="rounded-md h-full"
              alt={""}
              draggable={false}
            />
            <Image
              src="/un-desktop.png"
              width={2560}
              height={1185}
              className="rounded-md h-full"
              alt={""}
              draggable={false}
            />
          </div> */}
          <div ref={ref}></div>
        </div>
      </div>
    </motion.div>
  );
}
