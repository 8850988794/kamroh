import React from "react";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center">
      <HeroImage />
    </div>
  );
};

export default Hero;
