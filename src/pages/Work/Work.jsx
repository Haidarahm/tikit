import React, { useEffect, useRef } from "react";
import hiddenImg from "../../assets/work/hidden.jpg";
import kraveImg from "../../assets/work/krave.jpg";
import porscheImg from "../../assets/work/porsche.jpg";
import rangeRoverImg from "../../assets/work/range-rover.jpg";
import theReveImg from "../../assets/work/the-reve.jpg";
import image1 from "../../assets/images/card-1.jpg";
import image2 from "../../assets/images/card-2.jpg";
import image3 from "../../assets/images/card-3.jpg";

import "./work.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "../../components/SplitText";

gsap.registerPlugin(ScrollTrigger);

const imagesArr = [
  {
    src: hiddenImg,
    title: "Hidden Project",
    subtitle: "A secret creative work",
  },
  {
    src: kraveImg,
    title: "Krave",
    subtitle: "Branding & Identity",
  },
  {
    src: porscheImg,
    title: "Porsche",
    subtitle: "Automotive Campaign",
  },
  {
    src: rangeRoverImg,
    title: "Range Rover",
    subtitle: "Luxury Experience",
  },
  {
    src: theReveImg,
    title: "The Reve",
    subtitle: "Fashion Editorial",
  },
  {
    src: image1,
    title: "Card One",
    subtitle: "UI/UX Design",
  },
  {
    src: image2,
    title: "Card Two",
    subtitle: "Web Development",
  },
  {
    src: image3,
    title: "Card Three",
    subtitle: "Photography",
  },
];

const Work = () => {
  const imagesRef = useRef([]);

  useEffect(() => {
    // Animate images in pairs, sequentially
    for (let i = 0; i < imagesRef.current.length; i += 2) {
      const group = imagesRef.current.slice(i, i + 2);
      if (group.length === 0) continue;

      gsap.fromTo(
        group,
        { height: "10%" },
        {
          height: "100%",
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: group[0],
            start: "top 100%",
            end: "+=95%",
            scrub: true,
            onEnter: () => {
              gsap.to(group, {
                height: "100%",
                duration: 1,
                ease: "none",
              });
            },
          },
        }
      );
    }
  }, []);
const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
  return (
    <div className="work-section font-hero-light flex flex-col h-[calc(100%+40vh)]">
      <div className="h-[75vh] flex flex-col justify-center items-center w-full description text-white mt-[104px]">
        <SplitText
          text="Featured Work"
          className="title font-bold text-[64px] mb-[20px]"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <p className="paragraph font-light text-[32px] w-[900px] text-center leading-[40px]">
          We take a similar approach to design commercial we do impactfully
          approache, over the flowchart of user friendly wireframe.
        </p>
      </div>
      <div className="images grid grid-cols-2 grid-rows-4 gap-4 h-full p-4">
        {imagesArr.map((item, i) => (
          <div
            key={i}
            ref={(el) => (imagesRef.current[i] = el)}
            style={{
              height: "10%",
              width: "100%",
              overflow: "hidden",
            }}
            className="group relative shadow-lg transition duration-300 ease-in-out bg-black rounded-lg"
          >
            <img
              src={item.src}
              alt={item.title}
              className="mb-8"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            {/* Overlay for title, subtitle, and button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-200 text-sm mb-4">{item.subtitle}</p>
              <button className="px-4 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
                View Work
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
