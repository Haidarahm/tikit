import React, { useEffect, useRef, useState } from "react";

// Import all images from assets/who-we-are (jpg, jpeg, png, webp)
// Vite will inline URLs for us
const whoWeAreImages = Object.values(
  import.meta.glob("../../assets/who-we-are/*.{jpg,jpeg,png,webp}", {
    eager: true,
    as: "url",
  })
);

const AboutUs = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -20% 0px",
        threshold: 0.2,
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="section font-hero-light flex-col mx-auto min-h-[200vh] z-10 w-6/7 my-[100px] "
    >
      {inView && (
        <div className="w-full">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">
            Who We Are
          </h2>
          {/* Radial collage: one image in center, others around */}
          <RadialCollage images={whoWeAreImages} />
        </div>
      )}
    </div>
  );
};

function RadialCollage({ images }) {
  const containerRef = useRef(null);
  const [radiusPercent, setRadiusPercent] = useState(32); // percentage of container size

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width < 640) setRadiusPercent(34);
      else if (width < 1024) setRadiusPercent(36);
      else setRadiusPercent(38);
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  if (!images || images.length === 0) return null;

  const centerSrc = images[0];
  const surrounding = images.slice(1);
  const total = surrounding.length;

  const getPosition = (index, totalItems, r) => {
    const angle = (index / totalItems) * Math.PI * 2 - Math.PI / 2; // start at top
    const cx = 50 + r * Math.cos(angle);
    const cy = 50 + r * Math.sin(angle);
    return { left: `${cx}%`, top: `${cy}%` };
  };

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-5xl aspect-square"
    >
      {/* Center image */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src={centerSrc}
            alt="who-we-are-center"
            className="object-cover w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[260px] lg:h-[260px]"
          />
        </div>
      </div>

      {/* Surrounding images */}
      {surrounding.map((src, idx) => {
        const pos = getPosition(idx, total, radiusPercent);
        return (
          <div
            key={idx}
            style={{
              left: pos.left,
              top: pos.top,
              transform: "translate(-50%, -50%)",
            }}
            className="absolute"
          >
            <div className="overflow-hidden rounded-xl shadow-md transition-transform duration-500 hover:scale-[1.04]">
              <img
                src={src}
                alt={`who-we-are-${idx + 2}`}
                className="object-cover w-[84px] h-[84px] sm:w-[110px] sm:h-[110px] lg:w-[128px] lg:h-[128px]"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AboutUs;
