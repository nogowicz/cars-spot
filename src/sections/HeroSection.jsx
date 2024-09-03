import React from 'react';
import Button from '../components/Button';

export default function HeroSection() {
  return (
    <section className="max-w-7xl w-full flex flex-col self-center gap-10 my-20">
      <h1 className="font-normal font-bebas text-7xl uppercase max-w-[48%] tracking-[-3px]">
        Sprzedajemy samochody z europy
      </h1>
      <p className="font-robotoCondensed text-base max-w-[23%]">
        Kup komfortowy pojazd, aby każda podróż była wyjątkowym przeżyciem
      </p>
      <div className="flex flex-row gap-10">
        <Button>Zobacz zdjęcia</Button>
        <Button type="secondary">Zadzwoń do nas</Button>
      </div>
      <img
        className="absolute top-16 right-0 w-[80%] z-[1]"
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
