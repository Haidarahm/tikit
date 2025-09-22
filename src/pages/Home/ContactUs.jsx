import React from "react";
import FloatingInput from "../../components/ui/FloatingInput";

const ContactUs = () => {
  return (
    <div className="relative text-white min-h-[100vh] font-hero-light rounded-[25px] flex flex-col mx-auto py-[60px] px-[50px]  w-[95vw] bg-black">
      <div className="email w-full flex h-1/2">
        <div className="texts flex  flex-col relative ">
          <h3 className="subtitle text-[50px]">Kick it off with Tikit!</h3>
          <h1 className="title text-[70px] font-bold">contact us now</h1>
          <p className="description text-[24px] font-light w-full">
            We want to hear from you. let’s us know <br /> how we can help!
          </p>
        </div>
        <div className="action h-full flex-col flex justify-between">
          <div className="title text-[24px]">
            let’s us know how we can help!
          </div>
          <div className="inputs flex justify-between gap-[20px]">
            <FloatingInput
              id="contact-standard"
              label="name"
              containerClassName="mt-8 flex-1"
            />
            <FloatingInput
              id="contact-standard"
              label="email"
              containerClassName="mt-8 flex-1"
            />
          </div>
          <button className="w-full bg-[#303134] rounded-full py-[15px] text-[20px]">
            Contact Us
          </button>
        </div>
      </div>
      <div className="brands h-1/2"></div>
    </div>
  );
};

export default ContactUs;
