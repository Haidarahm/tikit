import React from "react";
import "./services.css";

import img41 from "../../assets/services/41.png";
import img42 from "../../assets/services/42.png";
import img43 from "../../assets/services/43.png";
import img44 from "../../assets/services/44.png";

const Details = () => {
  const slides = [img41, img42, img43, img44];

  return (
    <div>
      {slides.map((src, index) => (
        <section
          key={index}
          className="h-screen w-full"
          style={{ backgroundImage: `url(${src})` }}
          aria-label={`Service slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default Details;
