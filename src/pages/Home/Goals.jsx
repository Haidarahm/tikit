import React from "react";
import ScrollStack, { ScrollStackItem } from "../../components/ScrollStackItem";
import image1 from "../../assets/images/goal-image-1.png";
import image2 from "../../assets/images/goal-image-2.png";
import image3 from "../../assets/images/goal-image-3.png";
function Goals() {
  return (
    <div className="section font-hero-light flex  mx-auto h-[230vh] z-10 w-6/7">
      <ScrollStack
        useWindowScroll={true}
        itemDistance={0}
        // itemScale={0.08}
        itemStackDistance={50}
        stackPosition="100"
        // // scaleEndPosition="-5%"
        // baseScale={0.8}
        // scaleDuration={10}
        // rotationAmount={0}
        // blurAmount={10}
      >
        <ScrollStackItem itemClassName="flex  relative overflow-hidden bg-[#76A3BE] opacity-90">
          <div className="text opacity-">
            <h2 className="font-bold text-[52px]">
              Amplify your <br />
              brand’s reach
            </h2>
            <p className="text-[32px]">
              Reach real audiences with meaningful content. We grow traffic that
              actually converts.
            </p>
          </div>
          <img src={image1} alt="" className="rounded-[39px]" />
        </ScrollStackItem>
        <ScrollStackItem itemClassName="flex relative overflow-hidden bg-[#5653B7] opacity-90">
          <div className="text opacity-">
            <h2 className="font-bold text-[52px]">
              Boost campaign <br />
              performance
            </h2>
            <p className="text-[32px]">
              Track results in real time and optimize every move — all managed
              on one smart platform.
            </p>
          </div>
          <img src={image2} alt="" className="rounded-[39px]" />
        </ScrollStackItem>
        <ScrollStackItem itemClassName="flex relative overflow-hidden bg-[#9D74E5] opacity-90">
          <div className="text opacity-">
            <h2 className="font-bold text-[52px]">
              Drive real <br />
              engagement
            </h2>
            <p className="text-[32px]">
              Reach real audiences with meaningful content. We grow traffic that
              actually converts.
            </p>
          </div>
          <img src={image3} alt="" className="rounded-[39px]" />
        </ScrollStackItem>
      </ScrollStack>
    </div>
  );
}

export default Goals;
