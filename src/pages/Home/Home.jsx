import React from "react";
import Hero from "./Hero";
import Numbers from "./Numbers";
import element1 from "../../assets/elements/1.png";
import element2 from "../../assets/elements/2.png";

function Home() {
  return (
    <div className=" relative">
       <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Element 1 - Top Left Corner */}
        <img
          src={element2}
          alt="Decorative element 1"
          className="absolute -top-10 -left-10 w-auto h-auto max-w-[400px] max-h-[400px] float-up-down"
        />
        {/* Element 2 - Top Right Corner */}
        <img
          src={element1}
          alt="Decorative element 2"
          className="absolute bottom-1/2 right-0 w-auto h-auto max-w-[400px] max-h-[400px] float-up-down-delayed"
        />
      </div>
      <Hero />
      <Numbers />
    </div>
  );
}

export default Home;
