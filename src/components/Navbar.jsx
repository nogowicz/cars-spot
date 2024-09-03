import React from 'react';
import { HiOutlineLightningBolt } from 'react-icons/hi';
import Button from './Button';

export default function Navbar() {
  return (
    <nav className="bg-transparent max-w-7xl w-full py-10 font-robotoFlex self-center">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center text-2xl font-bold">
          <HiOutlineLightningBolt
            className="text-primary mr-2"
            strokeWidth={2.5}
            size={28}
          />
          <span className="text-primary">Cars</span>Spot
        </div>
        <div className="flex center items-center gap-10">
          <Button type="text">Galeria zdjęć</Button>
          <Button type="text">FaQ</Button>
        </div>
        <Button>Zadzwoń do nas</Button>
      </div>
    </nav>
  );
}
