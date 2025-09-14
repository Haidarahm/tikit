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
    <div className="section font-hero-light flex flex-col mx-auto  h-[50vh]   z-10 w-6/7 justify-center">
      <h1 className="text-center font-bold text-[32px] mb-[38px]">What We Do Best</h1>
      <div style={{ height: "600px", position: "relative" }}>
        <FlowingMenu items={demoItems} />
      </div>
    </div>
  );
};

export default Services;
