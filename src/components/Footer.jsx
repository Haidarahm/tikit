import React from "react";
import SVGComponent from "../assets/logo";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      data-scroll-section
      className="w-full h-[80vh] px-[80px] bg-[#0b0f14] flex flex-col border-t border-white/10 text-white font-hero-light"
    >
      <div className="top-section  w-full mx-auto border-b-[1px] border-[#ffffff56] py-8 flex items-center justify-between gap-6">
        <div className="logo w-[220px] h-[80px]">
          <SVGComponent />
        </div>
        <nav aria-label="social" className="flex items-center gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:bg-white/10 transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:bg-white/10 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:bg-white/10 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:bg-white/10 transition-colors"
            aria-label="X (Twitter)"
          >
            <FaXTwitter size={18} />
          </a>
        </nav>
      </div>
      <div className="bottom-section flex flex-1">
        <div className="left-section flex flex-col justify-around">
          <p className="text-[24px] text-gray-500 leading-[30px]">
            If you would like to work with us or just want to get
            <br /> in touch, we’d love to hear from you!
          </p>
          <h1 className=" text-[48px]">
            <span className="font-bold">Contact –</span> for Client or <br />
            Influencer throughout
          </h1>
          <div className="location flex font-light text-gray-500 gap-[40px] text-[20px]">
            {" "}
            <p>Dubai- UAE</p> <p>London - UK</p>
          </div>
          <div className="copyright text-[16px] text-gray-500">
            © Copyright 2025 | Alrights reserved by Tikit
          </div>
        </div>
        <div className="right-section"></div>
      </div>
    </footer>
  );
};

export default Footer;
