import React, { useState } from "react";
import { opciones } from "./utils/options";
import { Link } from "react-router-dom";

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(1);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    setIsOpen(false);
  };

  return (
    <div className="relative  text-[.9em] w-[20em] mb-6">
      <div
        className="bg-customSelec px-6 py-2 cursor-pointer flex justify-start items-center gap-2 rounded-md shadow-lg "
        onClick={toggleDropdown}
      >
        {selectedOption !== null ? (
          <>
            <img
              src={opciones[selectedOption].icon}
              alt={opciones[selectedOption].name}
              width={30}
            />
            {opciones[selectedOption].name}
          </>
        ) : (
          "Seleccionar elemento"
        )}
      </div>
      {isOpen && (
        <div className="absolute px-6 py-2 rounded-md cursor-pointer z-10 bg-white slide-bottom shadow-xl">
          {opciones.map((data, i) => (
            <Link
              to={data.path}
              key={i}
              onClick={() => handleOptionClick(i)}
              className="flex items-center gap-2 p-2 hover:bg-customSelec rounded-md" 
            >
              <img src={data.icon} alt={data.name} width={30} />
              {data.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
