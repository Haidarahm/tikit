import React, { useState } from "react";

const Action = () => {
  const [isSecondSlide, setIsSecondSlide] = useState(false);

  const handleSlideClick = (slideNumber) => {
    setIsSecondSlide(slideNumber === 2);
  };

  return (
    <div data-scroll-section className="snap-start snap-always h-screen flex">
      <div className="left-section w-1/2 h-full flex flex-col justify-center items-start">
        <h2 className="subtitle h-[45px] text-[40px] ">Kick it off with Tikit!</h2>
        <h1 className="title text-[62px] font-bold">Contact Us Now</h1>
        <p className="text-[24px] h-[58px] leading-[1] font-light ">We want to hear from you. let's us know how we can help!</p>
      </div>
      <div className="right-section w-1/2 h-full flex flex-col">
          <div className="swiper-wrapper w-full border flex relative border-white h-[50px] rounded-full">
             <div 
               className={`move-item absolute w-1/2 h-full bg-white rounded-full transition-all duration-300 ease-in-out ${
                 isSecondSlide ? 'left-1/2' : 'left-0'
               }`}
             />
             <div 
               className={`swiper-slide w-1/2 flex justify-center items-center relative z-10 cursor-pointer ${
                 !isSecondSlide ? 'text-black' : 'text-white'
               }`}
               onClick={() => handleSlideClick(1)}
             >
               Client
             </div>
             <div 
               className={`swiper-slide w-1/2 flex justify-center items-center relative z-10 cursor-pointer ${
                 isSecondSlide ? 'text-black' : 'text-white'
               }`}
               onClick={() => handleSlideClick(2)}
             >
               Influencer
             </div>
          </div>
      </div>
    </div>
  );
};

export default Action;
