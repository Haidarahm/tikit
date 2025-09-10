import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function TikitButton({ text }) {
  return (
    <button className="group relative inline-flex items-center gap-2 font-hero-light text-sm bg-primary text-background px-4 py-2 rounded-full transition-[transform,background-color] duration-300 focus:outline-none hover:scale-[1.03] active:scale-[0.98]">
      <span className="whitespace-nowrap transition-transform duration-300 group-hover:translate-x-1 group-focus:translate-x-1">
        {text}
      </span>
      {/* Arrow container expands to the right on hover/focus */}
      <span
        className="overflow-hidden inline-flex items-center justify-center w-0 opacity-0 -translate-x-1 transition-all duration-300 group-hover:w-4 group-hover:opacity-100 group-hover:translate-x-0 group-focus:w-4 group-focus:opacity-100 group-focus:translate-x-0"
        aria-hidden
      >
        <FaArrowRight className="size-4 -rotate-45" />
      </span>
    </button>
  );
}

export default TikitButton;
