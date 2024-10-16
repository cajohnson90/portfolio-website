import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Python",
  "PHP",
  "MySQL",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Laravel",
  "Git",
  "Tailwind",
  "Redis",
  "Automation Testing",
  "Google Cloud Platform",
  "API Integration",
  "Playwright",
  "Pest",
  "Restful API",
  "Framer Motion",
] as const;