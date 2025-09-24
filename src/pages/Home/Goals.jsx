import React from "react";
import ScrollStack, { ScrollStackItem } from "../../components/ScrollStackItem";
import image1 from "../../assets/images/goal-image-1.png";
import image2 from "../../assets/images/goal-image-2.png";
import image3 from "../../assets/images/goal-image-3.png";

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
  ];

  return (
    <div className="section font-hero-light flex mx-auto h-[240vh] z-10 w-6/7">
      <ScrollStack
        useWindowScroll={true}
        itemDistance={0}
        itemStackDistance={50}
        stackPosition="100"
      
      >
        {goalsData.map((goal) => (
          <ScrollStackItem
            key={goal.id}
            itemClassName={`flex relative items-center overflow-hidden ${goal.backgroundColor} `}
          >
            <div className="text">
              {/* ❌ REMOVED backdrop-blur-lg — it’s expensive in scroll animations */}
              <h2 className="font-bold max-w-[500px] text-[52px] leading-[50px] mb-[22px]">
                {goal.title}
              </h2>
              <p className="text-[32px] leading-[35px]">{goal.description}</p>
            </div>
            {/* ✅ Optimized image with size + lazy load */}
            <img
              src={goal.image}
              alt={goal.title}
              className="rounded-[39px] object-cover"
              width={500}
              height={400}
              loading="lazy"
            />
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  );
}

export default Goals;
