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
      setActiveIndex((prevIndex) => (prevIndex >= comentariosData.length -1?0  : prevIndex + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div
      className="flex gap-4 justify-center transition-all duration-500   md:overflow-y-hidden relative h-full md:h-[400px] overflow-y-hidden"
      id="autoridades"
    >
      {comentariosData.map((datos, i) => (
        <Comentarios
          key={i}
          index={i}
          datos={datos}
          activeIndex={activeIndex}
          handleClick={handleClick}
          className="snap-center"
        />
      ))}
    </div>
  );
};

export default Autoridades;
