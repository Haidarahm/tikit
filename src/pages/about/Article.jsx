import React from "react";

const Article = () => {
  return (
    <div
      data-scroll-section
      className="min-h-[190vh] relative w-full p-14 overflow-hidden"
    >
      <div
        className="title font-[PlusJakartaSans] relative whitespace-nowrap text-white text-[180px] font-bold"
        data-scroll
        data-scroll-speed="20"
        data-scroll-direction="horizontal"
      >
        Creativity <span className="line">-</span> High Reach{" "}
        <span className="line">-</span> SEO Agency
      </div>
      <div
        className="title font-[PlusJakartaSans] relative whitespace-nowrap text-white text-[180px] font-bold"
        data-scroll
        data-scroll-speed="-20"
        data-scroll-direction="horizontal"
      >
        Creativity <span className="line">-</span> High Reach{" "}
        <span className="line">-</span> SEO Agency
      </div>
    </div>
  );
};

export default Article;
