import React, { useEffect, useLayoutEffect } from "react";
import Hero from "./Hero";
import Numbers from "./Numbers";
import element1 from "../../assets/elements/5.png";
import element2 from "../../assets/elements/6.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Goals from "./Goals";
import Services from "./Services";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {
    // Animate Element 1 to bottom:0, left:0
    gsap.to(".element1", {
      top: "145%",
      left: "70%",
      rotation: 100,
      duration: 1.5,
      ease: "power1.inOut",

      scrollTrigger: {
        trigger: ".home-scroll-trigger", // Trigger on scrolling this container
        scroller: ".sections",
        start: "top 80%",
        end: "bottom 0%", // Optional: define end
        scrub: 1.5, // Smooth animation while scrolling
      },
    });

    // Animate Element 2 to top:0, right:0
    gsap.to(".element2", {
      bottom: "-40%",
      right: "70%",
      rotation: 100,
      duration: 1.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".home-scroll-trigger",
        scroller: ".sections",
        start: "top 80%",
        end: "bottom 0%",
        scrub: 1.5,
      },
    });

    // Animate CSS filter on scroll (e.g., blur and saturation)
    gsap.fromTo(
      [".element1", ".element2"],
      { filter: "grayscale(0px) " },
      {
        filter: "grayscale(100%) ",
        ease: "none",
        scrollTrigger: {
          trigger: ".home-scroll-trigger",
          scroller: ".sections",
          start: "top 00%",
          end: "bottom 0%",
          scrub: 1.5,
        },
      }
    );

    // Cleanup ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="sections  relative snap-y snap-mandatory h-screen overflow-y-auto  overflow-x-hidden home-scroll-trigger">
      {/* Element 1 - Starts top-left, moves to bottom-left */}
      <img
        src={element2} // Fixed: element1 should use element1.png
        alt="Decorative element 1"
        className="element1 absolute -top-6/7  z-10 -left-[42%] w-auto h-auto max-w-[300px] max-h-[300px] float-up-down"
      />
      {/* Element 2 - Starts center-right, moves to top-right */}
      <img
        src={element1} // Fixed: element2 should use element2.png
        alt="Decorative element 2"
        className="element2 absolute bottom-[30%] -rotate-45 z-10 -right-[42%] w-auto h-auto max-w-[400px] max-h-[400px] float-up-down-delayed"
      />
      <Hero />
      <Numbers />
      <Goals />
      <Services />
    </div>
  );
}

export default Home;
