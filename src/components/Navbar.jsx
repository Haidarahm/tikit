import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import SVGComponent from "../assets/logo";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";

function Navbar() {
  const logoRef = useRef();

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });

    // Animate the appearance of the logo
    gsap.fromTo(
      logoRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.7, delay: 0.5, ease: "power2.inOut" }
    );
  }, []);

  return (
    <nav className="flex items-center p-4 bg-gray-200" data-aos="fade-down">
      <div ref={logoRef} className="w-16 h-16 mr-6 flex items-center opacity-0">
        <SVGComponent className="w-full h-full" />
      </div>
      <Link to="/" className="mr-4 hover:text-blue-500">
        Intro
      </Link>
      <Link to="/home" className="hover:text-blue-500">
        Home
      </Link>
    </nav>
  );
}

export default Navbar;
