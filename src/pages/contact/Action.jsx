import React from "react";

const Action = () => {
  return (
    <div data-scroll-section className="snap-start snap-always h-screen flex">
      <div className="left-section w-1/2 h-full flex flex-col justify-center items-start">
        <h2 className="subtitle h-[45px] text-[40px] ">Kick it off with Tikit!</h2>
        <h1 className="title text-[62px] font-bold">Contact Us Now</h1>
        <p className="text-[24px] h-[58px] leading-[1] font-light ">We want to hear from you. let’s us know how we can help!</p>
      </div>
      <div className="right-section w-1/2 h-full flex flex-col">
        <div className="swiper w-full"> 
          <div className="swiper-wrapper">
             <div className="swiper-slide">Slide 1</div>
            <div className="swiper-slide">Slide 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Action;
