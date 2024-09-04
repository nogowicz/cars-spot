import React from 'react';

export default function Button({
  children,
  type = 'primary',
  className = '',
  ...props
}) {
  const getClassNames = (type) => {
    switch (type) {
      case 'secondary':
        return 'text-base z-10 font-bold bg-transparent family-roboto text-primary px-[8px] py-[4px] rounded-lg border border-primary border-solid hover:opacity-80 cursor-pointer sm:px-6 sm:py-3';
      case 'text':
        return 'text-base z-10 font-bold bg-transparent family-roboto hover:opacity-60 cursor-pointer';
      case 'primary':
      default:
        return 'text-base z-10 font-bold bg-primary family-roboto text-white px-[8px] py-[4px] rounded-lg hover:opacity-80 cursor-pointer sm:px-6 sm:py-3';
    }
  };

  return (
    <button className={`${getClassNames(type)} ${className}`} {...props}>
      {children}
    </button>
  );
}
