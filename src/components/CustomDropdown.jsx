import React, { useState } from 'react';

const options = {
  geography: ['North America', 'Europe', 'Asia'],
  sector: ['Technology', 'E-commerce', 'Finance'],
  type: ['Corporate', 'Acquisition']
};

const CustomDropdown = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (category, value) => {
    onFilterChange(category, value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <input
        type="text"
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        placeholder="Click to filter"
        className="block rounded-sm w-[600px] p-1 pl-6 w-full z-20 font-medium text-gray-900 bg-gray-50 rounded-e-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 text-xs"
      />
      {isOpen && (
        <div className="absolute bg-white shadow-lg rounded p-4 mt-2 w-full">
          <div>
            <h4 className="font-bold">Geography</h4>
            {options.geography.map((geo) => (
              <div
                key={geo}
                className="cursor-pointer hover:bg-gray-200 p-2 rounded"
                onMouseDown={() => handleOptionClick('geography', geo)}
              >
                {geo}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h4 className="font-bold">Sector</h4>
            {options.sector.map((sec) => (
              <div
                key={sec}
                className="cursor-pointer hover:bg-gray-200 p-2 rounded"
                onMouseDown={() => handleOptionClick('sector', sec)}
              >
                {sec}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h4 className="font-bold">Type</h4>
            {options.type.map((type) => (
              <div
                key={type}
                className="cursor-pointer hover:bg-gray-200 p-2 rounded"
                onMouseDown={() => handleOptionClick('type', type)}
              >
                {type}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
