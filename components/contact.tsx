"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="contact"
    >
      <SectionHeading childern="Contact" />
      <h3 className="text-3xl font-medium mb-8">Work In Progress</h3>
    </motion.section>
  );
}
