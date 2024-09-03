import React, { useState } from 'react';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-16 transition-transform duration-500 ml-80"
        style={{ transform: `translateX(-${currentIndex * 33}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${index}`}
            className="w-[600px] h-[446px] flex-shrink-0 object-cover"
          />
        ))}
      </div>
      <div className="flex justify-center w-screen mt-16">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 mx-1 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-primary' : 'bg-hint'
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
