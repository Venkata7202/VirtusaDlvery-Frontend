import React from "react";

function HeroSection({ children }) {
  return (
    <div className="grid grid-cols-6 gap-3">
      <div className="col-span-4">
        <div>
          <div className="mandali-regular text-color-white hero-section-title">
            We are here to deliver the experience.
          </div>
          <div className="mandali-regular text-color-white hero-section-subtitle">
            The true delivery experience.
          </div>
        </div>
      </div>
      <div className="col-span-2 ">{children}</div>
    </div>
  );
}

export default HeroSection;
