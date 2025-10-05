import React from "react";
import ScrollStack, { ScrollStackItem } from "../../components/ScrollStackItem";
import image1 from "../../assets/images/goal-image-1.png";
import image2 from "../../assets/images/goal-image-2.png";
import image3 from "../../assets/images/goal-image-3.png";
import image4 from "../../assets/images/goal-image-4.png";

function Goals() {
  const goalsData = [
    {
      id: 1,
      title: "Amplify your brand's reach",
      description:
        "Reach real audiences with meaningful content. We grow traffic that actually converts.",
      image: image1,
      backgroundColor: "bg-[#76A3BE]",
    },
    {
      id: 2,
      title: "Boost campaign performance",
      description:
        "Track results in real time and optimize every move — all managed on one smart platform.",
      image: image2,
      backgroundColor: "bg-[#5653B7]",
    },
    {
      id: 3,
      title: "Drive real engagement",
      description:
        "Reach real audiences with meaningful content. We grow traffic that actually converts.",
      image: image3,
      backgroundColor: "bg-[#9D74E5]",
    },
    {
      id: 4,
      title: "Drive real engagement",
      description:
        "Reach real audiences with meaningful content. We grow traffic that actually converts.",
      image: image4,
      backgroundColor: "bg-[#B46CA7]",
    },
  ];

  return (
    <div className="section font-hero-light flex flex-col md:flex-row mx-auto md:h-[370vh]  z-10 w-full md:w-6/7">
      <ScrollStack
        useWindowScroll={true}
        itemDistance={0}
        itemStackDistance={50}
        stackPosition="100"
        className="hidden md:block"
      >
        {goalsData.map((goal) => (
          <ScrollStackItem
            key={goal.id}
            itemClassName={`flex relative mx-[4px] items-center overflow-hidden ${goal.backgroundColor} `}
          >
            <div className="text">
              {/* ❌ REMOVED backdrop-blur-lg — it’s expensive in scroll animations */}
              <h2 className="font-bold w-full md:max-w-[500px] text-[20px] md:text-[52px] leading-[24px] md:leading-[50px] mb-[10px] md:mb-[22px]">
                {goal.title}
              </h2>
              <p className=" text:[14px] md:text-[32px] leading-[20px] md:leading-[35px]">
                {goal.description}
              </p>
            </div>
            {/* ✅ Optimized image with size + lazy load */}
            <img
              src={goal.image}
              alt={goal.title}
              className="rounded-[15px] md:rounded-[39px] w-[120px] md:w-[500px] object-cover"
              loading="lazy"
            />
          </ScrollStackItem>
        ))}
      </ScrollStack>
      <div className="container-goals mx-2 block md:hidden">
        {goalsData.map((goal, index) => {
          // Alternate animation direction: even index = fade-right, odd index = fade-left
          const animationDirection =
            index % 2 === 0 ? "fade-right" : "fade-left";
          const animationDelay = index * 200; // Stagger animations by 200ms each

          return (
            <div
              key={goal.id}
              className={`flex  my-12 mx-[4px] p-4 rounded-[10px] items-center overflow-hidden ${goal.backgroundColor} `}
              data-aos={animationDirection}
              data-aos-delay={animationDelay}
              data-aos-duration="800"
              data-aos-easing="ease-out-cubic"
              data-aos-once="false"
              data-aos-mirror="true"
            >
              <div className="text">
                {/* ❌ REMOVED backdrop-blur-lg — it’s expensive in scroll animations */}
                <h2 className="font-bold w-] text-[20px] md:text-[52px] leading-[24px] md:leading-[50px] mb-[10px] md:mb-[22px]">
                  {goal.title}
                </h2>
                <p className=" text:[14px] ] leading-[20px]">
                  {goal.description}
                </p>
              </div>
              {/* ✅ Optimized image with size + lazy load */}
              <img
                src={goal.image}
                alt={goal.title}
                className="rounded-[15px] md:rounded-[39px] w-[120px] md:w-[500px] object-cover"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Goals;
