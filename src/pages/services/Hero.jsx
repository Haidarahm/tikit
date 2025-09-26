import React from "react";

const Hero = () => {
  return (
    <div
      data-scroll-section
      className="h-screen font-hero-light text-white justify-center items-center  flex flex-col"
    >
      <div className="texts mt-12 text-center">
        <h1 className="text-[96px] leading-[100px] mb-8 capitalize">
          {" "}
          We make design that <br />{" "}
          <span className="font-bold">lead and inspire</span>
        </h1>
        <p className="text-[32px]">
          Whether we’re crafting a campaign or building a brand,
          <br /> our approach is rooted in insight, storytelling, and <br />{" "}
          execution that works.
        </p>
      </div>
    </div>
  );
};

export default Hero;
