import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SVGComponent from "./logo";

const AnimatedLines = () => {
  const lineFromLeft = useRef(null);
  const lineFromRight = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (
      !lineFromLeft.current ||
      !lineFromRight.current ||
      !containerRef.current
    )
      return;

    // Set initial position
    gsap.set(lineFromLeft.current, { left: "-90%" });
    gsap.set(lineFromRight.current, { right: "-70%" });

    // Create scroll trigger animation
    gsap.to(lineFromLeft.current, {
      left: "70%", // Move from left -50% to right 50%
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.1, // Faster scrubbing (0.1 = very fast, 1 = smooth, 2 = slower)
      },
    });
    gsap.to(lineFromRight.current, {
      right: "80%", // Move from left -50% to right 50%
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.1, // Faster scrubbing (0.1 = very fast, 1 = smooth, 2 = slower)
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="h-screen w-full flex flex-col">
      <div className="details flex gap-[50px] max-w-7xl mx-auto">
        <h1 className="title uppercase font-bold text-[24px] w-1/7">
          We've been waiting for you!
        </h1>
        <p className="description flex-1 text-[24px]">
          Add the best talent on the market, an agile skilled management &
          seamless
          <br /> involvement
        </p>
      </div>
      <div
        ref={containerRef}
        className="main-content bg-blue-50 flex-1 flex relative justify-center flex-col overflow-hidden"
      >
        <div className="logo w-[500px]">
          <SVGComponent />
        </div>
        <div className="line-container absolute w-[140%] rotate-[20deg] h-[100px]">
          <div
            ref={lineFromLeft}
            className="line w-full pr-[100px]  h-[100px] absolute justify-end text-[100px] text-end flex items-center  text-black font-bold bg-white"
          >
            contact us now
          </div>
        </div>
        <div className="line-container absolute w-[140%] -rotate-[20deg] h-[100px]">
          <div
            ref={lineFromRight}
            className="line w-full pl-[200px]  h-[100px] absolute justify-start text-[100px] text-end flex items-center  text-black font-bold bg-white"
          >
            contact us now
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedLines;
