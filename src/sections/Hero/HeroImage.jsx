import React from "react";
import { carouselImages } from "../../config/carouselConfig";

const HeroImage = () => {
  return (
    <div className="relative carousel w-full h-screen overflow-hidden">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          id={`slide${index + 1}`}
          className="carousel-item relative w-full h-full"
        >
          <img 
            src={image} 
            className="w-full h-full" 
            alt={`Slide ${index + 1}`} 
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href={`#slide${index === 0 ? carouselImages.length : index}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#slide${index === carouselImages.length - 1 ? 1 : index + 2}`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroImage;
