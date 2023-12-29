"use client";
import React, { useState, useTransition,useRef } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion,useInView} from "framer-motion";

export default function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  const Tab_Data = [
    {
      id: "skills",
      content: (
        <div className="flex flex-row sm:gap-6">
          <div >
            <h1 className="text-base sm:text-lg mb-2 text-pink-500">
              Frontend
            </h1>
            <ul className="pl-1 text-sm sm:text-base">
              <li>React.js</li>
              <li>Next.js</li>
              <li>Redux</li>
              <li>Tailwind Css</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Responsive-Design</li>
            </ul>
          </div>
          <div className="mr-6">
            <h1 className="text-base sm:text-lg mb-2 text-blue-500">Backend</h1>
            <ul className="pl-1 text-sm sm:text-base">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>SQL</li>
              <li>MongoDb</li>
              <li>Python</li>
              <li>JWT Auth</li>
              <li>Mongoose</li>
            </ul>
          </div>  
          <div>
            <h1 className="text-base sm:text-lg mb-2 text-yellow-500">Tools</h1>
            <ul className="pl-1 text-sm sm:text-base">
              <li>Git</li>
              <li>Github</li>
              <li>Postman</li>
              <li>Vercel</li>
              <li>Json-Server</li>
              <li>D365 fo</li>
          
            </ul>
          </div>     
        </div>
      ),
    },
    {
      id: "education",
      content: (
        <ul>
          <li className="flex flex-col gap-1">
            <span>Banaras Hindu University</span>
            <span className=" text-sm text-[#bfced8]">
              Master of Computer Application
            </span>
            <span className=" text-xs text-[#ADB7BE]">8.06 CGPA</span>
          </li>
          <li className="mt-3 flex flex-col gap-1">
            <span>Indraprastha University</span>
            <span className=" text-sm text-[#bfced8]">
              Bchelor of Computer Application
            </span>
            <span className=" text-xs text-[#ADB7BE]">8.7 CGPA</span>
          </li>
        </ul>
      ),
    },
    {
      id: "experience",
      content: (
        <div className="flex flex-col gap-1">
          <div className="flex sm:gap-4 flex-col sm:flex-row">
          <span>CROWE HORWATH LLP</span>
          <span className=" text-sm">{"( Feb 2023 - July 2023 )"}</span>
          </div>
          <span className=" text-sm text-[#bfced8]">TECHNICAL CONSULTANT </span>
          <ul className=" text-xs text-[#ADB7BE] sm:text-sm ">
            <li>
              Experience in implementing and customizing Dynamics 365 solutions
              for clients, including troubleshooting and issue resolution
            </li>
            <li className="mt-2">
              Worked with the CMA (Crowe Metal Accelerator) development team to
              create unit test cases for customizations
            </li>
          </ul>{" "}
          <span className=" text-xs text-[#bfced8] sm:text-sm">
            Skills - Dynamics D365 FO,{"  "}SQL,{"  "}X++
          </span>
        </div>
      ),
    },
  ];
  const refL=useRef(null)
  const refR=useRef(null)
  const inViewL=useInView(refL,{amount:0.5})
  const inViewR=useInView(refR,{amount:0.5})
  const variantsL={
     initial:{x:-100,opacity:0},
     animate:{x:0,opacity:1}
  }
  const variantsR={
    initial:{x:100,opacity:0},
    animate:{x:0,opacity:1}
 }
  return (
    <section className="text-white" id="#about">
      <div className="md:grid md:grid-cols-2 md:gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div ref={refL} variants={variantsL} initial="initial" animate={inViewL?"animate":"initial"} transition={{duration:0.8}}>
        <Image
          src="/Images/about-image.png"
          width={400}
          height={300}
          className="rounded m-auto md:m-0"
        />
        </motion.div>
        <motion.div ref={refR} variants={variantsR} initial="initial" animate={inViewR?"animate":"initial"} transition={{duration:0.75}}className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-3xl font-bold text-white  mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Recent graduate with a deep passion for programming and a solid web
            development background. Eager to contribute to a dynamic team, grow
            my expertise, and positively impact the IT industry. Seeking
            opportunities to apply my skills and learn from experienced
            professionals while leveraging my academic and project experience.
          </p>
          <div className="flex flex-row sm:gap-4 mt-8">
            <TabButton
              selectTab={() => {
                handleTabChange("skills");
              }}
              active={tab === "skills"}
            >
              {" "}
              Skills
            </TabButton>
            <TabButton
              selectTab={() => {
                handleTabChange("education");
              }}
              active={tab === "education"}
            >
              {" "}
              Education
            </TabButton>
            <TabButton
              selectTab={() => {
                handleTabChange("experience");
              }}
              active={tab === "experience"}
            >
              {" "}
              Experience
            </TabButton>
          </div>
          <div className="mt-6">
            {Tab_Data.find((item) => item.id === tab).content}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
