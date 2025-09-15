"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const sectionRef = useRef<any>(null);

  // Track window scroll relative to the section lifecycle
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map progress [0..1] to discrete cards breakpoints
    const cardsBreakpoints = content.map(
      (_, index) => index / Math.max(cardLength - 1, 1)
    );
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ["#0f172a", "#000000", "#171717"];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  // Outer container height determines how long the section stays pinned
  const sectionHeightVh = content.length * 120; // 120vh per card for breathing room

  return (
    <div
      ref={sectionRef}
      style={{ height: `${sectionHeightVh}vh` }}
      className="relative w-full"
    >
      {/* Sticky viewport container */}
      <motion.div
        animate={{
          backgroundColor:
            backgroundColors[activeCard % backgroundColors.length],
        }}
        className="sticky top-0 flex h-screen items-start justify-center space-x-10 rounded-md p-10"
      >
        <div className="relative flex h-full w-full max-w-5xl items-start px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-kg mt-6 max-w-sm text-slate-300"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
          </div>
          <div
            style={{ background: backgroundGradient }}
            className={cn(
              "sticky top-10 ml-10 hidden h-60 w-80 flex-shrink-0 overflow-hidden rounded-md bg-white lg:block",
              contentClassName
            )}
          >
            {content[activeCard].content ?? null}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
