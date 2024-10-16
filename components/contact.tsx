"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import useSectionInView from "@/lib/hooks";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

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
      <SectionHeading>Contact</SectionHeading>
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
          const { data, error } = await sendEmail(formData);
          console.log(data);
          console.log(error);
          if (!data || error) {
            console.log("EERRRRRRR");
            toast.error(error);
            return;
          } else {
            toast.success("Email sent Succesfully!");
          }
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
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
