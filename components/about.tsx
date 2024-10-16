"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useSectionInView from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading children="About Me" />
      <p className="mb-3">
        Hello there, 👋 I'm a passionate full-stack developer on an exciting
        journey to explore and master new software technologies. After
        graduating with a degree in Computer Science, I pursued engineering
        roles in my college hometown, which eventually led me to start a new
        adventure in Seattle, where I am currently located in search of my next
        opportunity.
      </p>
      <p>
        My technical background involves back-end and front-end web development,
        as well as writing CI/CD pipelines and performing automated testing.
      </p>
      <p>
        When I am not coding, I enjoy trying new types of food and new places,
        research new technologies, staying active through exercise, and hit the
        golf course ⛳️ when I want a good challenge.
      </p>
    </motion.section>
  );
}
