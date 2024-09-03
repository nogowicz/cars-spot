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
        return 'z-10 bg-transparent family-roboto text-primary px-[8px] py-[4px]  rounded-lg border border-primary border-solid hover:opacity-80 cursor-pointer sm:px-6 sm:py-3';
      case 'text':
        return 'z-10 bg-transparent family-roboto text-secondary px-[8px] py-[4px]  hover:opacity-60 cursor-pointer sm:px-6 sm:py-3';
      case 'primary':
      default:
        return 'z-10 bg-primary family-roboto text-white px-[8px] py-[4px] rounded-lg hover:opacity-80 cursor-pointer sm:px-6 sm:py-3';
    }
  };

  return (
    <button className={`${getClassNames(type)} ${className}`} {...props}>
      {children}
    </button>
  );
}
