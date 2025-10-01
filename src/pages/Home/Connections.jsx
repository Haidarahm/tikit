import React, { useEffect, useRef } from "react";
import ScrollFloat from "../../components/ScrollFloat";
import AOS from "aos";
import "aos/dist/aos.css";
import element1 from "../../assets/elements/5.png";
import element2 from "../../assets/elements/6.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientText from "../../components/GradientText";
gsap.registerPlugin(ScrollTrigger);

// Helper function to split text into words
const splitText = (text) => {
  return text.split(" ");
};

const Connections = () => {
  const sectionContainerRef = useRef(null);

  // GSAP animations scoped to section container
  useEffect(() => {
    const scrollerEl = sectionContainerRef.current;
    if (!scrollerEl) return;

    const element1Tween = gsap.to(".element1-c", {
      top: "900px",
      left: "1000px",
      rotation: 100,
      duration: 1.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: scrollerEl,
        start: "top 0%",
        end: "bottom 0%",
        scrub: 1.5,
      },
    });

    const element2Tween = gsap.to(".element2-c", {
      top: "90vh",
      right: "70%",
      rotation: 100,
      duration: 1.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: scrollerEl,
        start: "top 0%",
        end: "bottom 0%",
        scrub: 1.5,
      },
    });

    ScrollTrigger.refresh();

    return () => {
      element1Tween?.scrollTrigger?.kill();
      element2Tween?.scrollTrigger?.kill();
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
    <div
      ref={sectionContainerRef}
      className=" relative text-white  h-[100vh] flex flex-col w-full justify-center font-hero-light section-container-scroll    mt-[60px]"
    >
      <img
        src={element2}
        alt="Decorative element 1"
        className="element1-c absolute top-4 left-8 z-0  grayscale-75 w-auto h-auto max-w-[300px] max-h-[300px]"
      />
      {/* Element 2 */}
      <img
        src={element1}
        alt="Decorative element 2"
        className="element2-c absolute top-[55vh] right-12 grayscale-75 rotate-90 z-0 w-auto h-auto max-w-[300px] max-h-[300px]"
      />
      <div className="flex items-center flex-col justify-center relative z-10 w-[80vw]  mx-auto text-center">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          textClassName="text-[44px] pointer-events-none max-w-[600px] leading-[60px]"
          scrollStart="center bottom+=20%"
          scrollEnd="bottom bottom-=50%"
          stagger={0.06}
        >
          Are you an influencer?
        </ScrollFloat>
        <div
          data-aos="fade-left"
          data-aos-duration="900"
          data-aos-easing="ease-out-cubic"
          data-aos-once="false"
          data-aos-offset="120"
        >
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={5}
            showBorder={false}
            className="gradient-text pointer-events-none text-[64px] capitalize font-bold max-w-[600px]"
          >
            Join our list today!
          </GradientText>
        </div>

        <p
          className="description pointer-events-none text-[32px] font-light leading-[35px] mt-[20px]"
          data-aos="fade-right"
          data-aos-duration="900"
          data-aos-easing="ease-out-cubic"
          data-aos-once="false"
          data-aos-offset="120"
        >
          blend data with creativity to help brands reach and resonate with the
          right audience
        </p>
        <button className="uppercase mt-[40px] text-[16px] hover:text-white hover:bg-transparent border border-white transition cursor-pointer py-1 bg-white rounded-full px-4 text-black w-fit">
          contact us
        </button>
      </div>
    </div>
  );
};

export default Connections;
