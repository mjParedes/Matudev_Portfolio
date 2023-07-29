"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import heroImg from "/public/assets/hero_img.png";
import reactImg from "/public/assets/react_img.png";
import nodeImg from "/public/assets/node_img.png";
import pythonImg from "/public/assets/python_img.png";
import jsImg from "/public/assets/js_img.png";

const Hero = () => {

  return (
    // to Home
    <header className="w-full min-h-screen py-8 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="flex flex-col-reverse md:flex-row items-center sm:justify-around md:justify-between">
        <div className="flex flex-col gap-8">
          <motion.h1
            animate={{ x: [0, 100, 0] }}
            className="text-6xl font-semibold"
          >
            I´M MATIAS{" "}
          </motion.h1>
          <h2 className="text-4xl">I´m Fullstack Developer</h2>
          <div className="flex gap-10 mt-10">
            <Image
              src={reactImg}
              alt="react"
              width={50}
              height={50}
              className="hover:scale-125 cursor-pointer "
            />
            <Image
              src={nodeImg}
              alt="react"
              width={50}
              height={50}
              className="hover:scale-125 cursor-pointer "
            />
            <Image
              src={jsImg}
              alt="react"
              width={50}
              height={50}
              className="hover:scale-125 cursor-pointer "
            />
            <Image
              src={pythonImg}
              alt="react"
              width={50}
              height={50}
              className="hover:scale-125 cursor-pointer "
            />
          </div>
          <div className="w-full mt-2">
            <button
              type="button"
              className="bg-green-500 w-3/4 mx-auto p-3 rounded-2xl hover:font-semibold hover:bg-green-700 hover:border-2
              hover:border-white"
            >
              Download Resume
            </button>
          </div>
        </div>
        <motion.div
          animate={{
            rotate: [0, 20, -20, 0],
            transition: { duration: 2, delay: 2 },
          }}
        >
          <Image src={heroImg} alt="portrait" width={800} height={800} />
        </motion.div>
      </div>
    </header>

    // to Others
  );
};

export default Hero;
