import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Hero from "./Hero";
import "./about.css";
import AnimatedText from "./AnimatedText";
import Images from "./images";
import Strategy from "./Strategy";
import Team from "./Team";
const AboutUs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });

    return () => {
      try {
        scroll.destroy();
        // eslint-disable-next-line no-unused-vars, no-empty
      } catch (_) {}
      const htmlEl = document.documentElement;
      htmlEl.classList.remove("has-scroll-smooth", "has-scroll-init");
      document.body.style.removeProperty("overflow");
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-scroll-container
      className="about-us-section w-full min-h-screen font-hero-light"
    >
      <Hero />
      <AnimatedText />
      <Images/>
      <Team/>
      <Strategy/>
    </div>
  );
};

export default AboutUs;
