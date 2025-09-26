import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });

    return () => {
      try {
        scroll.destroy();
        // eslint-disable-next-line no-unused-vars, no-empty
      } catch (_) {}
      const htmlEl = document.documentElement;
      htmlEl.classList.remove("has-scroll-smooth", "has-scroll-init");
      document.body.style.removeProperty("overflow");
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-scroll-container
      className="contact-section w-full text-white min-h-screen font-hero-light"
    >
      <section data-scroll-section className="h-screen w-full flex items-center justify-center">
        <h1 className="text-6xl font-bold text-center py-20">Contact Us</h1>
        <div data-scroll-section className="max-w-4xl mx-auto px-6">
          <p className="text-xl text-center">
            Get in touch with us for your next project
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
