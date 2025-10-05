import React from "react";
import FlowingMenu from "../../components/FlowingMenu";

const demoItems = [
  {
    link: "#",
    text: "Mojave",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    link: "#",
    text: "Sonoma",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    link: "#",
    text: "Monterey",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    link: "#",
    text: "Sequoia",
    image: "https://picsum.photos/600/400?random=4",
  },
];
const Services = () => {
  return (
    <div className="section mt-16 relative font-hero-light flex flex-col mx-auto  md:h-[70vh]   z-10 w-full justify-center">
      <h1 className="text-center font-bold text-[18px] md:text-[32px] mb-[38px]">
        What We Do Best
      </h1>
      <div
        className="hidden md:block"
        style={{ position: "relative", height: "100%" }}
      >
        <FlowingMenu items={demoItems} />
      </div>
      <div className="mobile-view flex flex-col md:hidden">
        {demoItems.map((item, index) => (
          <div
            key={index}
            className={`flex pb-4 justify-center text-[20px] mb-4 ${
              index < demoItems.length - 1 ? "border-white border-b-2" : ""
            }`}
            data-aos="flip-up"
            data-aos-delay={index * 150}
            data-aos-duration="600"
            data-aos-easing="ease-out-cubic"
            data-aos-once="false"
            data-aos-mirror="true"
          >
            <h2 className="text-lg font-semibold mt-2">{item.text}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
