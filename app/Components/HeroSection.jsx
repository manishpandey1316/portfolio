"use client";
import React from "react";
import Image from "next/image";
import { Link as LocLink } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import LinkedinIcon from "../../public/Images/linkedin.svg";
import GithubIcon from "../../public/Images/github.svg";
import codechefIcon from "../../public/Images/codechef.svg";
import LeetcodeIcon from "../../public/Images/leet.png";
import {
  linkdeinProfile,
  githubProfile,
  codechefProfile,
  leetcodeProfile,
} from "../constants";
import Link from "next/link";
export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-8 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 text-center sm:text-left place-self-center"
        >
          <h1 className="text-white mb-4 text-4xl sm:5xl lg:text:6xl font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Hello I'm{" "}
            </span>
            <TypeAnimation
              sequence={[
                "Manish Pandey",
                1000,
                "Full Stack Web Developer",
                1000,
                "Software Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
            An ambitious Full Stack Web Developer possessing a robust blend of
            technical prowess and interpersonal skills, committed to crafting
            dynamic and engaging web applications.
          </p>
          <div className="flex flex-row self-center justify-center gap-4 p-2 mt-4 sm:justify-start sm:gap-6 ">
            <Link
              href={linkdeinProfile}
              className=" border-2 border-white rounded-xl p-2 transform transition-transform delay-50 hover:scale-125 "
            >
              <Image
                src={LinkedinIcon}
                alt="Linkedin Icon"
                height={30}
                width={30}
              ></Image>
            </Link>
            <Link
              href={githubProfile}
              className=" border-2 border-white rounded-xl p-2 transform transition-transform delay-50 hover:scale-125 "
            >
              <Image
                src={GithubIcon}
                alt="Github Icon"
                height={30}
                width={30}
                className="bg-white"
              ></Image>
            </Link>
            <Link
              href={codechefProfile}
              className=" border-2 border-white rounded-xl p-2 transform transition-transform delay-50 hover:scale-125 "
            >
              <Image
                src={codechefIcon}
                alt="codechef Icon"
                height={30}
                width={30}
                className="bg-white"
              ></Image>
            </Link>
            <Link
              href={leetcodeProfile}
              className=" border-2 border-white rounded-xl p-2 transform transition-transform delay-50 hover:scale-125 "
            >
              <Image
                src={LeetcodeIcon}
                alt="Leetcode Icon"
                height={30}
                width={30}
              ></Image>
            </Link>
          </div>
          <div className="mt-4 sm:flex">
            <LocLink
              to={"#contact"}
              spy={true}
              smooth={true}
              offset={75}
              duration={500}
              className="cursor-pointer mt-3  transition-transform delay-100 active:scale-90"
              
            >
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white ">
                Hire Me
              </button>
            </LocLink>
            <a href="/Pdf/Resume.pdf" download="Resume.pdf" className="transition-transform delay-100 active:scale-90">
            <div className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3">
              <span className="block px-5 py-2 rounded-full bg-[#121212] hover:bg-slate-800">
                Download CV
              </span>
            </div>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5  mx-auto mt-10 lg:mt-12"
         >
            <div className="h-[325px] w-[275px]  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  relative ">
            <Image
              src="/Pics/5.jpg"
              alt="profile"
              height={250}
              width={250}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border-2 border-white"
            />
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
