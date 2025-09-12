import React, { useEffect } from "react";
import LiquidEther from "../../components/aurora/LiquidEther";
import CountUp from "../../components/CountUp";
import Aos from "aos";
import "aos/dist/aos.css";

function Numbers() {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });

    const scroller = document.querySelector(".sections");
    if (scroller) {
      scroller.addEventListener("scroll", () => {
        Aos.refresh(); // force update positions
      });
    }

    return () => {
      if (scroller) scroller.removeEventListener("scroll", Aos.refresh);
    };
  }, []); 

  const data = [
    {
      count: 300,
      text1: "Happy",
      text2: "Clients",
      plus: true,
    },
    {
      count: 8,
      text1: "Years",
      text2: "Of Experiences",
      bottom: true,
    },
    {
      count: 500,
      text1: "Completed",
      text2: "Projects",
      plus: true,
    },
    {
      count: 98,
      text1: "Award",
      text2: "Achievements",
      bottom: true,
    },
  ];

  return (
    <div className="section font-hero-light flex flex-col mx-auto h-full z-10 w-6/7 justify-center">
      <div className="texts text-center">
        <h1
          className="text-[32px] font-bold"
          data-aos="fade-up"
          data-aos-delay="0"
          style={{
            background:
              "linear-gradient(135deg, #07D9F5 0% ,  #07D9F5 25% , #B387FF 50%, #B387FF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          The best measure of success?
        </h1>
        <h3 className="text-[25px] font-light" data-aos="fade-up"
          data-aos-delay="100">
          Clients who stay. Most of ours work with us well beyond one project
        </h3>

        <div className="numbers relative flex justify-center mt-8 h-[45vh] items-stretch">
          {data.map(({ count, text1, text2, bottom, plus }, idx) => (
            <div
              key={idx}
              className={`circle w-[200px] h-[200px] rounded-full bg-[#e9e7e518] text-center flex flex-col items-center justify-center backdrop-blur-md ${
                bottom ? "self-end" : "self-start"
              }`}
              data-aos="fade-up"
              data-aos-delay={idx * 200} // stagger delay for each element
            >
              <span className="font-light text-center h-[65px] flex items-center text-[46px]">
                <CountUp
                  from={0}
                  to={count}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                {plus ? "+" : ""}
              </span>
              <h2 className="text-[16px] leading-tight">
                {text1} <br /> {text2}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Numbers;
