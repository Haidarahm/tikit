import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Hero from "./Hero";
import Article from "./Article";
import "./about.css";
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
      className="about-us-section w-full font-hero-light"
    >
      <Hero />
      <Article />
    </div>
  );
};

export default AboutUs;
