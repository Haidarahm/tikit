import React from "react";
import Hero from "./Hero";
import AnimatedLines from "./AnimatedLines";
import Action from "./Action";
import './contact.css'
const Contact = () => {


  return (
    <div
  
      className="contact-section snap-mandatory snap-y w-full text-white min-h-screen font-hero-light"
    >
      <Hero />
      <AnimatedLines/>
      <Action/>
    </div>
  );
};

export default Contact;
