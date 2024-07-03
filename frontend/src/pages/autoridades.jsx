import React, { useEffect, useState } from "react";
import Comentarios from "./comentarios";
import { comentariosData } from "./components/utils/coment";

const Autoridades = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex >= comentariosData.length ? 0 : prevIndex + 1));
    }, 7000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div
      className="flex gap-4 w-[100%] justify-center transition-all duration-500 h-[65vh] overflow-hidden"
      id="autoridades"
    >
      {comentariosData.map((datos, i) => (
        <Comentarios
          key={i}
          index={i}
          datos={datos}
          activeIndex={activeIndex}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Autoridades;
