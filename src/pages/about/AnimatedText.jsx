import React from "react";
import Tick from "../../assets/Tick";

const AnimatedText = () => {
  return (
    <div
      data-scroll-section
      className="animated-text-about-us relative w-full p-14 overflow-hidden mb-16"
    >
      <div
        className="title font-[PlusJakartaSans] relative whitespace-nowrap text-white text-[150px] font-bold"
        data-scroll
        data-scroll-speed="20"
        data-scroll-direction="horizontal"
      >
        Creativity<Tick className="text-[#] w-[200px] inline-block h-[100px]"/> High Reach
        <Tick className="text-[#] w-[200px] inline-block h-[100px]"/> SEO Agency
      </div>
      <div
        className="title font-[PlusJakartaSans]  relative whitespace-nowrap text-white text-[150px] font-bold"
        data-scroll
        data-scroll-speed="-20"
        data-scroll-direction="horizontal"
      >
         SEO Agency<Tick className="text-[#] w-[200px] inline-block h-[100px]"/> High Reach{" "}
        <span className="line"></span> SEO Agency
      </div>
    </div>
  );
};

export default AnimatedText;
