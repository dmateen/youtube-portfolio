import React from "react";
import { TypewriterEffect } from "../ui/typewriter-effect";
import HeroCTA from "./heroCTA";

const words = [
  {
    text: "One\u00A0Script",
    className: "text-xl sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl", // Adjust font size based on screen size
  },
  {
    text: "\u00A0away ",
    className: "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
  },
  {
    text: "\u00A0from",
    className: "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
  },
  {
    text: "\u00A01\u00A0Million",
    className:
      "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-blue-500 dark:text-red-500",
  },
  {
    text: "\u00A0Views?",
    className: "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
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
