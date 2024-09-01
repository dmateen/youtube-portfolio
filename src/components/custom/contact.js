import React from "react";
import { BackgroundBeams } from "../ui/background-beams";

const Contact = () => {
  return (
    <div
      className="h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased"
      id="contact"
    >
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Lets work together
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Share your email to discuss your scriptwriting needs
        </p>
        <input
          type="text"
          placeholder="your_email@abc.com"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Contact;
