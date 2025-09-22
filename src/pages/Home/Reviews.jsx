import React from "react";
import {
  ThreeDScrollTriggerContainer,
  ThreeDScrollTriggerRow,
} from "../../components/ui/ThreeDScrollTriggerRow";
const Reviews = () => {
  const testimonials = [
    {
      name: "Sophia Martinez",
      company: "Global Enterprises Ltd.",
      avatar: "https://via.placeholder.com/100",
      text: "AtomWallet has completely transformed how we manage international payments. Transactions are fast, secure, and effortless.",
    },
    {
      name: "David Lee",
      company: "TechBridge Solutions",
      avatar: "https://via.placeholder.com/100",
      text: "Sending money to partners abroad has never been this smooth. AtomWallet's real-time tracking gives us complete peace of mind.",
    },
    {
      name: "Amira Hassan",
      company: "FinEdge Capital",
      avatar: "https://via.placeholder.com/100",
      text: "The security features are outstanding. Multi-layer protection ensures our business transactions remain private and protected.",
    },
    {
      name: "Liam Anderson",
      company: "Anderson Trading Co.",
      avatar: "https://via.placeholder.com/100",
      text: "With AtomWallet, I can pay vendors and receive funds globally without worrying about hidden fees. Transparent and reliable!",
    },
    {
      name: "Chen Wei",
      company: "BrightPath Logistics",
      avatar: "https://via.placeholder.com/100",
      text: "The interface is so intuitive. Within minutes, my team was making international payments without any training required.",
    },
  ];
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-16">
      <ThreeDScrollTriggerContainer>
        <ThreeDScrollTriggerRow baseVelocity={5} direction={1}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-4 bg-gray-800 rounded-xl shadow-lg text-white"
              style={{ minWidth: "280px", maxWidth: "320px" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-xs text-gray-400">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </ThreeDScrollTriggerRow>
      </ThreeDScrollTriggerContainer>
      <ThreeDScrollTriggerContainer>
        <ThreeDScrollTriggerRow baseVelocity={5} direction={-1}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-4 bg-gray-800 rounded-xl shadow-lg text-white"
              style={{ minWidth: "280px", maxWidth: "320px" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-xs text-gray-400">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </ThreeDScrollTriggerRow>
      </ThreeDScrollTriggerContainer>
      <ThreeDScrollTriggerContainer>
        <ThreeDScrollTriggerRow baseVelocity={5} direction={1}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-4 bg-gray-800 rounded-xl shadow-lg text-white"
              style={{ minWidth: "280px", maxWidth: "320px" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-xs text-gray-400">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </ThreeDScrollTriggerRow>
      </ThreeDScrollTriggerContainer>
    </div>
  );
};

export default Reviews;
