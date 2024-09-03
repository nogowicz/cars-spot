import React from 'react';
import Button from '../components/Button';

export default function HeroSection() {
  return (
    <section className="max-w-7xl w-full flex flex-col self-center gap-10 my-20">
      <h1 className="font-normal font-bebas text-7xl uppercase max-w-[48%]">
        Sprzedajemy samochody z europy
      </h1>
      <p className="font-robotoCondensed text-base max-w-[23%]">
        Kup komfortowy pojazd, aby każda podróż była wyjątkowym przeżyciem
      </p>
      <div className="flex flex-row gap-10">
        <Button>Zobacz zdjęcia</Button>
        <Button type="secondary">Zadzwoń do nas</Button>
      </div>
    </section>
  );
}
