import React from 'react';
import classNames from 'classnames';

export default function TabButton({ active, children, ...props }) {
  const buttonClass = classNames(
    'font-bold text-base align-middle transition-all duration-300 font-robotoFlex hover:opacity-80',
    {
      'border-b-[1px] text-base border-primary font-semi-bold text-primary':
        active,
      'text-black font-normal': !active,
    }
  );

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}
