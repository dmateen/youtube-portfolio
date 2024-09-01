import React from "react";
import { TypewriterEffect } from "../ui/typewriter-effect";
import HeroCTA from "./heroCTA";

const words = [
  {
    text: "One\u00A0Script",
  },
  {
    text: "\u00A0away ",
  },
  {
    text: "\u00A0from",
  },
  {
    text: "\u00A01\u00A0Million",
    className: "text-blue-500 dark:text-red-500",
  },
  {
    text: "\u00A0Views?",
  },
];
const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        Crafted scripts that turn viewers into subscribers
      </p>
      <TypewriterEffect words={words} cursorClassName="bg-red-500" />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <HeroCTA href={"contact"} />
      </div>
    </div>
  );
};

export default Hero;
