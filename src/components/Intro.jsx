import React from "react";
import { useNavigate } from "react-router-dom";

function Intro() {
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate("/home"); // Go to Home after video ends
  };
  return (
    <div className="fixed  w-full h-dvh bg-white flex justify-center items-center">
      <video
        src="/intro.mp4"
        className="h-[200px]"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd} // Trigger navigation
      ></video>
    </div>
  );
}

export default Intro;
