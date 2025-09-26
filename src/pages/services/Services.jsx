import React, { useEffect, useRef } from "react";
import Hero from "./Hero";
import "./services.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const splitTextToSpans = (element) => {
  if (!element || element.dataset.splitDone === "true") return;
  const originalText = element.textContent || "";
  element.innerHTML = "";
  originalText.split("").forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.display = "inline-block";
    span.style.opacity = "0";
    span.style.transform = "translateY(100%)";
    span.style.willChange = "transform, opacity";
    element.appendChild(span);
  });
  element.dataset.splitDone = "true";
};

const Services = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(".snap-section");
    if (sections.length < 2) return;

    // Smooth native scrolling only; page-by-page snapping removed

    sectionRefs.current.forEach((section) => {
      const title = section.querySelector("h2");
      const listItems = section.querySelectorAll("li");

      splitTextToSpans(title);
      const titleSpans = title.querySelectorAll("span");
      titleSpans.forEach((s) => s.classList.add("char"));

      // We'll animate list items as blocks (no per-letter split) for a distinct effect

      const animateIn = () => {
        gsap.to(titleSpans, {
          opacity: 1,
          y: 0,
          duration: 0.05,
          stagger: { each: 0.05, from: 0, ease: "none" },
          ease: "back.out(0.8)",
        });

        gsap.fromTo(
          listItems,
          {
            y: 30,
            autoAlpha: 0,
            rotateX: -45,
            skewY: 4,
            scale: 0.95,
            filter: "blur(6px)",
          },
          {
            y: 0,
            autoAlpha: 1,
            rotateX: 0,
            skewY: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.35,
            stagger: { each: 0.06, from: "start" },
            delay: 0.1,
            ease: "back.out(1.7)",
          }
        );
      };

      const animateOut = () => {
        // Stop in-flight tweens and animate out so the reset is visible
        gsap.killTweensOf(titleSpans);
        gsap.killTweensOf(listItems);
        gsap.to(titleSpans, {
          opacity: 0,
          y: "100%",
          duration: 0.2,
          ease: "power2.in",
        });
        gsap.to(listItems, {
          autoAlpha: 0,
          y: 30,
          rotateX: -30,
          skewY: 3,
          scale: 0.98,
          filter: "blur(4px)",
          duration: 0.2,
          ease: "power2.in",
        });
      };

      animateOut();

      ScrollTrigger.create({
        trigger: section,
        start: "top 75%",
        end: "bottom 25%",
        onEnter: animateIn,
        onLeave: animateOut,
        onEnterBack: animateIn,
        onLeaveBack: animateOut,
      });
    });

    return () => {
      // no-op
    };
  }, []);

  const colors = ["bg-red-500", "bg-green-500", "bg-blue-500", "bg-purple-500"];

  return (
    <div className="services-section w-full font-hero-light">
      <Hero />
      {colors.map((bg, index) => (
        <section
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
          className={`snap-section h-screen w-full ${bg} flex items-center justify-center`}
          aria-label={`Service slide ${index + 1}`}
        >
          <div className="max-w-3xl text-white text-center px-6">
            <h2 className="section-title text-7xl md:text-8xl font-extrabold mb-8 leading-[5.9rem]">
              Section {index + 1}
            </h2>
            <ul className="section-list space-y-3 text-2xl md:text-3xl">
              <li>Key point A for section {index + 1}</li>
              <li>Key point B for section {index + 1}</li>
              <li>Key point C for section {index + 1}</li>
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Services;
