"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import useSectionInView from "@/lib/hooks";
import { projectsData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 1);

  return (
    <motion.section
      className="scroll-mt-28 mb-28"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="projects"
    >
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}
