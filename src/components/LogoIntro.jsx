import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo";

function LogoIntro() {
  const wrapperRef = useRef(null);
  const navigate = useNavigate();

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

        // Force initial invisible state
        el.style.stroke = "#ffffff";
        el.style.strokeWidth = "2";
        el.style.fill = "none"; // ⬅️ make sure it starts with no fill
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
        // Draw strokes
        .to(
          shapes,
          {
            strokeDashoffset: 0,
            duration: 1.8,
            stagger: 0.02,
            ease: "power2.inOut",
          },
          0.05
        )
        // Fill in after drawing
        .to(
          shapes,
          {
            fill: "#ffffff", // ⬅️ final fill color
            fillOpacity: 1,
            duration: 0.6,
            stagger: 0.015,
          },
          "-=0.6"
        )
        // Fade out strokes
        .to(shapes, { strokeOpacity: 0, duration: 0.4 }, "+=0.1")
        // Scale down + fade out logo
        .to(".intro-logo", {
          scale: 0,
          opacity: 0,
          duration: 0.8,
          ease: "power4.in",
        });

      tl.eventCallback("onComplete", () => {
        navigate("/home");
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, [navigate]);

  return (
    <div
      ref={wrapperRef}
      className="w-full h-screen flex items-center justify-center bg-transparent"
    >
      <div className="intro-logo" aria-label="Brand logo">
        <Logo width={260} height={80} />
      </div>
    </div>
  );
}

export default LogoIntro;
