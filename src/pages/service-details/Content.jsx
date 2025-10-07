import React from "react";
import img2 from "../../assets/who-we-are/2.webp";
import img3 from "../../assets/who-we-are/3.webp";
import img4 from "../../assets/who-we-are/4.webp";

const items = [
  {
    image: img2,
    title: "Project Alpha",
    subtitle: "Brand Awareness",
    description:
      "We helped Project Alpha increase their brand awareness through creative influencer campaigns and targeted social media strategies.",
  },
  {
    image: img3,
    title: "Beta Launch",
    subtitle: "Product Launch",
    description:
      "Beta Launch was a success with our full-funnel marketing approach, driving engagement and conversions from day one.",
  },
  {
    image: img4,
    title: "Gamma Growth",
    subtitle: "Growth Hacking",
    description:
      "Gamma Growth achieved record-breaking user acquisition numbers thanks to our innovative growth hacking tactics.",
  },
];

const Content = () => {
  return (
    <div
      data-scroll-section
      className="min-h-screen flex flex-col gap-20 text-white relative font-hero-light py-20 px-4 md:px-16"
    >
      {items.map((item, idx) => (
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
              src={item.image}
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
      ))}
    </div>
  );
};

export default Content;
