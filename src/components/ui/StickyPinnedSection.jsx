import React, { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * StickyPinnedSection
 * Props:
 * - items: Array<{ title: string; description: string; media?: React.ReactNode }>
 * - heightPerItemVh?: number (default 160)
 */
export default function StickyPinnedSection({ items, heightPerItemVh = 100 }) {
  const sectionRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const count = items?.length ?? 0;
  const sectionHeightVh = useMemo(
    () => Math.max((count || 1) * heightPerItemVh, heightPerItemVh),
    [count, heightPerItemVh]
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !count) return;

    // Pin the section for a scroll distance based on items count
    const pinDistance = window.innerHeight * (count * 1.2);

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top top",
      end: `+=${pinDistance}`,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const p = self.progress; // 0..1
        const idx = Math.min(
          count - 1,
          Math.max(0, Math.round(p * (count - 1)))
        );
        if (idx !== activeIdx) setActiveIdx(idx);
      },
    });

    return () => st.kill();
  }, [count, activeIdx]);

  if (!count) return null;

  return (
    <section
      ref={sectionRef}
      style={{ height: `100vh` }}
      className="relative w-full overflow-visible"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center gap-10 p-10">
        {/* Left column: stacked text items to avoid layout reflow */}
        <div className="relative h-[70vh] w-full max-w-2xl">
          {items.map((it, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex flex-col justify-center transition-opacity duration-300 ${
                i === activeIdx
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
              style={{
                willChange: "opacity, transform",
                transform: "translateZ(0)",
              }}
            >
              <h2 className="text-2xl font-bold text-white">{it.title}</h2>
              <p className="mt-6 max-w-sm text-slate-300">{it.description}</p>
            </div>
          ))}
        </div>

        {/* Right column: sticky media panel */}
        <div className="sticky z-10 top-10 h-[70vh] w-[28rem] shrink-0 overflow-hidden rounded-xl bg-white/5 backdrop-blur-md">
          <div className="h-full w-full">{items[activeIdx].media ?? null}</div>
        </div>
      </div>
    </section>
  );
}
