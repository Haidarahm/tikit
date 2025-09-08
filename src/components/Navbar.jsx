import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import SVGComponent from "../assets/logo";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";

function Navbar() {
  const navRef = useRef();
  const logoRef = useRef();
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const hidden = useRef(false);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });

    // timeline: logo appears first, then nav items stagger
    const links = () =>
      navRef.current ? navRef.current.querySelectorAll(".nav-item") : [];

    const tl = gsap.timeline();
    tl.fromTo(
      logoRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      }
    ).fromTo(
      links(),
      { y: 12, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.45,
        stagger: 0.08,
        ease: "power2.out",
      },
      "-=0.35"
    );

    // scroll handler: hide on scroll down, show on scroll up
    const handleScroll = () => {
      const currentY = window.scrollY || window.pageYOffset;

      // small threshold to avoid jitter
      if (Math.abs(currentY - lastScrollY.current) < 6) {
        ticking.current = false;
        return;
      }

      if (currentY > lastScrollY.current && currentY > 80) {
        // scrolling down -> hide
        if (!hidden.current && navRef.current) {
          gsap.to(navRef.current, {
            y: -120,
            duration: 0.28,
            ease: "power2.out",
          });
          hidden.current = true;
        }
      } else {
        // scrolling up -> show
        if (hidden.current && navRef.current) {
          gsap.to(navRef.current, {
            y: 0,
            duration: 0.28,
            ease: "power2.out",
          });
          hidden.current = false;
        }
      }

      lastScrollY.current = currentY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(handleScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      tl.kill();
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed  left-1/2 -translate-x-1/2 w-2/3 max-w-4xl mt-4 rounded-full h-16 flex items-center px-6 py-2 z-50
        bg-white/5 backdrop-blur-md shadow-sm text-white"
      data-aos="fade-down"
      style={{ transform: "translateY(0)" }}
    >
      {/* left spacer for logo (keeps layout balanced) */}
      <div
        className="w-12 h-12 mr-4 flex items-center justify-center"
        aria-hidden
      >
        <div ref={logoRef} className="w-12 h-12 transform-gpu">
          <SVGComponent className="w-full h-full" />
        </div>
      </div>

      {/* center links */}
      <div className="flex-1 flex justify-center">
        <div className="flex gap-6">
          <Link
            to="/work"
            className="nav-item opacity-0 text-white hover:text-white/80"
          >
            work
          </Link>
          <Link
            to="/home"
            className="nav-item opacity-0 text-white hover:text-white/80"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="nav-item opacity-0 text-white hover:text-white/80"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="nav-item opacity-0 text-white hover:text-white/80"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* right spacer to keep center alignment */}
      <div className="w-12 h-12 ml-4" aria-hidden />
    </nav>
  );
}

export default Navbar;
