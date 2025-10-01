import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import GradientText from "../../components/GradientText";

const Hero = () => {
  const h1WrapRef = useRef(null);
  const h1Ref = useRef(null);
  const h2WrapRef = useRef(null);
  const h2Ref = useRef(null);

  useEffect(() => {
    if (h1WrapRef.current && h1Ref.current) {
      gsap.set(h1Ref.current, { yPercent: 150 });
      gsap.to(h1Ref.current, {
        yPercent: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.3,
      });
    }
    if (h2WrapRef.current && h2Ref.current) {
      gsap.set(h2Ref.current, { yPercent: 150 });
      gsap.to(h2Ref.current, {
        yPercent: 0,
        duration: 0.9,
        ease: "power2.out",
        delay: 0.5,
      });
    }
  }, []);

  return (
    <div className="snap-section h-screen font-hero-light text-white justify-center items-center  flex flex-col">
      <div className="texts mt-12 text-center">
        <div ref={h1WrapRef} className="overflow-hidden">
          <h1
            ref={h1Ref}
            className="text-[96px] leading-[100px] mb-8 capitalize"
          >
            We make design that <br />
          </h1>
        </div>
        <div ref={h2WrapRef} className="overflow-hidden">
          <GradientText
            ref={h2Ref}
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={5}
            showBorder={false}
            className="text-[96px] leading-[100px] mb-8 capitalize font-bold"
          >
          lead and inspire
          </GradientText>
        </div>
      </div>
    </div>
  );
};

export default Hero;
