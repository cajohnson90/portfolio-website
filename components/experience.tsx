"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import useSectionInView from "@/lib/hooks";
import { experiencesData } from "@/lib/data";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  const { ref, inView } = useSectionInView("Experience");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="experience"
      ref={ref}
    >
      <SectionHeading>Experiences</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.5)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
              visible={true}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <h3 className="font-normal !mt-0">{item.location}</h3>
              <h3 className="text-gray-700">{item.description}</h3>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}
