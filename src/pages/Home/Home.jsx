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
          autoResumeDelay={0}
          autoRampDuration={0.6}
          sideBias={0.8}
          emitCount={5}
          emitRadius={0.12}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        Haidar Ibrahim
      </div>
    </div>
  );
}

export default Home;
