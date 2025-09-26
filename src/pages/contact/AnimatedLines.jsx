import React from "react";

const AnimatedLines = () => {
  return (
    <section data-scroll-section className="h-screen w-full flex flex-col">
      <div className="details flex gap-[50px] max-w-7xl mx-auto">
        <h1 className="title uppercase font-bold text-[24px] w-1/7">
          We’ve been waiting for you!
        </h1>
        <p className="description flex-1 text-[24px]">
          Add the best talent on the market, an agile skilled management &
          seamless
          <br /> involvement
        </p>
      </div>
      <div className="main-content flex-1 flex items-center flex-col overflow-hidden">
        <div className="line-container flex justify-end w-full rotate-12">
          <div
            data-scroll
            data-scroll-speed="15"
            data-scroll-direction="horizontal"
            className="line w-[60%] h-[100px] text-[100px] flex items-center justify-center text-black font-bold bg-white"
          >
            contact us now{" "}
          </div>
        </div>
        <div className="line-container flex justify-start w-full -rotate-[30deg]">
          <div
            data-scroll
            data-scroll-speed="-15"
            data-scroll-direction="horizontal"
            className="line w-[60%] h-[100px] text-[100px] flex items-center justify-center text-black font-bold bg-white"
          >
            contact us now{" "}
          </div>
        </div>
        <div className="line-container  flex justify-end w-[150%] rotate-[16deg]">
          <div
            data-scroll
            data-scroll-speed="20"
            data-scroll-direction="horizontal"
            className="line w-[1000px] h-[100px] text-[100px] flex items-center justify-center text-black font-bold bg-white"
          >
            Get A Quotation
          </div>
        </div>
        <div className="line-container  flex justify-center w-[150%] -rotate-[20deg]">
          <div
            data-scroll
            data-scroll-speed="20"
            data-scroll-direction="horizontal"
            className="line w-[1000px] h-[100px] text-[100px] flex items-center justify-center text-black font-bold bg-white"
          >
            Call Us!
          </div>
        </div>
        <div className="line-container flex justify-start w-full -rotate-12">
          <div
            data-scroll
            data-scroll-speed="-15"
            data-scroll-direction="horizontal"
            className="line w-[1000px] h-[100px] text-[100px] flex items-center justify-center text-black font-bold bg-white"
          >
            TIKIT Company
          </div>
        </div>
        <div className="line-container flex justify-start w-full rotate-[30deg]">
          <div
            data-scroll
            data-scroll-speed="20"
            data-scroll-direction="horizontal"
            className="line w-[1100px] h-[100px] text-[100px] flex items-center justify-center text-black font-bold bg-white"
          >
            contact us
          </div>
        </div>
        <div className="line-container flex  justify-end w-full rotate-[45deg]">
          <div
            data-scroll
            data-scroll-speed="-20"
            data-scroll-direction="horizontal"
            className="line w-[70%] h-[100px] text-[100px] flex items-center justify-center text-black font-bold bg-white"
          >
            contact us
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedLines;
