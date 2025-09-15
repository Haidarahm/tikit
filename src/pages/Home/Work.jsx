import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import work1 from "../../assets/work/hidden.jpg";
import work2 from "../../assets/work/krave.jpg";
import work3 from "../../assets/work/porsche.jpg";
import work4 from "../../assets/work/range-rover.jpg";
import work5 from "../../assets/work/the-reve.jpg";

const images = [work1, work2, work3, work4, work5];

gsap.registerPlugin(ScrollTrigger);

function WorkSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".work-item");

      items.forEach((item, i) => {
        const img = item.querySelector("img");

        // Initial state with randomized direction
        gsap.set(img, {
          scale: 0.8,
          opacity: 0,
          x: i % 2 === 0 ? -120 : 120,
          y: i % 3 === 0 ? 120 : -120,
          rotateX: i % 2 === 0 ? 15 : -15,
          rotateY: i % 2 === 0 ? -10 : 10,
          transformPerspective: 1000,
        });

        // Animate with scroll
        gsap.to(img, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 0%",
            scrub: 1.2, // smooth scrubbing
            toggleActions: "play reverse play reverse",
          },
          x: 0,
          y: 0,
          scale: 1,
          rotateX: 0,
          rotateY: 0,
          opacity: 1,
          duration: 1.8,
          ease: "power3.out",
        });
      });

      // Section-wide parallax scaling
      gsap.to(".work-item img", {
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-neutral-950 py-20 px-6 md:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">
          Our Work
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="work-item md:col-span-2 overflow-hidden rounded-2xl">
            <img src={images[0]} alt="work 1" className="w-full h-full object-cover block" />
          </div>
          <div className="work-item md:col-span-2 overflow-hidden rounded-2xl">
            <img src={images[1]} alt="work 2" className="w-full h-full object-cover block" />
          </div>

          <div className="work-item lg:col-span-4 overflow-hidden rounded-2xl">
            <img src={images[2]} alt="work 3" className="w-full h-full object-cover block" />
          </div>

          <div className="work-item md:col-span-2 overflow-hidden rounded-2xl">
            <img src={images[3]} alt="work 4" className="w-full h-full object-cover block" />
          </div>
          <div className="work-item md:col-span-2 overflow-hidden rounded-2xl">
            <img src={images[4]} alt="work 5" className="w-full h-full object-cover block" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
