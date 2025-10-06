import React, { useEffect, useState } from "react";
import image from "../../assets/who-we-are/1.webp";
const Hero = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      data-scroll-section
      className="min-h-screen flex justify-center items-center text-white relative font-hero-light"
    >
      <div
        data-scroll
        className="overlay absolute z-10 bg-black/30 w-full h-full"
      ></div>
      <img
        src={image}
        alt=""
        className={`z-0 absolute w-full h-full object-cover transition-all duration-1000 ease-out ${
          show ? "opacity-100 scale-100" : "opacity-0 scale-105"
        }`}
      />
      <div
        data-scroll
        data-scroll-speed="5"
        data-scroll-delay="0.2"
        className="texts flex flex-col relative z-20"
      >
        <h1
          className={`title text-[92px] font-bold transition-all duration-1000 ease-out ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Haidar Ahmad
        </h1>
        <h3
          className={`title text-[40px] font-light text-center transition-all duration-1000 ease-out delay-200 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Haidar Ahmad
        </h3>
      </div>
    </div>
  );
};

export default Hero;
