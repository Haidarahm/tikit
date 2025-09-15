import React from "react";
import Masonry from "../../components/Masonry";

// Import all images from assets/who we are (jpg, jpeg, png, webp)
// Vite will inline URLs for us
const whoWeAreImages = Object.values(
  import.meta.glob("../../assets/who-we-are/*.{jpg,jpeg,png,webp}", {
    eager: true,
    as: "url",
  })
);

// Build items array dynamically from imported images
const items = whoWeAreImages.map((imgUrl, idx) => ({
  id: String(idx + 1),
  img: imgUrl,
  url: "#",
  // Vary heights for a nicer masonry layout
  height: [400, 260, 560, 320, 480, 360][idx % 6],
}));

const AboutUs = () => {
  return (
    <div className="section font-hero-light flex-col mx-auto min-h-screen z-10 w-6/7 my-[100px] ">
      <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover={true}
        hoverScale={0.95}
        blurToFocus={true}
        colorShiftOnHover={false}
      />
    </div>
  );
};

export default AboutUs;
