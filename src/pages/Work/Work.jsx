import React from "react";
import hiddenImg from "../../assets/work/hidden.jpg";
import kraveImg from "../../assets/work/krave.jpg";
import porscheImg from "../../assets/work/porsche.jpg";
import rangeRoverImg from "../../assets/work/range-rover.jpg";
import theReveImg from "../../assets/work/the-reve.jpg";
import "./work.css";
const Work = () => {
  return (
    <div className="work-section flex flex-col min-h-screen">
      <div className="h-[95vh] w-full description"></div>
      <div className="images  grid grid-cols-2 gap-4 ">
        <img src={hiddenImg} alt="" />
        <img src={kraveImg} alt="" />
        <img src={porscheImg} alt="" />
        <img src={rangeRoverImg} alt="" />
        <img src={theReveImg} alt="" />
      </div>
    </div>
  );
};

export default Work;
