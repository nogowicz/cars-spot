import React, { useState } from 'react';
import { HiOutlineLightningBolt } from 'react-icons/hi';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`relative z-20 self-center w-full py-10 max-w-7xl font-robotoFlex ${
        isOpen ? 'bg-background' : 'bg-transparent'
      }`}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center text-2xl font-bold">
          <HiOutlineLightningBolt
            className="mr-2 text-primary"
            strokeWidth={2.5}
            size={28}
          />
          <span className="text-primary">Cars</span>Spot
        </div>
        <div className="items-center hidden gap-10 md:flex">
          <Button type="text">Galeria zdjęć</Button>
          <Button type="text">FaQ</Button>
        </div>
        <Button className="hidden md:block">Zadzwoń do nas</Button>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute left-0 flex flex-col items-center w-full py-5 mt-4 rounded-lg bg-background top-20 md:hidden">
          <Button type="text" className="mb-2">
            Galeria zdjęć
          </Button>
          <Button type="text" className="mb-2">
            FaQ
          </Button>
          <Button>Zadzwoń do nas</Button>
        </div>
      )}
    </nav>
  );
}
