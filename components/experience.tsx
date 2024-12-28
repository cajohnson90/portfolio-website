"use client";

import React from "react";
import SectionHeading from "./section-heading";
import useSectionInView from "@/lib/hooks";
import { experiencesData } from "@/lib/data";
import { useTheme } from "@/context/theme-context";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.25);
  const { theme } = useTheme();

  return (
    <section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="experience"
      ref={ref}
    >
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.5)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              dateClassName="mx-3"
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "rgb(27, 36, 50)",
                fontSize: "1.5rem",
              }}
              visible={true}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <h3 className="font-normal !mt-0">{item.location}</h3>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
