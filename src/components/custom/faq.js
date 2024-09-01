import React from "react";
import { AccordionWrapper } from "./accordionWrapper";

const FAQ = () => {
  return (
    <div className="w-full h-full py-20 dark:bg-neutral-950 " id="faq">
      <h2 className="max-w-7xl pl-4 mx-auto text-4xl md:text-5xl ld:text-xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-8 sm:text-5xl md:ml-4">
        Frequently Asked Questions..
      </h2>
      <AccordionWrapper />
    </div>
  );
};

export default FAQ;
