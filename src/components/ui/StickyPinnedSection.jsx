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
  const stickyRef = useRef(null);
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
      const segment = 1; // abstract unit per item (scrubbed)
      const textFadePortion = 0.12; // 12% fade in/out for text blocks
      const mediaFadePortion = 0.18; // 18% fade in/out for media
      for (let i = 0; i < count; i++) {
        const textNode = textRefs.current[i];
        const mediaNode = mediaRefs.current[i];
        const at = i * segment;

        if (textNode) {
          const letters = textNode.querySelectorAll(".letter");
          // Smooth fade + subtle blur/lift at segment edges for this text block (fixed 0.3 duration)
          tl.fromTo(
            textNode,
            { autoAlpha: 0, zIndex: 1, y: 8, filter: "blur(8px)" },
            {
              autoAlpha: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.3,
              ease: "power2.out",
            },
            at
          );
          tl.to(
            textNode,
            {
              autoAlpha: 0,
              zIndex: 0,
              y: -8,
              filter: "blur(6px)",
              duration: 0.3,
              ease: "power2.in",
            },
            at + segment - segment * textFadePortion
          );

          if (letters.length) {
            const lettersTitle = textNode.querySelectorAll(".letter-title");
            const lettersSubtitle =
              textNode.querySelectorAll(".letter-subtitle");
            const lettersDesc = textNode.querySelectorAll(".letter-desc");

            // Prepare all letters
            gsap.set([lettersTitle, lettersSubtitle, lettersDesc], {
              opacity: 0,
              y: 30,
              visibility: "inherit",
            });

            // Title in
            tl.to(
              lettersTitle,
              {
                opacity: 1,
                y: 0,
                duration: 0.4,
                stagger: 0.02,
                ease: "power3.out",
                overwrite: "auto",
              },
              at
            );

            // Subtitle in (after title)
            if (lettersSubtitle.length) {
              tl.to(
                lettersSubtitle,
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.4,
                  stagger: 0.02,
                  ease: "power3.out",
                  overwrite: "auto",
                },
                at + 0.05
              );
            }

            // Description in (after subtitle)
            if (lettersDesc.length) {
              tl.to(
                lettersDesc,
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.4,
                  stagger: 0.02,
                  ease: "power3.out",
                  overwrite: "auto",
                },
                at + 0.1
              );
            }

            // No letter-out; block fades at edges
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
          // Smooth media fade in/out across the segment edges
          tl.fromTo(
            mediaNode,
            { opacity: 0 },
            {
              opacity: 1,
              duration: segment * mediaFadePortion,
              ease: "power2.out",
            },
            at
          );
          tl.to(
            mediaNode,
            {
              opacity: 0,
              duration: segment * mediaFadePortion,
              ease: "power2.in",
            },
            at + segment - segment * mediaFadePortion
          );
          tl.to(
            mediaNode,
            {
              scale: 1,
              y: 0,
              filter: "blur(0px)",
              duration: segment * (1 - mediaFadePortion * 2) * 0.6,
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
              duration: segment * (1 - mediaFadePortion * 2) * 0.4,
              ease: "power2.inOut",
            },
            at + segment * 0.6
          );
        }
      }

      // Smooth, scrubbed fade up near the end of the pin range
      const fadeOutPortion = 0.12; // last 12% of the pin range
      const fadeStart = pinDistance * (1 - fadeOutPortion);
      gsap
        .timeline({
          scrollTrigger: {
            trigger: el,
            start: `top+=${fadeStart} top`,
            end: `top+=${pinDistance} top`,
            scrub: true,
          },
        })
        .to(stickyRef.current, { autoAlpha: 0, y: -40, ease: "none" });
    });

    return () => ctx.revert();
  }, [count]);

  if (!count) return null;

  return (
    <section
      ref={sectionRef}
      style={{ height: `100vh` }}
      className="relative font-hero-light w-full overflow-visible"
    >
      <div
        ref={stickyRef}
        className="sticky top-0 flex h-screen items-center justify-center gap-10 p-10"
      >
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
              <h2 className="text-2xl font-bold text-[32px] text-white">
                {Array.from(it.title ?? "").map((ch, j) => (
                  <span key={j} className="letter letter-title inline-block">
                    {ch === " " ? "\u00A0" : ch}
                  </span>
                ))}
              </h2>
              {it.subtitle ? (
                <p className="mt-2 text-slate-300">
                  {Array.from(it.subtitle ?? "").map((ch, j) => (
                    <span
                      key={j}
                      className="letter letter-subtitle inline-block"
                    >
                      {ch === " " ? "\u00A0" : ch}
                    </span>
                  ))}
                </p>
              ) : null}
              <p className="mt-6 max-w-sm text-slate-300">
                {Array.from(it.description ?? "").map((ch, j) => (
                  <span key={j} className="letter letter-desc inline-block">
                    {ch === " " ? "\u00A0" : ch}
                  </span>
                ))}
              </p>
              <div className="mt-8">
                <button className="rounded-full bg-white/10 px-5 py-2 text-white backdrop-blur hover:bg-white/20 transition-colors">
                  View Work
                </button>
              </div>
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
