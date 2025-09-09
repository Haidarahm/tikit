import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Logo from "../../assets/logo";

function LogoIntro() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const ctx = gsap.context(() => {
      const svg = document.querySelector(".intro-logo svg");
      const shapes = svg
        ? Array.from(
            svg.querySelectorAll(
              "path, rect, circle, ellipse, line, polyline, polygon"
            )
          )
        : [];

      // Prepare draw effect on all shapes
      shapes.forEach((el) => {
        let length = 0;
        try {
          if (typeof el.getTotalLength === "function") {
            length = el.getTotalLength();
          }
        } catch (e) {
          length = 0;
        }
        if (!Number.isFinite(length) || length <= 0) length = 300;
        el.style.stroke = "#ffffff";
        el.style.strokeWidth = "2";
        el.style.fillOpacity = "0";
        el.style.strokeDasharray = String(length);
        el.style.strokeDashoffset = String(length);
        el.style.strokeLinecap = "round";
        el.style.strokeLinejoin = "round";
      });

      gsap.set(".intro-logo", {
        opacity: 0,
        scale: 0.94,
        transformOrigin: "50% 50%",
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(".intro-logo", { opacity: 1, scale: 1, duration: 0.6 })
        // Draw SVG strokes for all shapes
        .to(
          shapes,
          {
            strokeDashoffset: 0,
            duration: 1.6,
            stagger: 0.02,
            ease: "power2.inOut",
          },
          0.05
        )
        // Fill in shapes after drawing
        .to(
          shapes,
          {
            fillOpacity: 1,
            duration: 0.6,
            stagger: 0.015,
          },
          "-=0.6"
        )
        // Fade strokes out for a clean final
        .to(shapes, { strokeOpacity: 0, duration: 0.4 }, "+=0.1");
    }, wrapperRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="w-full h-screen flex items-center justify-center bg-[#000d10]"
    >
      <div className="intro-logo" aria-label="Brand logo">
        <Logo width={260} height={80} />
      </div>
    </div>
  );
}

export default LogoIntro;
