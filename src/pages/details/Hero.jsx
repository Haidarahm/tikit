import React from "react";
import image from "../../assets/who-we-are/1.webp";
const Hero = () => {
  return (
    <div
      data-scroll-container
      className="min-h-screen flex justify-center items-center  text-white relative font-hero-light"
    >
      <div className="overlay absolute z-10 bg-black/30 w-full h-full"></div>
      <img
        src={image}
        alt=""
        className="z-0 absolute w-full h-full object-cover"
      />
      <div className="texts flex flex-col relative z-20">
        <h1 className="title text-[92px] font-bold">Haidar Ahmad</h1>
        <h3 className="title text-[40px] font-light text-center">
          Haidar Ahmad
        </h3>
      </div>
    </div>
  );
};

export default Hero;
