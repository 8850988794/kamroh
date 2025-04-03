import React from "react";

const HeroContent = () => {
  return (
    <div className="relative w-full h-full flex items-center px-16">
      <div className="absolute bottom-[10rem] lg:bottom-2 flex flex-col">
        <div className="">
          <div className="flex items-center space-x-2 mb-4 text-gray-700 cursor-pointer">
            <span>Decorative Plant</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        <div className="relative z-10">
          <h1 className="text-[3rem] md:text-3xl lg:text-5xl font-black text-gray-900 leading-tight">
            Your Next Adventure
            <br />
            Starts With Us
          </h1>
        </div>
      </div>

      <div className="absolute bottom-8 right-16 bg-white/20 rounded-full p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroContent;
