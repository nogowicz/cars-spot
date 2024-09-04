import React from 'react';

import Button from '../components/Button';

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center px-5 my-10 xl:px-0 lg:gap-10 lg:my-24">
      <div className="flex flex-col w-full gap-5 max-w-7xl">
        <h1 className="z-[1] font-normal font-bebas text-3xl uppercase  2xl:max-w-[48%] sm:text-7xl sm:leading-[85px] sm:tracking-[-3px]">
          Sprzedajemy samochody z europy
        </h1>
        <p className="leading-6 font-robotoCondensed text-base 2xl:max-w-[23%]">
          Kup komfortowy pojazd, aby każda podróż była wyjątkowym przeżyciem
        </p>
        <div className="flex flex-row gap-10">
          <Button>Zobacz zdjęcia</Button>
          <Button type="secondary">Zadzwoń do nas</Button>
        </div>
      </div>
      <div className="z-[1] relative w-full">
        <img
          className="absolute w-[1064px] top-[50px] right-[-20px] 2xl:top-[-150px] 2xl:right-0 2xl:w-[70%] md:top-[-70px] min-[570px]:top-[0px]
          "
          src={require('../assets/images/cars.png')}
          alt="cars"
        />
        <img
          className="absolute w-[1064px] top-[50px] right-[-20px] 2xl:top-[-150px] 2xl:right-0 2xl:w-[70%]  md:top-[-70px] min-[570px]:top-[0px]
          "
          src={require('../assets/images/shadow.png')}
          alt="cars shadow"
        />
      </div>

      <img
        src={require('../assets/images/path.png')}
        alt="road"
        className="z-[0] absolute hidden w-[40%] opacity-50 2xl:top-[0px] 2xl:right-[100px] xl:top-[0px] xl:right-[0px] xl:w-[33%] lg:top-[0px] lg:right-[0px] lg:block"
      />
    </section>
  );
}
