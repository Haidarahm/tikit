import React from "react";

const Strategy = () => {
  const cards = [
    {
      title: "Influencer Marketing",
      description:
        "From concept to final cut, we bring bold ideas to life. Whether it's social content, branded visuals, or full-scale commercial shoots, our production team delivers quality storytelling that captures attention and drives action.",
      color: "#0ea5e9", // sky-500
    },
    {
      title: "Production",
      description:
        "From concept to final cut, we bring bold ideas to life. Whether it's social content, branded visuals, or full-scale commercial shoots, our production team delivers quality storytelling that captures attention and drives action.",
      color: "#a78bfa", // violet-400
    },
    {
      title: "Social Media Management",
      description:
        "From concept to final cut, we bring bold ideas to life. Whether it's social content, branded visuals, or full-scale commercial shoots, our production team delivers quality storytelling that captures attention and drives action.",
      color: "#f97316", // orange-500
    },
    {
      title: "Branding",
      description:
        "From concept to final cut, we bring bold ideas to life. Whether it's social content, branded visuals, or full-scale commercial shoots, our production team delivers quality storytelling that captures attention and drives action.",
      color: "#22c55e", // green-500
    },
  ];
  return (
    <div data-scroll-section className="text-white">
      <div className="title text-[70px] capitalize text-center mt-[80px]">
        No fluff.
        <br /> Just <span className="font-bold">expert strategy</span>{" "}
      </div>
      <div className="container-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 px-6">
        {cards.map((card, i) => (
          <div
            key={String(i)}
            className="rounded-[14px] overflow-hidden bg-[#0b0b0b]/60 col-span-2 row-span-1 border border-white/10 hover:border-white/20 transition-colors"
            style={{ backgroundColor: `${card.color}1A` }}
          >
            <div className="p-5">
              <div className="text-[36px] font-semibold mb-2">{card.title}</div>
              <div className="text-white/80 text-[24px] leading-relaxed">
                {card.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Strategy;
