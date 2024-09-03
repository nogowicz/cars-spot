import React from 'react';
import Button from '../components/Button';

export default function Footer() {
  return (
    <footer className="flex items-center justify-center border-t-2 bg-secondary text-textLight border-textLight">
      <div className="flex flex-row items-center self-center justify-between w-full py-10 max-w-7xl font-robotoCondensed">
        <h4 className="text-base font-bold">Cars Spot</h4>
        <Button
          type="text"
          className="text-base font-normal underline transition-all duration-300 text-textLight font-robotoCondense hover:opacity-80"
        >
          Polityka prywatności
        </Button>
      </div>
    </footer>
  );
}
