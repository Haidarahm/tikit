import React, { useEffect, useRef, useState, Suspense } from "react";
import gsap from "gsap";
const LiquidEther = React.lazy(() =>
  import("../../components/aurora/LiquidEther")
);
import AvatarGroupDemo from "../../components/ui/AvatarGroupDemo";

function Hero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const h2Ref = useRef(null);
  const h1Ref = useRef(null);
  const avatarRef = useRef(null);

  const [showLiquid, setShowLiquid] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;
  
    // Clear inline styles before animating again
    gsap.set(
      [titleRef.current, h2Ref.current, h1Ref.current, subtitleRef.current, avatarRef.current],
      { clearProps: "all" }
    );
  
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
  
    // Step 1: Section resize (keep smooth)
    tl.set(element, { scaleX: 0.001, transformOrigin: "center center" })
      .to(element, {
        scaleX: 1,
        duration: 2,
        ease: "power3.out",
      })
  
      // Step 2: Title container
      .fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4 },
        "+=0.1"
      )
  
      // Step 3: h2 then h1
      .fromTo(
        h2Ref.current,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3 },
        "+=0.05"
      )
      .fromTo(
        h1Ref.current,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35 },
        "+=0.05"
      )
  
      // Step 4: Subtitle
      .fromTo(
        subtitleRef.current,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35 },
        "+=0.1"
      )
  
      // Step 5: Avatar group
      .fromTo(
        avatarRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4 },
        "+=0.1"
      );
  
    return () => tl.kill();
  }, []);
  

  useEffect(() => {
    // Defer LiquidEther load
    const timerId = setTimeout(() => setShowLiquid(true), 2000);
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
        <div className="title flex flex-col gap-4 items-center" ref={titleRef}>
          <h2
            ref={h2Ref}
            className="font-hero-light font-light text-[27px]"
          >
            Marketing Agency
          </h2>
          <h1
            ref={h1Ref}
            className="font-hero-light text-4xl font-bold text-[64px]"
          >
            ROI REBELS
          </h1>
        </div>

        <div className="subtitle" ref={subtitleRef}>
          <h3 className="font-hero-light font-light text-[36px]">
            Fueling brands with influence
          </h3>
        </div>

        <div className="avatar mt-[50px]" ref={avatarRef}>
          <AvatarGroupDemo />
          <div className="text text-center mt-[10px]">
            <span className="font-bold font-hero-light">+300 Happy</span> Clients
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
