"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import portraitImg from "@/public/portrait.png";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import useSectionInView from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <div className="relative">
            <Image
              className="object-cover h-32 w-32 shadow-xl border-[0.25rem] border-white rounded-full"
              src={portraitImg}
              alt="Cameron Johnson portrait"
              width="192"
              height="192"
              priority={true}
            />
            <motion.span
              className="absolute bottom-0 right-0 text-4xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </div>
        </motion.div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <span className="font-bold">Hi, I'm Cameron. </span>I'm a{" "}
        <span className="font-bold">full-stack developer </span> with{" "}
        <span className="font-bold">10 years </span>
        of programming experience. Join me on this journey, and let’s turn ideas
        into software solutions together! ✨
      </motion.p>

      <motion.div
        className="flex flex-col items-center justify-center font-medium text-lg gap-3 px-4 sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact"), setTimeOfLastClick(Date.now());
          }}
        >
          Send a Message{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white text-gray-700 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
          href="https://www.linkedin.com/in/cameron-johnson-10x/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hactive:scale-105 transition cursor-pointer borderBlack"
          href="https://github.com/cajohnson90/"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
