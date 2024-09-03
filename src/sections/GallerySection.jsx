import React from 'react';
import Carousel from '../components/Carousel';

export default function GallerySection() {
  const images = [
    'https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://via.placeholder.com/600x400',
    'https://via.placeholder.com/600x400',
    'https://via.placeholder.com/600x400',
  ];

  return (
    <section className="flex flex-col my-20">
      <div className="max-w-7xl self-center w-full flex flex-col gap-10 my-20">
        <div>
          <p className="font-robotoCondensed text-xl font-normal text-primary ">
            Prezentacja firmy
          </p>
          <h2 className="font-bebas text-3xl uppercase font-normal text-secondary">
            Zobacz naszą galerię zdjęć
          </h2>
        </div>
        <div className="flex flex-row gap-10">
          <div className="font-robotoFlex font-semibold text-primary text-base align-middle">
            Samochody osobowe
          </div>
          <div className="font-robotoFlex font-normal text-black text-base align-middle">
            Samochody dostawcze
          </div>
        </div>
      </div>
      <Carousel images={images} />
    </section>
  );
}
