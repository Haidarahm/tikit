import React from "react";

const AnimatedText = () => {
  return (
    <div
      data-scroll-section
      className="animated-text-about-us relative w-full p-14 overflow-hidden mb-16"
    >
      <div
        className="title font-[PlusJakartaSans] relative whitespace-nowrap text-white text-[180px] font-bold"
        data-scroll
        data-scroll-speed="20"
        data-scroll-direction="horizontal"
      >
        Creativity <span className="line">-</span> High Reach{" "}
        <span className="line">-</span> SEO Agency
      </div>
      <div
        className="title font-[PlusJakartaSans] relative whitespace-nowrap text-white text-[180px] font-bold"
        data-scroll
        data-scroll-speed="-20"
        data-scroll-direction="horizontal"
      >
        Creativity <span className="line">-</span> High Reach{" "}
        <span className="line">-</span> SEO Agency
      </div>
    </div>
  );
};

export default AnimatedText;
