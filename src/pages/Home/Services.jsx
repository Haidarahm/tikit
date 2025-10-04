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
      <h1 className="text-center font-bold text-[32px] mb-[38px]">What We Do Best</h1>
      <div style={{ position: "relative" ,height:'100%'}} >
        <FlowingMenu items={demoItems} />
      </div>
    </div>
  );
};

export default Services;
