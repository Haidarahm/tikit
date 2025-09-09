import React from "react";
import LiquidEther from "../../components/aurora/LiquidEther";

function Hero() {
  return (
    <div className="section">
      {/* Background layer */}
      <div className="pointer-events-none absolute inset-0 z-0">
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
      </div>

      {/* Foreground content */}
      <div className="relative mx-auto z-10 h-[calc(100vh-64px)] mt-[164px] w-6/7 flex flex-col ">
        <div
          className="title flex flex-col gap-4"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <h2
            className="font-hero-light font-light text-[36px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Marketing Agency
          </h2>
          <h1
            className="font-hero-light text-4xl font-bold text-[96px]"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            ROI REBELS
          </h1>
        </div>

        <div className="subtitle" data-aos="fade-up" data-aos-delay="400">
          <h3
            className="font-hero-light font-light text-[95px]"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            Fueling brands
          </h3>
          <div className="flex gap-[170px] items-center">
            <button
              className="bg-[#d9d9d946] font-hero-light font-light  rounded-full h-[50px] px-8  text-white"
              data-aos="zoom-in"
              data-aos-delay="650"
            >
              Learn More
            </button>
            <h3
              className="font-hero-light font-light text-[95px]"
              data-aos="fade-up"
              data-aos-delay="550"
            >
              with influence
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
