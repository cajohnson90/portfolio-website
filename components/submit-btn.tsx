"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group flex gap-2 items-center h-[3rem] w-[8rem] bg-gray-800 text-white rounded-full justify-center outline-none transition focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-60"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin border-b-2 rounded-full border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
