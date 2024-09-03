import React from 'react';
import Button from '../components/Button';
import { FaArrowDown } from 'react-icons/fa';

export default function SEOSection() {
  return (
    <section className="flex flex-col items-center justify-center px-5 bg-secondary xl:px-0">
      <div className="flex flex-col w-full gap-20 my-24 max-w-7xl sm:flex-row">
        <div className="flex flex-col gap-4 sm:max-w-[50%]">
          <h3 className="text-2xl font-normal uppercase font-bebas text-textLight">
            Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit
            nulla commodo.
          </h3>
          <p className="text-sm font-normal font-robotoCondensed text-textLight">
            Mauris varius ispum mauris, rutrum lobortis magne efficitur a. Donec
            egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac
            venenatis eros ipsum ac arcu. Vestibulum et [...]
          </p>
          <div className="inline-flex border-b-2 border-textLight max-w-[75px] py-2 hover:opacity-80 transition-all duration-300">
            <Button
              type="text"
              className="flex flex-row items-center gap-2 text-textLight"
            >
              Rozwiń
              <FaArrowDown />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 smmax-w-[50%]">
          <h3 className="text-2xl font-normal uppercase font-bebas text-textLight">
            Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit
            nulla commodo.
          </h3>
          <p className="text-sm font-normal font-robotoCondensed text-textLight">
            Mauris varius ispum mauris, rutrum lobortis magne efficitur a. Donec
            egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac
            venenatis eros ipsum ac arcu. Vestibulum et [...]
          </p>
          <div className="inline-flex border-b-2 border-textLight max-w-[75px] py-2 hover:opacity-80 transition-all duration-300">
            <Button
              type="text"
              className="flex flex-row items-center gap-2 text-textLight"
            >
              Rozwiń
              <FaArrowDown />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
