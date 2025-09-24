import React, { useEffect, useMemo, useRef } from "react";

const Team = () => {
  const imageUrls = useMemo(() => {
    const modules = import.meta.glob(
      "../../assets/images/*.{png,jpg,jpeg,webp}",
      {
        eager: true,
        as: "url",
      }
    );
    return Object.values(modules);
  }, []);

  const containerRef = useRef(null);
  const rightRef = useRef(null);
  const trackRef = useRef(null);
  const sectionHeightRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const right = rightRef.current;
    const track = trackRef.current;
    if (!container || !right || !track) return;

    const compute = () => {
      const rightWidth = right.clientWidth;
      const trackWidth = track.scrollWidth;
      const horizontalDistance = Math.max(0, trackWidth - rightWidth);
      const viewportH = window.innerHeight;
      sectionHeightRef.current = viewportH + horizontalDistance;
      container.style.minHeight = `${sectionHeightRef.current}px`;
      // Notify smooth scrollers (e.g., Locomotive) to recalc after height change
      try {
        window.dispatchEvent(new Event("resize"));
      } catch (_) {}
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
      const rightWidth = right.clientWidth;
      const trackWidth = track.scrollWidth;
      const horizontalDistance = Math.max(0, trackWidth - rightWidth);
      const targetTranslate = -progress * horizontalDistance;
      const eased = lastTranslate + (targetTranslate - lastTranslate) * 0.2;
      lastTranslate = eased;
      track.style.transform = `translate3d(${eased}px, 0, 0)`;
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
      className="relative mt-[50px] text-white font-hero-light"
    >
      <div
        className="h-screen flex relative"
        data-scroll
        data-scroll-sticky
        data-scroll-target="#team-section"
      >
        {/* Left section - pinned */}
        <div className="z-10 left-section absolute left-0 top-0 w-[40%] h-full flex items-center px-[50px] text-[48px] pointer-events-none">
          <h1 className="leading-[1.1]">
            Our <br /> creative team
          </h1>
        </div>

        {/* Right section */}
        <div
          ref={rightRef}
          className="relative z-0 flex-1 overflow-hidden h-full pl-[40%]"
        >
          <div
            ref={trackRef}
            className="flex items-center gap-5 will-change-transform py-6"
          >
            {imageUrls.map((src, index) => (
              <div
                key={String(index)}
                className="relative h-[330px] w-[300px] rounded-[10px] shrink-0 overflow-hidden bg-[#111]"
              >
                <img
                  src={src}
                  alt={`team-${index + 1}`}
                  className="h-full w-full object-cover rounded-[10px] select-none"
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
