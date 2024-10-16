"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading childern="About Me" />
      <h3 className="text-3xl font-medium mb-8">A brief introduction</h3>
      <p className="mb-3">
        Hello there, 👋 I'm a passionate mid-level softwas developer on an
        exciting journey to explore and master new software technologies. After
        graduating with a degree in Computer Science, I pursued engineering
        roles in my college hometown, which eventually led me to start a new
        adventure in Seattle, where I am currently located in search of my next
        opportunity.
      </p>
      <p>
        When I am not coding, I enjoy trying new types of food and new places,
        research new technologies, staying active through exercise, and hit the
        golf course ⛳️ when I want a good challenge.
      </p>
    </motion.section>
  );
}
