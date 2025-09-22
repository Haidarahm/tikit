import React, { useEffect, useRef, useState, Suspense } from "react";
import gsap from "gsap";
const LiquidEther = React.lazy(() =>
  import("../../components/aurora/LiquidEther")
);
import AvatarGroupDemo from "../../components/ui/AvatarGroupDemo";

function Hero() {
  const sectionRef = useRef(null);
  const [showLiquid, setShowLiquid] = useState(false);

  useEffect(() => {
    // Use transform-based intro animation for better performance
    const element = sectionRef.current;
    if (!element) return;
    gsap.set(element, { scaleX: 0.001, transformOrigin: "center center" });
    gsap.to(element, {
      scaleX: 1,
      duration: 1.6,
      delay: 0.2,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    // Defer importing/rendering LiquidEther by 1 second
    const timerId = setTimeout(() => setShowLiquid(true), 1000);
    return () => clearTimeout(timerId);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="section h-screen rounded-[25px] overflow-hidden mx-auto gpu-transform"
      style={{ width: "95vw" }}
    >
      {/* Background layer */}
      <div className="pointer-events-none h-full mt-[16px] w-[95vw] mx-auto overflow-hidden bg-[#101b22] rounded-[25px] absolute inset-0 z-0">
        {showLiquid ? (
          <Suspense fallback={null}>
            <LiquidEther
              colors={["#142236", "#5d6fa1", "#769cb6"]}
              mouseForce={20}
              cursorSize={100}
              isViscous={false}
              viscous={30}
              iterationsViscous={32}
              iterationsPoisson={32}
              resolution={0.5}
              isBounce={false}
              autoDemo={true}
              autoSpeed={0.5}
              autoIntensity={2.2}
              takeoverDuration={0.25}
              autoResumeDelay={1000}
              autoRampDuration={0.6}
            />
          </Suspense>
        ) : null}
      </div>

      {/* Foreground content */}
      <div className="relative mx-auto h-[calc(100%-104px)] mt-[104px] z-10 w-6/7 flex items-center flex-col justify-center ">
        <div
          className="title flex flex-col gap-4 items-center "
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <h2
            className="font-hero-light font-light text-[27px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Marketing Agency
          </h2>
          <h1
            className="font-hero-light text-4xl font-bold text-[64px]"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            ROI REBELS
          </h1>
        </div>

        <div className="subtitle" data-aos="fade-up" data-aos-delay="400">
          <h3
            className="font-hero-light font-light text-[36px]"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            Fueling brands with influence
          </h3>
        </div>
        <div
          className="avatar mt-[50px]"
          data-aos="fade-up"
          data-aos-delay="550"
        >
          <AvatarGroupDemo />
          <div className="text text-center mt-[10px]">
            <span className="font-bold font-hero-light">+300 Happy</span>{" "}
            Clients
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
