import { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

import Button from './Button';

export default function SEOElement({ title, description }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const getTruncatedText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + ' [...]';
  };

  return (
    <div className="flex flex-col gap-4 sm:max-w-[45%]">
      <h3 className="text-2xl font-normal uppercase font-bebas text-textLight">
        {title}
      </h3>
      <p className="text-sm font-normal font-robotoCondensed text-textLight">
        {isCollapsed ? getTruncatedText(description, 186) : description}
      </p>
      <div className="inline-flex border-b-2 border-textLight max-w-[75px] py-2 hover:opacity-80 transition-all duration-300">
        <Button
          type="text"
          className="flex flex-row items-center gap-2 text-textLight"
          onClick={toggleCollapse}
        >
          {isCollapsed ? 'Rozwiń' : 'Zwiń'}
          {isCollapsed ? <FaArrowDown /> : <FaArrowUp />}
        </Button>
      </div>
    </div>
  );
}
