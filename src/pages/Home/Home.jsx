import React from "react";
import SVGComponent from "../../assets/logo";
import AuroraBackground from "../../components/AuroraBackground";
import LiquidEther from "../../components/aurora/LiquidEther";

function Home() {
  return (
    <div className="relative w-full h-screen text-white overflow-hidden">
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
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={1000}
          autoRampDuration={0.6}
          sideBias={0.8}
          emitCount={5}
          emitRadius={0.12}
        />
      </div>

      {/* Foreground content */}
      <div className="relative mx-auto z-10 h-[calc(100vh-64px)] mt-[164px] w-6/7 flex flex-col ">
        <div className="title flex flex-col gap-4">
          <h2 className="font-hero-light font-light text-[36px]">
            Marketing Agency
          </h2>
          <h1 className="font-hero-light text-4xl font-bold text-[96px]">
            ROI REBELS
          </h1>
        </div>

        <div className="subtitle">
          <h3 className="font-hero-light font-light text-[95px]">
            Fueling brands
          </h3>
          <div className="flex gap-[170px] items-center">
            <button className="bg-[#d9d9d946] font-hero-light font-light  rounded-full h-[50px] px-8  text-white">Learn More</button>
            <h3 className="font-hero-light font-light text-[95px]">with influence</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
