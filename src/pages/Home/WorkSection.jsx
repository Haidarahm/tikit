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
    <div className="relative z-10 w-full overflow-visible">
      <StickyPinnedSection items={items} heightPerItemVh={200} />
    </div>
  );
}
