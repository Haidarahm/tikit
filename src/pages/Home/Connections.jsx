import React, { useEffect } from "react";
import ScrollFloat from "../../components/ScrollFloat";
import AOS from "aos";
import "aos/dist/aos.css";

// Helper function to split text into words
const splitText = (text) => {
  return text.split(" ");
};

const Connections = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
      easing: "ease-out-cubic",
      mirror: true,
    });
  }, []);
  return (
    <div className="section h-[100vh] flex flex-col justify-center font-hero-light  overflow-hidden  mt-[60px]">
      <div className="flex flex-col justify-center w-[60vw]  mx-auto text-center">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          textClassName="text-[64px] font-bold max-w-[600px] leading-[60px]"
          scrollStart="center bottom+=20%"
          scrollEnd="bottom bottom-=50%"
          stagger={0.06}
        >
          Bold, Data-Led Marketing Crafted By Experts
        </ScrollFloat>

        <p className="description text-[32px] font-light leading-[35px] mt-[20px]">
          {splitText(
            "blend data with creativity to help brands reach and resonate with the right audience."
          ).map((word, index) => (
            <span
              key={index}
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={`${200 + index * 50}`}
              data-aos-easing="ease-out-cubic"
              className="inline-block mr-2"
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Connections;
