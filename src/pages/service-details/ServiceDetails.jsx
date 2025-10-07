import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Hero from "./Hero";
import { useParams } from "react-router-dom";
import "./details.css";
import Content from "./Content";
import ContactUs from "./ContactUs";
import Footer from "../../components/Footer";
const ServiceDetails = () => {
  const scrollRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="min-h-screen bg-black text-white"
    >
      <Hero id={id} />
      <Content id={id} />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default ServiceDetails;
