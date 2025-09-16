import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * StickyPinnedSection
 * Props:
 * - items: Array<{ title: string; description: string; media?: React.ReactNode }>
 */
export default function StickyPinnedSection({ items }) {
  const sectionRef = useRef(null);
  const mediaRefs = useRef([]);
  const textRefs = useRef([]);

  const count = items?.length ?? 0;

  // Build a scrubbed timeline that pins the section and transitions items based on scroll
  useLayoutEffect(() => {
    const el = sectionRef.current;
    if (!el || !count) return;

    const pinDistance = window.innerHeight * (count * 1.2);

    const ctx = gsap.context(() => {
      // Ensure media hidden initially and text wrappers hidden to avoid cross-bleed
      gsap.set(mediaRefs.current, { opacity: 0, y: 20 });
      gsap.set(textRefs.current, {
        opacity: 0,
        y: 0,
        visibility: "hidden",
        zIndex: 0,
      });
      // Hint heavy layers
      mediaRefs.current.forEach((node) => {
        if (!node) return;
        gsap.set(node, { willChange: "opacity, transform, filter" });
      });
      textRefs.current.forEach((node) => {
        if (!node) return;
        gsap.set(node, { willChange: "opacity, transform" });
      });

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: `+=${pinDistance}`,
          scrub: 0.6,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Create a segment for each item: fade in, hold, fade out
      const segment = 1; // one second per item; total duration ~= count seconds
      for (let i = 0; i < count; i++) {
        const textNode = textRefs.current[i];
        const mediaNode = mediaRefs.current[i];
        const at = i * segment;

        if (textNode) {
          const letters = textNode.querySelectorAll(".letter");
          // Gate the visibility of this block to its segment (slight gap to avoid overlap)
          tl.set(textNode, { autoAlpha: 1, zIndex: 1 }, at + 0.0002);
          tl.set(textNode, { autoAlpha: 0, zIndex: 0 }, at + segment - 0.0002);

          if (letters.length) {
            gsap.set(letters, { opacity: 0, y: 30, visibility: "inherit" });
            // Animate in letters (staggered) and hold fully visible until segment end
            tl.to(
              letters,
              {
                opacity: 1,
                y: 0,
                duration: segment * 0.3,
                stagger: 0.01,
                ease: "power3.out",
                overwrite: "auto",
              },
              at
            );
            // No letter-out; hide whole block at segment end via gate above
          } else {
            // Fallback: animate the whole block if letters aren't found
            tl.fromTo(
              textNode,
              { y: 10 },
              { y: 0, duration: segment * 0.4, ease: "power2.out" },
              at
            ).to(
              textNode,
              { y: 0, duration: segment * 0.35, ease: "none" },
              at + segment * 0.6
            );
          }
        }

        if (mediaNode) {
          // scale + blur + slight parallax
          gsap.set(mediaNode, {
            opacity: 0,
            scale: 0.96,
            y: 20,
            filter: "blur(12px)",
          });
          // Gate media visibility to its segment to avoid overlap
          tl.to(mediaNode, { opacity: 1, duration: 0.0001, ease: "none" }, at);
          tl.to(
            mediaNode,
            { opacity: 0, duration: 0.0001, ease: "none" },
            at + segment - 0.0005
          );
          tl.to(
            mediaNode,
            {
              scale: 1,
              y: 0,
              filter: "blur(0px)",
              duration: segment * 0.6,
              ease: "power3.out",
            },
            at
          );
          tl.to(
            mediaNode,
            {
              scale: 1.04,
              y: -10,
              filter: "blur(8px)",
              duration: segment * 0.5,
              ease: "power2.inOut",
            },
            at + segment * 0.6
          );
        }
      }
    });

    return () => ctx.revert();
  }, [count]);

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
              ref={(el) => (textRefs.current[i] = el)}
              className="absolute inset-0 flex flex-col justify-center"
              style={{
                willChange: "opacity, transform",
                transform: "translateZ(0)",
                pointerEvents: "none",
              }}
            >
              <h2 className="text-2xl font-bold text-white">
                {Array.from(it.title ?? "").map((ch, j) => (
                  <span key={j} className="letter inline-block">
                    {ch === " " ? "\u00A0" : ch}
                  </span>
                ))}
              </h2>
              <p className="mt-6 max-w-sm text-slate-300">
                {Array.from(it.description ?? "").map((ch, j) => (
                  <span key={j} className="letter inline-block">
                    {ch === " " ? "\u00A0" : ch}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>

        {/* Right column: sticky media panel (no placeholder background) */}
        <div className="sticky z-10 top-10 h-[70vh] w-[28rem] shrink-0 overflow-hidden rounded-xl">
          <div className="relative h-full w-full">
            {items.map((it, i) => (
              <div
                key={i}
                ref={(el) => (mediaRefs.current[i] = el)}
                className="absolute inset-0"
                style={{
                  opacity: 0,
                  willChange: "opacity",
                }}
              >
                {it.media ?? null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
