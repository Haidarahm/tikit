import React, { useEffect, useLayoutEffect } from "react";
import Hero from "./Hero";
import Numbers from "./Numbers";
import element1 from "../../assets/elements/5.png";
import element2 from "../../assets/elements/6.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Goals from "./Goals";
import Services from "./Services";
// import { Connections } from "./Connections";
// import Reviews from "./Reviews"; // removed if file deleted
import AboutUs from "./AboutUs";
import WorkSection from "./WorkSection";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {
    // Animate Element 1 to bottom:0, left:0
    gsap.to(".element1", {
      top: "900px",
      left: "1000px",
      filter: "grayscale(100%)",
      rotation: 100,
      duration: 1.5,
      ease: "power1.inOut",
      scrollTrigger: {
        start: "top 0%",
        end: "bottom 0%",
        scrub: 1.5,
      },
    });

    // Animate Element 2 to top:0, right:0
    gsap.to(".element2", {
      top: "90vh",
      right: "70%",
      filter: "grayscale(100%)",
      rotation: 100,
      duration: 1.5,
      ease: "power1.inOut",
      scrollTrigger: {
        start: "top 0%",
        end: "bottom 0%",
        scrub: 1.5,
      },
    });

    // Cleanup ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="sections relative h-full w-full overflow-hidden home-scroll-trigger">
      {/* Element 1 - Starts top-left, moves to bottom-left */}
      <img
        src={element2} // Fixed: element1 should use element1.png
        alt="Decorative element 1"
        className="element1 absolute top-4  z-10 left-8 w-auto h-auto max-w-[300px] max-h-[300px] float-up-down"
      />
      {/* Element 2 - Starts center-right, moves to top-right */}
      <img
        src={element1} // Fixed: element2 should use element2.png
        alt="Decorative element 2"
        className="element2 absolute top-[55vh] rotate-90 z-10 right-12 w-auto h-auto max-w-[300px] max-h-[300px] float-up-down-delayed"
      />
      <Hero />
      <Numbers />
      <Goals />
      <Services />
      {/* Reviews removed if not used */}
      <AboutUs />
      {/* Ensure sticky section is not clipped by parent overflow */}
      <div className="relative w-full overflow-visible">
        <WorkSection />
      </div>
    </div>
  );
}

export default Home;
