import React from "react";
import LiquidEther from "../../components/aurora/LiquidEther";

function Numbers() {
  const data = [
    {
      count: 300,
      text1: "Happy",
      text2: "Clients",
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
    },
    {
      count: 98,
      text1: "Award",
      text2: "Achievements",
      bottom: true,
    },
  ];
  return (
    <div className="section font-hero-light flex flex-col mx-auto h-full z-10 w-6/7    justify-center">
      {/* <div className=" pointer-events-none absolute inset-0 z-0">
        <LiquidEther
          colors={["#3d4699", "#5d6fa1", "#769cb6"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.65}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={1.2}
          takeoverDuration={0.25}
          autoResumeDelay={500}
          autoRampDuration={0.6}
          sideBias={0.8}
          emitCount={5}
          emitRadius={0.12}
        />
      </div> */}
      {/* <div className="relative mx-auto h-full z-10 w-6/7 flex items-center flex-col justify-center"></div> */}
      <div className="texts">
        <h1 className="text-[36px] font-bold">The best measure of success?</h1>
        <h3 className="text-[32px] font-light ">
          Clients who stay. Most of ours work with us well beyond one project
        </h3>
        <div className="numbers relative flex justify-center  mt-8 h-[45vh] items-stretch">
          {data.map(({ count, text1, text2, bottom }, idx) => (
            <div
              key={idx}
              className={`circle
                
                ${bottom ? "w-[179px] h-[179px] " : "w-[210px] h-[210px]"}
                 
                 rounded-full
                  bg-[#e9e7e518] 
                  text-center
                   flex
                  flex-col
                   items-center justify-center backdrop-blur-md  ${
                     bottom ? "self-end" : "self-start"
                   }`}
            >
              <span className="font-light text-center text-[50px]">
                +{count}
              </span>
              <h2 className="text-[18px] leading-tight">
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
