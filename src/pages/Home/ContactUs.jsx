import React from "react";

const ContactUs = () => {
  return (
    <div className="section h-[70vh] font-hero-light rounded-[25px] flex flex-col overflow-hidden mx-auto  w-[95vw] bg-black">
      <div className="email w-1/2">
        <div className="texts flex flex-col">
          <h3 className="subtitle text-[50px]">Kick it off with Tikit!</h3>
          <h1 className="title text-[70px] font-bold">contact us now</h1>
          <p className="description text-[24px] font-light">
            We want to hear from you. let’s us know <br /> how we can help!
          </p>
        </div>
        <div className="action w-1/2"></div>
      </div>
      <div className="brands"></div>
    </div>
  );
};

export default ContactUs;
