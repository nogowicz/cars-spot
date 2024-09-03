import React from 'react';
import Button from '../components/Button';
import { FaArrowDown } from 'react-icons/fa';

export default function SEOSection() {
  return (
    <section className="flex flex-col bg-secondary items-center">
      <div className="max-w-7xl self-center w-full flex flex-row gap-20 my-24">
        <div className="flex flex-col gap-4 max-w-[50%]">
          <h3 className="font-bebas text-2xl uppercase font-normal text-textLight">
            Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit
            nulla commodo.
          </h3>
          <p className="font-robotoCondensed text-sm font-normal text-textLight">
            Mauris varius ispum mauris, rutrum lobortis magne efficitur a. Donec
            egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac
            venenatis eros ipsum ac arcu. Vestibulum et [...]
          </p>
          <div className="inline-flex border-b-2 border-textLight max-w-[75px] py-2 hover:opacity-80 transition-all duration-300">
            <Button
              type="text"
              className="text-textLight flex flex-row gap-2 items-center"
            >
              Rozwiń
              <FaArrowDown />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 max-w-[50%]">
          <h3 className="font-bebas text-2xl uppercase font-normal text-textLight">
            Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit
            nulla commodo.
          </h3>
          <p className="font-robotoCondensed text-sm font-normal text-textLight">
            Mauris varius ispum mauris, rutrum lobortis magne efficitur a. Donec
            egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac
            venenatis eros ipsum ac arcu. Vestibulum et [...]
          </p>
          <div className="inline-flex border-b-2 border-textLight max-w-[75px] py-2 hover:opacity-80 transition-all duration-300">
            <Button
              type="text"
              className="text-textLight flex flex-row gap-2 items-center"
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
