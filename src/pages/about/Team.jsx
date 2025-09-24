import React from "react";
import image from "../../assets/images/card-1.jpg";

// Import all images from assets/images (URLs). Uppercase name avoids unused-var lint.
const IMAGES = import.meta.glob("../../assets/images/*.{png,jpg,jpeg,webp}", {
  eager: true,
  as: "url",
});
const Team = () => {
  return (
    <div
      data-scroll-section
      className="h-[50vh] relative flex mt-[50px] text-white font-hero-light "
    >
      <div className="left-section flex h-full items-center px-[50px] text-[48px]">
        <h1>
          Our <br /> creative team
        </h1>
      </div>
      <div className="right-section">
        <div className="relative h-[330px] w-[300px] rounded-[10px]">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover z-0 absolute rounded-[10px]"
          />
          <div className="details absolute z-10 bottom-0 w-[80%] flex justify-center flex-col items-center rounded-[10px] left-1/2 -translate-1/2 bg-[#00000067]">
            <h1 className="name text-[20px]  font-bold"> Haidar Ahmad</h1>
            <h3 className="specialist text-[16px] font-light">Data Analysts</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
