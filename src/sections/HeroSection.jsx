import React from 'react';
import Button from '../components/Button';

export default function HeroSection() {
  return (
    <section className="flex flex-col self-center w-full gap-5 px-5 my-10 max-w-7xl xl:px-0 lg:gap-10 lg:my-24">
      <h1 className="z-[1] font-normal  font-bebas text-3xl uppercase  2xl:max-w-[48%] sm:text-7xl sm:tracking-[-3px]">
        Sprzedajemy samochody z europy
      </h1>
      <p className="font-robotoCondensed text-base 2xl:max-w-[23%]">
        Kup komfortowy pojazd, aby każda podróż była wyjątkowym przeżyciem
      </p>
      <div className="flex flex-row gap-10">
        <Button>Zobacz zdjęcia</Button>
        <Button type="secondary">Zadzwoń do nas</Button>
      </div>
      <div>
        <img
          className="absolute top-[350px] right-0 w-[90%] z-[1] xl:top-[400px] md:top-[320px] md:w-[70%] sm:top-[400px] min-[752px]:top-[350px] min-[490px]:top-[300px]"
          src={require('../assets/images/cars.png')}
          alt="cars"
        />
        <img
          className="absolute top-[350px] right-0 w-[90%] z-[1] xl:top-[400px] md:top-[320px] md:w-[70%] sm:top-[400px] min-[752px]:top-[350px] min-[490px]:top-[300px]"
          src={require('../assets/images/shadow.png')}
          alt="shadow"
        />
      </div>

      <img
        src={require('../assets/images/path.png')}
        alt="road"
        className="absolute hidden w-[40%] opacity-50 2xl:top-[0px] 2xl:right-[100px] xl:top-[0px] xl:right-[0px] xl:w-[33%] lg:top-[0px] lg:right-[0px] lg:block"
      />
    </section>
  );
}
