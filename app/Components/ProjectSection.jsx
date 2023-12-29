"use client"
import React,{useRef} from "react";
import ProjectCard from "./ProjectCard";
import { motion,useInView} from "framer-motion";
export default function ProjectSection() {
  const ProjectData = [
    {
      id: 1,
      title: "E-commerce Application",
      description:
        " A full-stack MERN (MongoDB, Express.js, React, Node.js) e-commerce application integrated with Stripe for seamless payment processing and Nodemailer for efficient email notifications and communication",
      image: "/Images/ecommerce.png",
      gitUrl:"https://github.com/manishpandey1316/e-commerce",
      previewUrl:"https://e-commerce-one-smoky.vercel.app/",
    },
    {
      id: 2,
      title: "React NetFlix Clone",
      description:
        "A React Netflix clone utilizing styled-components for dynamic styling and integrating the TMDB API for fetching and displaying movie data, providing an immersive streaming experience.",
      image: "/Images/netflix.png",
      gitUrl:"https://github.com/manishpandey1316/Netflix-clone",
      previewUrl:"https://netflix-clone-ecru-eta.vercel.app",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
      "A Next.js-based portfolio project using Tailwind CSS combines the powerful React framework for seamless page rendering with the utility-first styling approach of Tailwind CSS, creating a performant and visually appealing personal portfolio website.",
      image: "/Images/portfolio.png",
      gitUrl:"https://github.com/manishpandey1316/portfolio",
      previewUrl:"https://portfolio-theta-three-23.vercel.app/",
    },
    {
      id: 4,
      title: "Quiz Application",
      description:
        "A React quiz application featuring a timer for time-bound questions and leveraging Chart.js for visualizing performance results, enhancing user engagement and analytical insights.",
      image: "/Images/quiz.png",
      gitUrl:"https://github.com/manishpandey1316/quiz-app",
      previewUrl:"https://quiz-app-lilac-xi.vercel.app/",
    },
    {
      id: 5,
      title: "URL shortener",
      description:
      "An Express.js and MongoDB-based URL shortener using EJS for dynamic templating, allowing users to shorten and manage URLs efficiently with a clean and intuitive interface.",
      image: "/Images/url.png",
      gitUrl:"https://github.com/manishpandey1316/URL-Shortener",
      previewUrl:"https://url-shortener-gamma-opal.vercel.app/",
    },
    {
      id: 6,
      title: "Snake game",
      description: "A classic Snake game implemented using vanilla JavaScript, HTML, and CSS, offering an interactive and visually appealing gaming experience",
      image: "Images/snake.png",
      gitUrl:"https://github.com/manishpandey1316/snake-game",
      previewUrl:"https://snake-game-pearl-eta.vercel.app/",
    },
  ];
  const ref=useRef(null)
  const inView=useInView(ref,{amount:0.1})
  const variants={
     initial:{y:50,opacity:0},
     animate:{y:0,opacity:1}
  }

  return (
    <div id="#project">
      <h2 className="text-center text-white text-4xl font-bold mt-4 mb-8">My Projects</h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-6 md:gap-12  p-4 lg:px-10">
        {
            ProjectData.map((project,index)=>(
              <motion.li key={index}  variants={variants} initial="initial" animate={inView?"animate":"initial"} transition={{duration:0.5,delay:index*0.6}}>
               <ProjectCard key={project.id} title={project.title}
                image={project.image} description={project.description}
                gitUrl={project.gitUrl} previewUrl={project.previewUrl}
               />
               </motion.li>
            ))
        }
      </ul>
    </div>
  );
}
