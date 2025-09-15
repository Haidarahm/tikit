import React from "react";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";

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

export default function WorkSection() {
  return (
    <section className=" relative w-full  bg-neutral-950 py-20 px-6 md:px-16">
      <div className="relative mx-auto w-full max-w-7xl">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">
          Featured Work
        </h2>
        
      </div>
    </section>
  );
}
