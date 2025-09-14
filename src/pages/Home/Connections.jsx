import React from "react";
import CardSwap, { Card } from "../../components/CardSwap";

export const Connections = () => {
  return (
    <div style={{backgroundImage:"url(../../../assets/aurora-background.png)"}} className="section relative font-hero-light flex items-center mx-auto justify-between min-h-screen w-[95vw] rounded-2xl">
      <div className="text w-1/2">
        <h1 className="title font-bold text-[48px]">
          Bold, data-led <br /> marketing <br /> crafted by experts
        </h1>
        <p className=" font-light text-[20px]">
          Today’s consumers expect more than ads — they expect connection. We
          blend data with creativity to help brands reach and resonate with the
          right audience.
        </p>
      </div>

      <div className="relative  w-1/2 h-[600px]">
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          <Card customClass="bg-red-500">
            <h3>Card 1</h3>
            <p>Your content here</p>
          </Card>
          <Card customClass="bg-blue-500">
            <h3>Card 2</h3>
            <p>Your content here</p>
          </Card>
          <Card customClass="bg-green-500">
            <h3>Card 3</h3>
            <p>Your content here</p>
          </Card>
        </CardSwap>
      </div>
    </div>
  );
};
