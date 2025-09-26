// src/app/(whatever)/Home.tsx
import React, { useEffect } from "react";
import Hero from "./Hero";
import Numbers from "./Numbers";
import element1 from "../../assets/elements/5.png";
import element2 from "../../assets/elements/6.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Goals from "./Goals";
import Services from "./Services";
import AboutUs from "./AboutUs";
import StickyPinnedSection from "../../components/ui/StickyPinnedSection";
import WorkSection from "./WorkSection";
import Connections from "./Connections";
import Reviews from "./Reviews";
import ContactUs from "./ContactUs";
import Footer from "../../components/Footer";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {
    // Safety: ensure no leftover locomotive-scroll styles block scrolling
    const htmlEl = document.documentElement;
    htmlEl.classList.remove("has-scroll-smooth", "has-scroll-init");
    document.body.style.removeProperty("overflow");

    // Animate Element 1
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

    // Animate Element 2
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

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="sections overflow-hidden  relative w-full home-scroll-trigger">
      {/* Element 1 */}
      <img
        src={element2}
        alt="Decorative element 1"
        className="element1 fade-in-delay-1s pointer-events-none absolute top-4 left-8 z-10 w-auto h-auto max-w-[300px] max-h-[300px]"
      />
      {/* Element 2 */}
      <img
        src={element1}
        alt="Decorative element 2"
        className="element2 fade-in-delay-1s pointer-events-none absolute top-[55vh] right-12 rotate-90 z-10 w-auto h-auto max-w-[300px] max-h-[300px]"
      />
      <Hero />
      <Numbers />
      <Goals />
      <Services />
      <Connections /> {/* Sticky pinned work section */}
      <WorkSection />
      <AboutUs />
      <Reviews />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
