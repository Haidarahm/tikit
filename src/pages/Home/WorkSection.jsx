import React from "react";
import StickyPinnedSection from "../../components/ui/StickyPinnedSection";


const content = [
  {
    title: "Hidden",
    description: "Brand visuals, campaign assets and art direction.",
    content: <div className="h-full w-full bg-black/20" />,
  },
  {
    title: "Krave",
    description: "Content system and digital launch materials.",
    content: <div className="h-full w-full bg-black/20" />,
  },
  {
    title: "Porsche",
    description: "Editorial layouts and social creatives.",
    content: <div className="h-full w-full bg-black/20" />,
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
