import React from "react";

function DarkBackground({ children }) {
  return (
    <div className="w-full min-h-screen bg-[#020307] relative overflow-hidden">
      {/* Background gradient effects - Equal Dark Blue Distribution */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#0f1b2e] rounded-full blur-[200px] opacity-40"></div>
      <div className="absolute top-[20%] left-[30%] w-[700px] h-[700px] bg-[#142236] rounded-full blur-[250px] opacity-30"></div>
      <div className="absolute top-[50%] left-0 w-[700px] h-[700px] bg-[#142236] rounded-full blur-[250px] opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#1a2842] rounded-full blur-[200px] opacity-40"></div>
      <div className="absolute top-[60%] right-[20%] w-[500px] h-[500px] bg-[#0d1a2b] rounded-full blur-[180px] opacity-25"></div>
      <div className="absolute bottom-[30%] left-[10%] w-[400px] h-[400px] bg-[#162439] rounded-full blur-[150px] opacity-35"></div>
      <div className="absolute top-[40%] left-[90%] w-[450px] h-[450px] bg-[#0e1c30] rounded-full blur-[160px] opacity-20"></div>
      <div className="absolute bottom-[60%] right-[40%] w-[350px] h-[350px] bg-[#112c50] rounded-full blur-[140px] opacity-30"></div>

      {/* Content goes here */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}

export default DarkBackground;
