import React, { useEffect, useLayoutEffect } from "react";
import Hero from "./Hero";
import Numbers from "./Numbers";
import element1 from "../../assets/elements/1.png";
import element2 from "../../assets/elements/2.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {
    // Animate Element 1 to bottom:0, left:0
    gsap.to(".element1", {
      y: "170vh",
      x: "100vw",
      rotate: 180,
      duration: 1.5,
      ease: "ease-in-out",
      scrollTrigger: {
        trigger: ".home-scroll-trigger", // Trigger on scrolling this container
        start: "top 0%", // Start when top of trigger hits 80% from top of viewport
        end: "bottom 0%", // Optional: define end
        scrub: 0.5, // Smooth animation while scrolling
      },
    });

    // Animate Element 2 to top:0, right:0
    gsap.to(".element2", {
      x:"-80vw",
      y:"40vh",
      rotate:125,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".home-scroll-trigger",
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
      },
    });

    // Cleanup ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative home-scroll-trigger overflow-hidden scroll-smooth">
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Element 1 - Starts top-left, moves to bottom-left */}
        <img
          src={element2} // Fixed: element1 should use element1.png
          alt="Decorative element 1"
          className="element1 absolute top-0 left-0 w-auto h-auto max-w-[300px] max-h-[300px]"
        />
        {/* Element 2 - Starts center-right, moves to top-right */}
        <img
          src={element1} // Fixed: element2 should use element2.png
          alt="Decorative element 2"
          className="element2 absolute bottom-1/2  right-0 w-auto h-auto max-w-[400px] max-h-[400px]"
        />
      </div>
      <Hero />
      <Numbers />
    </div>
  );
}

export default Home;
