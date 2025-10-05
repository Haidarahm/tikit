import React from "react";
import StickyPinnedSection from "../../components/ui/StickyPinnedSection";

import hiddenImg from "../../assets/work/hidden.webp";
import kraveImg from "../../assets/work/krave.webp";
import porscheImg from "../../assets/work/porsche.webp";

const content = [
  {
    title: "Hidden",
    subtitle: "Brand Campaign",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time..",
    content: (
      <img
        src={hiddenImg}
        alt="Hidden — Brand visuals, campaign assets and art direction"
        className="h-full rounded-[20px] w-full object-cover"
        loading="lazy"
      />
    ),
  },
  {
    title: "Krave",
    subtitle: "Digital Launch",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time.",
    content: (
      <img
        src={kraveImg}
        alt="Krave — Content system and digital launch materials"
        className="h-full rounded-[20px] w-full object-cover"
        loading="lazy"
      />
    ),
  },
  {
    title: "Porsche",
    subtitle: "Editorial Series",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time.",
    content: (
      <img
        src={porscheImg}
        alt="Porsche — Editorial layouts and social creatives"
        className="h-full rounded-[20px] w-full object-cover"
        loading="lazy"
      />
    ),
  },
];

const items = content.map(
  ({ title, subtitle, description, content: media }) => ({
    title,
    subtitle,
    description,
    media,
  })
);

export default function WorkSection() {
  return (
    <>
      <div className="relative hidden md:block z-10 w-full overflow-visible">
        <StickyPinnedSection items={items} heightPerItemVh={200} />
      </div>
      <div className="mobile-view gap-[30px] md:hidden relative text-white  flex flex-col w-full px-[20px]">
        <div className="headline sticky top-0 flex w-full justify-between mt-[40px]">
          <h1 className="text-[18px] font-bold">Featured Work</h1>{" "}
          <button className="bg-white px-2 md:hidden text-[11px] text-black rounded-full uppercase">
            Explore Projects
          </button>
        </div>
        <div className="main-content w-full flex flex-col gap-[20px]">
          {content.map((item, index) => (
            <div
              key={item.title}
              className="element-wrapper flex flex-col w-full gap-[30px]"
            >
              <div className="text flex flex-col gap-[10px]">
                <h1 className="title text-[20px] font-bold">{item.title}</h1>
                <div className="subtitle text-[16px]">{item.subtitle}</div>
                <div className="description text-[14px]">
                  {item.description}
                </div>
              </div>
              <div className="image relative w-full h-[250px] rounded-[20px] overflow-hidden">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
