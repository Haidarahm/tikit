import React from "react";
import StickyPinnedSection from "../../components/ui/StickyPinnedSection";

import hiddenImg from "../../assets/work/hidden.jpg";
import kraveImg from "../../assets/work/krave.jpg";
import porscheImg from "../../assets/work/porsche.jpg";

const content = [
  {
    title: "Hidden",
    description: "Brand visuals, campaign assets and art direction.",
    content: (
      <img
        src={hiddenImg}
        alt="Hidden — Brand visuals, campaign assets and art direction"
        className="h-full w-full object-cover"
        loading="lazy"
      />
    ),
  },
  {
    title: "Krave",
    description: "Content system and digital launch materials.",
    content: (
      <img
        src={kraveImg}
        alt="Krave — Content system and digital launch materials"
        className="h-full w-full object-cover"
        loading="lazy"
      />
    ),
  },
  {
    title: "Porsche",
    description: "Editorial layouts and social creatives.",
    content: (
      <img
        src={porscheImg}
        alt="Porsche — Editorial layouts and social creatives"
        className="h-full w-full object-cover"
        loading="lazy"
      />
    ),
  },
];

const items = content.map(({ title, description, content: media }) => ({
  title,
  description,
  media,
}));

export default function WorkSection() {
  return (
    <div className="relative z-10 w-full overflow-visible">
      <StickyPinnedSection items={items} heightPerItemVh={100} />
    </div>
  );
}
