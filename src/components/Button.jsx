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
        return 'z-10 bg-transparent family-roboto text-primary px-6 py-3 rounded-lg border border-primary border-solid hover:opacity-80 cursor-pointer';
      case 'text':
        return 'z-10 bg-transparent family-roboto text-secondary hover:opacity-60 cursor-pointer';
      case 'primary':
      default:
        return 'z-10 bg-primary family-roboto text-white px-6 py-3 rounded-lg hover:opacity-80 cursor-pointer';
    }
  };

  return (
    <button className={`${getClassNames(type)} ${className}`} {...props}>
      {children}
    </button>
  );
}
