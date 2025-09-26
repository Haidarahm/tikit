import React, { useEffect } from "react";
import Hero from "./Hero";
import "./services.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Services = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(".snap-section");
    if (sections.length < 2) return;

    const st = ScrollTrigger.create({
      trigger: ".services-section",
      start: "top top",
      end: "bottom bottom",
      snap: {
        snapTo: (progress) => {
          // snap progress to the closest section
          const snapIndex = Math.round(progress * (sections.length - 1));
          return snapIndex / (sections.length - 1);
        },
        duration: 0.4, // shorter, feels like CSS
        delay: 0, // no waiting, snaps right after scroll ends
        ease: "none", // linear easing like CSS
        inertia: false, // disable momentum (matches scroll-snap)
      },
    });

    return () => {
      st.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const colors = ["bg-red-500", "bg-green-500", "bg-blue-500", "bg-purple-500"];

  return (
    <div className="services-section w-full font-hero-light">
      <Hero />
      {colors.map((bg, index) => (
        <section
          key={index}
          className={`snap-section h-screen w-full ${bg}`}
          aria-label={`Service slide ${index + 1}`}
        >
          <div className="h-full w-full flex items-center justify-center">
            <div className="max-w-xl text-white text-center px-6">
              <h2 className="text-5xl font-bold mb-6">Section {index + 1}</h2>
              <ul className="space-y-2 text-lg">
                <li>Key point A for section {index + 1}</li>
                <li>Key point B for section {index + 1}</li>
                <li>Key point C for section {index + 1}</li>
              </ul>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Services;
