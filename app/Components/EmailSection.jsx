"use client"
import Link from "next/link";
import GmailIcon from "../../public/Images/gmail.svg";
import LinkedinIcon from "../../public/Images/linkedin.svg";
import Image from "next/image";
import { emailId, linkdeinProfile } from "../constants";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion,useInView} from "framer-motion";
export default function EmailSection() {
  const Service_ID=process.env.NEXT_PUBLIC_Service_ID
  const Template_ID=process.env.NEXT_PUBLIC_Template_ID
  const Public_Key=process.env.NEXT_PUBLIC_Public_Key
  
    const form = useRef();
    const [success,setSuccess]=useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(Service_ID, Template_ID, form.current, Public_Key)
        .then((result) => {
             setSuccess(true);
        }, (error) => {
            setSuccess(false)
        });
        form.current.reset()
    };
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
   
    <section  className=" md:grid md:grid-cols-2 md:gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 relative" id="#contact">
     <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
     <motion.div ref={refL} variants={variantsL} initial="initial" animate={inViewL?"animate":"initial"} transition={{duration:0.5}}>
        <h5 className="text-xl font-bold text-white my-2">Let's connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I'm currently looking for new opportunities,my inbox is always open.
          whether you have a question or just want to say hi,I'll try my best to
          get back to you!
        </p>
        <div className="flex flex-row gap-6 p-2">
          <Link
            href={linkdeinProfile}
            className=" border-2 border-white rounded p-2 transform transition-transform delay-50 hover:scale-125 "
          >
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              height={30}
              width={30}
            ></Image>
          </Link>
          <Link
            href={`mailto:${emailId}`}
            className=" border-2 border-white rounded p-2 transform transition-transform transition-delay-300 hover:scale-125 "
          >
            <Image
              src={GmailIcon}
              alt="Gmail Icon"
              height={30}
              width={30}
            ></Image>
          </Link>
        </div>
      </motion.div>
      <motion.div ref={refR} variants={variantsR} initial="initial" animate={inViewR?"animate":"initial"} transition={{duration:0.5}} className="mt-10 sm:mt-0">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="abc@gmail.com"
              className="P
         bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              required
              placeholder="Just saying hi"
              className="
         bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              required
              placeholder="Let's talk about it"
              className="
         bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <input type="submit" value="Send Message" className="mt-6 bg-purple-500 text-white font-medium rounded-lg  py-2.5 px-5 w-full hover:bg-purple-600 transform transition-transform delay-100 focus:scale-95 cursor-pointer"/>
        </form>
        {
            success?<span className="text-green-600 font-semibold text-base flex justify-self-start mt-2">Successfully Sent</span>:null
        }
      </motion.div>
    </section>
  );
}















