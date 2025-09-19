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

  // Helper for occasional larger spans for a creative layout
  const getSpanClasses = (idx) => {
    // Make every 7th item span 2 columns on lg, and every 5th item taller
    if (idx % 7 === 0) return "lg:col-span-2 lg:row-span-2";
    if (idx % 5 === 0) return "row-span-2";
    return "";
  };

  return (
    <div
      ref={sectionRef}
      className="section font-hero-light flex-col mx-auto min-h-[200vh] z-10 w-6/7 my-[100px] "
    >
      {inView && (
        <div className="w-full">
          <h2 className="text-white text-3xl text-center md:text-4xl font-bold mb-8">
            Who We Are
          </h2>
          <p className="text-[36px] font-light text-center mb-[40px]">
            We create and innovate digital experiences through strategic
            collaboration and creativity. Each project engages and inspires,
            aiming to drive impactful results.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {whoWeAreImages.map((src, idx) => (
              <div
                key={idx}
                className={`overflow-hidden rounded-xl ${getSpanClasses(idx)}`}
              >
                <img
                  src={src}
                  alt={`who-we-are-${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
