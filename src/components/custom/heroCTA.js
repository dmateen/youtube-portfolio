"use client";
import React from "react";
import { FaUnlock } from "react-icons/fa";

const HeroCTA = ({href}) => {
  return (
    <button
      className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4"
      onClick={() => {
        const section = document.getElementById(href);
        section.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <div className="flex items-center justify-center space-x-1">
        <FaUnlock className="text-white" size={18} />
        <span>Unlock My Script</span>
      </div>
      <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-red-500 to-transparent" />
    </button>
  );
};

export default HeroCTA;
