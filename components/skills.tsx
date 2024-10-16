"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import useSectionInView from "@/lib/hooks";
import { skillsData } from "@/lib/data";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <motion.section
      className="mb-28 max-w-[53rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="skills"
      ref={ref}
    >
      <SectionHeading children="Skills" />
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 ">
        {skillsData.map((skill, index) => (
          <li
            key={index}
            className="bg-white border border-black-[0.1] px-3 py-3 rounded-xl"
          >
            {skill}
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
