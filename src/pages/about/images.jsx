import React from "react";
import image1 from "../../assets/aboutus/about-1.png";
import image2 from "../../assets/aboutus/about-2.jpg";
import image3 from "../../assets/aboutus/about-3.jpg";

const Images = () => {
  return (
    <div
      data-scroll-section
      className="text-white px-[60px] font-hero-light grid gap-[15px] grid-cols-7 grid-rows-4"
    >
      {/* Image 1 */}
      <div
        className="reveal-img col-span-3 row-span-2"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
      >
        <img
          src={image1}
          alt="image-1"
          className="rounded-[15px] h-full w-full object-cover"
        />
      </div>

      {/* Text 1 with scroll speed */}
      <div
        className="text reveal-text col-span-2 capitalize bg-[#00000019] rounded-[15px] row-span-2 font-light text-[42px] flex justify-center items-center px-[60px]"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        data-scroll-speed="2"
      >
        <h1>
          We have <span className="font-bold">+300</span> satisfied clients
        </h1>
      </div>

      {/* Image 2 */}
      <div
        className="reveal-img col-span-2 row-span-2"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
      >
        <img
          src={image2}
          alt="image-2"
          className="rounded-[15px] h-full w-full object-cover"
        />
      </div>

      {/* Text 2 with slower speed */}
      <div
        className="text reveal-text col-span-2 bg-[#00000019] capitalize rounded-[15px] row-span-2 font-light text-[42px] flex justify-center items-center px-[60px]"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        data-scroll-speed="-1"
      >
        <h1>
          We helped our clients get <span className="font-bold">+100M</span>{" "}
          funding
        </h1>
      </div>

      {/* Image 3 */}
      <div
        className="reveal-img col-span-5 row-span-2"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
      >
        <img
          src={image3}
          alt="image-3"
          className="rounded-[15px] h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Images;
