import React from 'react';
import Button from '../components/Button';

export default function HeroSection() {
  return (
    <section className="flex flex-col self-center w-full gap-5 px-5 my-10 max-w-7xl xl:px-0 lg:gap-10 lg:my-20">
      <h1 className="font-normal  font-bebas text-3xl uppercase  2xl:max-w-[48%] sm:text-7xl sm:tracking-[-3px]">
        Sprzedajemy samochody z europy
      </h1>
      <p className="font-robotoCondensed text-base 2xl:max-w-[23%]">
        Kup komfortowy pojazd, aby każda podróż była wyjątkowym przeżyciem
      </p>
      <div className="flex flex-row gap-10">
        <Button>Zobacz zdjęcia</Button>
        <Button type="secondary">Zadzwoń do nas</Button>
      </div>
      <img
        className="absolute top-[270px] right-0 w-[100%] z-[1] xl:top-16 lg:top-[130px] md:top-[200px] md:w-[80%] sm:top-[250px] min-[470px]:top-[200px]"
        src={require('../assets/images/cars.png')}
        alt="cars"
      />

      <img
        src={require('../assets/images/path.png')}
        alt="road"
        className="absolute top-[-100px] right-72 w-[33%] opacity-50"
      />
    </section>
  );
}
