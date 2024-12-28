import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import texttoolImg from "@/public/texttool.png";
import atmsImg from "@/public/atms.png";
import webstoreImg from "@/public/webstore.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated College",
    location: "Corvallis, OR",
    description:
      "After finishing college, I secured a position as an Information Specialist at the Corvallis Clinic.",
    icon: React.createElement(LuGraduationCap),
    date: "2013",
  },
  {
    title: "Software Engineer",
    location: "Corvallis, OR",
    description:
      "I worked as a Software Engineer at Polycom for nearly two years, where I developed Java web applications that marked the beginning of my professional engineering career.",
    icon: React.createElement(CgWorkAlt),
    tags: ["Java", "React", "Android", "Scrum"],
    date: "2013 - 2015",
  },
  {
    title: "Software Localization Engineer",
    location: "Corvallis, OR",
    description:
      "I stepped into engineering role at Transperfect that involved creating scripts to automate manual tasks to handle processing data files from our clients and deliver them with translations",
    icon: React.createElement(FaReact),
    tags: ["HTML", "CSS", "Javascript", "Regular Expressions", "AWS", "Project Management", "TMS"],
    date: "2015 - 2019",
  },
  {
    title: "Software Localization Engineer",
    location: "Seattle, WA",
    description:
      "As an experienced engineering in the localization space, I moved to Seattle to begin working at Facebook, to write data pipelines and provide analtics about our localization migration.",
    icon: React.createElement(FaReact),
    tags: ["MySQL", "Python", "Hive", "Presto"],
    date: "2020 - 2021",
  },
  {
    title: "Full-Stack Engineer",
    location: "Seattle, WA",
    description:
      "I'm now a full-stack developer working using my experience to create web applications, data pipelines, plugins and lead technical discussions about implementations.",
    icon: React.createElement(FaReact),
    tags: ["PHP", "Python", "Typescript", "React", "Google Cloud Platform", "Docker", "Kubernetes"],
    date: "2021 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Text Tool",
    description:
      "A web application designed for our game and localization engineers team across multiple mobile gaming studios to efficiently localize in-game content.",
    tags: ["Laravel", "Node.js", "Typescript", "Tailwind", "MySQL", "Playwright", "Pest", "Docker", "GCP"],
    imageUrl: texttoolImg,
  },
  {
    title: "ATMS",
    description:
      "An internal ticket management application to automate the extraction of content from AWS and assign translation requests to vendors.",
    tags: ["Javascript", "HTML", "CSS", "Node.js", "AWS"],
    imageUrl: atmsImg,
  },
  {
    title: "Web Portal",
    description:
      "A web store application that enables mobile game users to purchase in-game items and read content blogs. Developed custom APIs for real-time product updates and a seamless checkout experience.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: webstoreImg,
  },
] as const;

export const skillsData = [
  "Python",
  "PHP",
  "Java",
  "JavaScript",
  "TypeScript",
  "MySQL",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Node.js",
  "Laravel",
  "Docker",
  "Kubernetes",
  "Git",
  "Playwright",
  "Pest",
  "Redis",
  "Tailwind",
  "Bootstrap",
  "Automation Testing",
  "API Integration",
  "Full Stack Development",
  "Google Cloud Platform",
  "Restful API",
  "Framer Motion",
] as const;