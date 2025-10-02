import React, { useState } from "react";
import FloatingInput from "../../components/ui/FloatingInput";
import GradientText from "../../components/GradientText";

const Action = () => {
  const [isSecondSlide, setIsSecondSlide] = useState(false);

  const handleSlideClick = (slideNumber) => {
    setIsSecondSlide(slideNumber === 2);
  };

  return (
    <div data-scroll-section className="snap-start snap-always gap-[120px] h-screen flex py-20 px-14">
      <div className="left-section w-1/2 h-full flex flex-col justify-start items-start">
        <h2 className="subtitle h-[45px] text-[40px] ">Kick it off with Tikit!</h2>
         <GradientText
                      colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                      animationSpeed={5}
                      showBorder={false}
                      className="title ml-0 text-[62px] font-bold"
                    >
                      Contact Us Now
                    </GradientText>
        
        <p className="text-[24px] h-[58px] leading-[1] font-light ">We want to hear from you. let's us know how we can help!</p>
      </div>
      <div className="right-section w-1/2 h-full flex flex-col gap-[40px]">
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
          <div className="inputs  grid-rows-3 gap-[30px] grid grid-cols-2 flex-1">
            <FloatingInput
              id="contact-standard"
              label="Name"
              containerClassName="col-span-1 my-6 row-span-1"
            />
            <FloatingInput
              id="contact-standard"
              label="Email"
              containerClassName="col-span-1 my-6 row-span-1 "
            />
            <FloatingInput
              id="contact-standard"
              label="Phone"
              containerClassName="col-span-1 my-6 row-span-1"
            />
            <FloatingInput
              id="contact-standard"
              label="Subject"
              containerClassName="col-span-1 my-6 row-span-1 "
            />
            
<button
class="px-5 h-[50px] cursor-pointer py-2.5 relative col-span-2 row-span-1 rounded-full group overflow-hidden font-medium bg-transparent text-white border border-white flex items-center justify-center">
<span
class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out rounded-full transform translate-y-0 bg-white group-hover:h-full opacity-90"></span>
<span class="relative uppercase group-hover:text-black text-base font-semibold">Contact Us</span>
</button>
            {/* <button className=" col-span-2 row-span-1 rounded-full border h-[50px] border-white ">
Contact Us
            </button> */}
          </div>
      </div>
    </div>
  );
};

export default Action;
