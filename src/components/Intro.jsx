import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Intro() {
  const navigate = useNavigate();
  const [scaled, setScaled] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setScaled(true); // Start scaling down
  };

  const handleTransitionEnd = () => {
    if (scaled) {
      navigate("/home");
    }
  };

  return (
    <div className="fixed w-full h-dvh  flex justify-center items-center">
      <video
        ref={videoRef}
        src="/intro-2.mp4"
        className={`h-[200px] transition-transform duration-500 ${
          scaled ? "scale-0" : "scale-100"
        }`}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        onTransitionEnd={handleTransitionEnd}
      ></video>
    </div>
  );
}

export default Intro;
