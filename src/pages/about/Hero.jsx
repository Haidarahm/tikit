import React from "react";
import InfiniteScroll from "../../components/InfiniteScroll";

const Hero = () => {
  const items = [
    { content: "Text Item 1" },
    { content: <p>Paragraph Item 2</p> },
    { content: "Text Item 3" },
    { content: <p>Paragraph Item 4</p> },
    { content: "Text Item 5" },
    { content: <p>Paragraph Item 6</p> },
    { content: "Text Item 7" },
    { content: <p>Paragraph Item 8</p> },
    { content: "Text Item 9" },
    { content: <p>Paragraph Item 10</p> },
    { content: "Text Item 11" },
    { content: <p>Paragraph Item 12</p> },
    { content: "Text Item 13" },
    { content: <p>Paragraph Item 14</p> },
  ];
  return (
    <div data-scroll-section className="h-screen px-[60px] flex flex-col">
      <div style={{ height: "500px", position: "relative" }}>
        <div   className="title z-20 w-full absolute text-[64px] capitalize  flex items-center  font-bold leading-[60px] h-full text-white">
          We are Tikit — a full-service <br /> marketing agency
        </div>
        <InfiniteScroll
          items={items}
          isTilted={true}
          tiltDirection="right"
          autoplay={true}
          autoplaySpeed={0.5}
          autoplayDirection="down"
          pauseOnHover={true}
        />
      </div>
      <div className="description flex-1 flex text-white bg-black  gap-14 justify-center items-center">
        <div className="title font-bold text-[38px] w-2/7 ">About Us</div>
        <div className="paragraph text-[32px] ">
          Driven by insight and creativity: the story behind “Tikit” — a
          regional agency powering brands, building trust, and delivering
          results.
        </div>
      </div>
    </div>
  );
};

export default Hero;
