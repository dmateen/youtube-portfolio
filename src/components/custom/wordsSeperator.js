"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Every great video starts with a script. Imagine captivating your audience, keeping them on the edge of their seats, waiting for the next word. That's the power of a well-crafted script. Whether it's a thrilling narrative, insightful commentary, or a persuasive pitch, the right words can transform your vision into reality. Here, I don't just write scripts—I create experiences. Let's bring your ideas to life, one word at a time. Welcome to the world where your content gets the script it deserves.`;

export function WordsSeperator() {
  return (
    <>
      <div className="xl:my-20">
        <div className="p-9 justify-center h-full ">
          <h2 className="dark:text-white text-black text-2xl font-bold italic">
            {`"What a great script like?"`}
          </h2>
        </div>
        <div className="flex items-center  p-9">
          <TextGenerateEffect words={words} />
        </div>
      </div>
    </>
  );
}
