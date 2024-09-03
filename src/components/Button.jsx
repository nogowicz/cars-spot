import React from 'react';

export default function Button({ children, type = 'primary', ...props }) {
  const getClassNames = (type) => {
    switch (type) {
      case 'secondary':
        return 'bg-transparent family-roboto text-primary px-6 py-3 rounded-lg border border-primary border-solid hover:opacity-80 transition-all duration-300';
      case 'text':
        return 'bg-transparent family-roboto text-secondary hover:opacity-60 transition-all duration-300';
      case 'primary':
      default:
        return 'bg-primary family-roboto text-white px-6 py-3 rounded-lg  hover:opacity-80 transition-all duration-300';
    }
  };

  return (
    <button className={getClassNames(type)} {...props}>
      {children}
    </button>
  );
}
