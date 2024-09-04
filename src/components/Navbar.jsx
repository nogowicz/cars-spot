import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`relative z-20 self-center w-full py-2 max-w-7xl font-robotoFlex ${
        isOpen ? 'bg-background' : 'bg-transparent'
      }`}
    >
      <div className="flex flex-row items-center justify-between p-5 xl:px-0">
        <img
          src={require('../assets/images/logo.png')}
          alt="logo"
          className="w-40 cursor-pointer "
        />
        <div className="items-center hidden gap-10 md:flex">
          <Button className="font-normal" type="text">
            Galeria zdjęć
          </Button>
          <Button className="font-normal" type="text">
            FaQ
          </Button>
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
