import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import GradientText from "../../components/GradientText";

const Hero = () => {
  const h1WrapRef = useRef(null);
  const h1Ref = useRef(null);
  const h2WrapRef = useRef(null);
  const h2Ref = useRef(null);

  useEffect(() => {
    if (
      !h1WrapRef.current ||
      !h1Ref.current ||
      !h2WrapRef.current ||
      !h2Ref.current
    )
      return;
    gsap.set([h1Ref.current, h2Ref.current], { yPercent: 150 });
    gsap.to([h1Ref.current, h2Ref.current], {
      yPercent: 0,
      duration: 0.9,
      ease: "power2.out",
      delay: 0.2,
      stagger: 0.3,
    });
  }, []);

  return (
    <section
      data-scroll-section
      className="snap-start snap-always h-screen w-full flex items-center justify-center"
    >
      <div className="text-center mt-[104px]">
        <div ref={h1WrapRef} className="overflow-hidden">
          <h1
            ref={h1Ref}
            className="text-[70px] leading-[110px] capitalize py-2"
          >
            Any questions? simply ask us.
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
            This is you, home!
          </GradientText>
        </div>
      </div>
    </section>
  );
};

export default Hero;
