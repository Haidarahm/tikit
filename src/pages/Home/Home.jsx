import React from "react";
import SVGComponent from "../../assets/logo";
import AuroraBackground from "../../components/AuroraBackground";

function Home() {
  return (
    <div className="relative w-full h-screen text-white">
      <AuroraBackground className="w-full h-screen" />
      <div className="relative z-10 flex items-center justify-center h-full">
        Haidar Ibrahim
      </div>
    </div>
  );
}

export default Home;
