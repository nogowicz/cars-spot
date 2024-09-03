import React from 'react';
import Carousel from '../components/Carousel';
import Button from '../components/Button';

export default function GallerySection() {
  const images = [
    'https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://static.cdn.circlesix.co/styles/img_1106_webp/s3/uploads/posts/2018/04/2787e72c27368117876185580bad6a11.jpg.webp?itok=7y37Xr6N',
    'https://www.portaloswiatowy.pl/appFiles/site_8/images/doc/Jsaio5xqrGmO4Il.jpeg',
    'https://img.classistatic.de/api/v1/mo-prod/images/f6/f670ec85-07ad-4e23-8556-db7debfa4cfe?rule=mo-1024.jpg',
  ];

  return (
    <section className="flex flex-col px-5 my-32 xl:px-0">
      <div className="flex flex-col self-center w-full gap-5 my-20 max-w-7xl">
        <div>
          <p className="text-xl font-normal font-robotoCondensed text-primary ">
            Prezentacja firmy
          </p>
          <h2 className="text-3xl font-normal uppercase font-bebas text-secondary">
            Zobacz naszą galerię zdjęć
          </h2>
        </div>
        <div className="flex flex-row gap-10">
          <Button
            type="text"
            className="text-base font-semibold align-middle transition-all duration-300 font-robotoFlex text-primary hover:opacity-80"
          >
            Samochody osobowe
          </Button>
          <Button
            type="text"
            className="text-base font-normal text-black align-middle transition-all duration-300 font-robotoFlex hover:opacity-80"
          >
            Samochody dostawcze
          </Button>
        </div>
      </div>
      <Carousel images={images} />
    </section>
  );
}
