import React, { useEffect, useMemo, useRef } from "react";
import background from "../../assets/backgrounds/Team.png";
const Team = () => {
  const imageUrls = useMemo(() => {
    const modules = import.meta.glob(
      "../../assets/images/*.{png,jpg,jpeg,webp}",
      { eager: true, as: "url" }
    );
    return Object.values(modules);
  }, []);

  const containerRef = useRef(null);
  const rightRef = useRef(null);
  const trackRef = useRef(null);
  const sectionHeightRef = useRef(0);
  const horizontalDistanceRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const right = rightRef.current;
    const track = trackRef.current;
    if (!container || !right || !track) return;

    const compute = () => {
      const rightWidth = right.clientWidth;
      const trackWidth = track.scrollWidth;
      const paddingLeftPx = parseFloat(
        window.getComputedStyle(right).paddingLeft || "0"
      );
      const effectiveViewport = Math.max(1, rightWidth - paddingLeftPx);
      const horizontalDistance = Math.max(0, trackWidth - effectiveViewport);
      horizontalDistanceRef.current = horizontalDistance;
      const viewportH = window.innerHeight;
      sectionHeightRef.current = Math.ceil(viewportH + horizontalDistance + 16);
      container.style.minHeight = `${sectionHeightRef.current}px`;
      window.dispatchEvent(new Event("resize"));
    };

    let rafId = 0;
    let lastTranslate = 0;

    const loop = () => {
      const rect = container.getBoundingClientRect();
      const totalScroll = Math.max(
        1,
        sectionHeightRef.current - window.innerHeight
      );
      const raw = (0 - rect.top) / totalScroll;
      const progress = Math.min(1, Math.max(0, raw));
      let clamped;
      if (progress <= 0) {
        clamped = 0;
        lastTranslate = 0;
      } else if (progress >= 0.999) {
        clamped = -horizontalDistanceRef.current;
        lastTranslate = clamped;
      } else {
        const targetTranslate = -progress * horizontalDistanceRef.current;
        const eased = lastTranslate + (targetTranslate - lastTranslate) * 0.2;
        lastTranslate = eased;
        clamped = Math.max(-horizontalDistanceRef.current, Math.min(0, eased));
      }
      track.style.transform = `translate3d(${clamped}px, 0, 0)`;
      rafId = requestAnimationFrame(loop);
    };

    const preloadImages = () =>
      Promise.all(
        Array.from(track.querySelectorAll("img")).map(
          (img) =>
            new Promise((resolve) => {
              if (img.complete) return resolve();
              img.addEventListener("load", resolve, { once: true });
              img.addEventListener("error", resolve, { once: true });
            })
        )
      );

    preloadImages()
      .then(() => {
        compute();
      })
      .finally(() => {
        if (!rafId) rafId = requestAnimationFrame(loop);
      });

    window.addEventListener("resize", compute, { passive: true });
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", compute);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-scroll-section
      id="team-section"
      className="relative overflow-hidden mt-[50px] text-white font-hero-light"
    >
      <div
        className="h-[100vh] flex relative"
        data-scroll
        data-scroll-sticky
        data-scroll-target="#team-section"
      >
        <div
          className="left-section rounded-[10px] z-50 absolute left-0 top-0 w-[30%] h-full flex items-center px-[50px] text-[64px] pointer-events-none bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${background})` }}
        >
          <h1 className="leading-[1.1]">
            Our <br /> creative team
          </h1>
        </div>

        <div
          ref={rightRef}
          className="relative z-0 flex flex-1 overflow-hidden h-screen pl-[30%] "
        >
          <div
            ref={trackRef}
            className=" flex items-center inset-shadow-amber-100 shadow-amber-100 gap-8 will-change-transform py-0"
          >
            {imageUrls.map((src, index) => (
              <div
                key={String(index)}
                className="relative h-[650px]  w-[450px] rounded-[10px] shrink-0 overflow-hidden bg-[#111]"
              >
                <img
                  src={src}
                  alt={`team-${index + 1}`}
                  className="h-full w-full object-cover select-none"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
