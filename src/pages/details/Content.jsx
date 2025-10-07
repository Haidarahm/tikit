import React, { useEffect } from "react";
import { useWorkStore } from "../../store/workStore";

const Content = ({ id }) => {
  const { cases, loadCases, lang, loading } = useWorkStore();
  const numericId = id ? Number(id) : undefined;

  useEffect(() => {
    if (numericId) {
      loadCases(numericId, lang);
    }
  }, [numericId, lang, loadCases]);

  const items = numericId ? cases?.[numericId] ?? [] : [];
  return (
    <div
      data-scroll-section
      className="min-h-screen flex flex-col gap-20 text-white relative font-hero-light py-20 px-4 md:px-16"
    >
      {loading && items.length === 0 ? (
        <div className="w-full h-[40vh] bg-white/10 animate-pulse rounded-[15px]" />
      ) : (
        items.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image reveal animation */}
            <div
              className="reveal-img w-full md:w-1/3"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
            >
              <img
                src={item.media}
                alt={item.title}
                className="rounded-[15px] w-full h-full object-cover"
              />
            </div>

            {/* Text reveal animation */}
            <div
              className="reveal-text flex-1 flex flex-col gap-2"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
              data-scroll-speed={idx % 2 === 0 ? "1" : "-1"}
            >
              <h2 className="text-3xl md:text-5xl font-bold">{item.title}</h2>
              <h3 className="text-xl md:text-2xl font-semibold text-[#40ffaa]">
                {item.subtitle}
              </h3>
              <p className="text-base md:text-lg text-white/80 max-w-[600px]">
                {item.description}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Content;
