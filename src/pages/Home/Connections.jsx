import React, { useEffect } from "react";
import ScrollFloat from "../../components/ScrollFloat";
import AOS from "aos";
import "aos/dist/aos.css";
import element1 from "../../assets/elements/5.png";
import element2 from "../../assets/elements/6.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Helper function to split text into words
const splitText = (text) => {
  return text.split(" ");
};

const Connections = () => {
  // Initialize AOS
  useEffect(() => {
    // Animate Element 1
    gsap.to(".element1", {
      top: "900px",
      left: "1000px",
      filter: "grayscale(100%)",
      rotation: 100,
      duration: 1.5,
      ease: "power1.inOut",
      scrollTrigger: {
        start: "top 0%",
        end: "bottom 0%",
        scrub: 1.5,
      },
    });

    // Animate Element 2
    gsap.to(".element2", {
      top: "90vh",
      right: "70%",
      filter: "grayscale(100%)",
      rotation: 100,
      duration: 1.5,
      ease: "power1.inOut",
      scrollTrigger: {
        start: "top 0%",
        end: "bottom 0%",
        scrub: 1.5,
      },
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
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
    <div className=" relative section h-[100vh] flex flex-col w-full justify-center font-hero-light section-container-scroll  overflow-hidden  mt-[60px]">
       <img
        src={element2}
        alt="Decorative element 1"
        className="element1 absolute top-4 left-8 z-10 w-auto h-auto max-w-[300px] max-h-[300px]"
      />
      {/* Element 2 */}
      <img
        src={element1}
        alt="Decorative element 2"
        className="element2 absolute top-[55vh] right-12 rotate-90 z-10 w-auto h-auto max-w-[300px] max-h-[300px]"
      />
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
