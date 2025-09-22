import React from "react";

function DarkBackground({ children }) {
  return (
    <div className="w-full bg-gradient-to-b from-[#020307] to-[#010414] min-h-screen relative overflow-hidden">
      {/* Content goes here */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}

export default DarkBackground;
