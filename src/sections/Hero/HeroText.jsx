import React from 'react';

const HeroText = () => {
  return (
    <div className="mb-12">
      <h1 className="text-md md:text-3xl lg:text-5xl text-gray-800">
        Your Next Adventure
        <br />
        Starts With Us
      </h1>
      <div className="mt-4">
        <a href="#products" className="text-lg text-gray-600 hover:underline">
          More Products → 
        </a>
      </div>
    </div>
  );
};

export default HeroText;