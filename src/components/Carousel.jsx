import React, { useState, useEffect } from 'react';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(600);
  const [gap, setGap] = useState(16);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        setImageWidth(600);
        setGap(16);
      } else if (screenWidth >= 768) {
        setImageWidth(600);
        setGap(16);
      } else {
        setImageWidth(300);
        setGap(16);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getTranslateValue = () => {
    return currentIndex * (imageWidth + gap);
  };

  return (
    <div className="overflow-hidden max-w-7xl">
      <div
        className="flex transition-transform duration-500 "
        style={{ transform: `translateX(-${getTranslateValue()}px)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${index}`}
            className="flex-shrink-0 object-cover"
            style={{
              width: `${imageWidth}px`,
              height: `${(imageWidth / 300) * 223}px`,
              marginRight: `${gap}px`,
            }}
          />
        ))}
      </div>
      <div className="flex justify-center w-[100%] mt-16">
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
