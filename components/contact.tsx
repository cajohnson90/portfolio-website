"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import useSectionInView from "@/lib/hooks";
import { FaPaperPlane } from "react-icons/fa";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      className="mb-20 w-[min(100%, 38rem)] text-center sm:mb-28 scroll-mt-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="contact"
      ref={ref}
    >
      <SectionHeading children="Contact" />
      <p className="text-gray-500 -mt-5">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:xxcameronjohnson@outlook.com">
          xxcameronjohnson@outlook.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          type="email"
          name="senderEmail"
          className="h-14 rounded-lg borderBlack px-4"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <button
          type="submit"
          className="group flex gap-2 items-center h-[3rem] w-[8rem] bg-gray-800 text-white rounded-full justify-center outline-none transition focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
}
