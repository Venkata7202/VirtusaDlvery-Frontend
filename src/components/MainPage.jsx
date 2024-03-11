import React from "react";
import Logo from "./ui-components/Logo";
import HeroSection from "./sub-components/HeroSection";

function MainPage() {
  return (
    <div>
      <Logo />
      <div className="hero-section-container">
        <HeroSection />
      </div>
    </div>
  );
}

export default MainPage;
