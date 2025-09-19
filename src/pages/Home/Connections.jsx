import React from "react";
import ScrollFloat from "../../components/ScrollFloat";

const Connections = () => {
  return (
    <div className="section h-[70vh] font-hero-light rounded-[25px] text-center w-[60vw] overflow-hidden mx-auto">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        textClassName="text-[60px] font-bold leading-[60px]"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.05}
      >
        Bold, Data-Led Marketing Crafted By Experts
      </ScrollFloat>

      <p className="text-[32px] font-light leading-[35px] mt-[20px]">
        blend data with creativity to help brands reach and resonate with the
        right audience.
      </p>
    </div>
  );
};

export default Connections;
