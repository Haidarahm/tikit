import React from "react";

const Strategy = () => {
  const cards = [
    {
      title: "Influencer Marketing",
      description:
        "From concept to final cut, we bring bold ideas to life. Whether it's social content, branded visuals, or full-scale commercial shoots, our production team delivers quality storytelling that captures attention and drives action.",
    },
    {
      title: "Production",
      description:
        "From concept to final cut, we bring bold ideas to life. Whether it's social content, branded visuals, or full-scale commercial shoots, our production team delivers quality storytelling that captures attention and drives action.",
    },
    {
      title: "Social Media Management",
      description:
        "From concept to final cut, we bring bold ideas to life. Whether it's social content, branded visuals, or full-scale commercial shoots, our production team delivers quality storytelling that captures attention and drives action.",
    },
    {
      title: "Branding",
      description:
        "From concept to final cut, we bring bold ideas to life. Whether it's social content, branded visuals, or full-scale commercial shoots, our production team delivers quality storytelling that captures attention and drives action.",
    },
  ];
  return (
    <div data-scroll-section className="h-screen text-white">
      <div className="title text-[70px] capitalize text-center mt-[80px]">
        No fluff.
        <br /> Just <span className="font-bold">expert strategy</span>{" "}
      </div>
      <div className="container-cards grid grid-cols-4 gap-2 grid-rows-2">
        
      </div>
    </div>
  );
};

export default Strategy;
