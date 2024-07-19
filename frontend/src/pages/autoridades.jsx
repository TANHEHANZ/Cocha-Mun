import React, { useEffect, useState } from "react";
import Comentarios from "./comentarios";
import { comentariosData } from "./components/utils/coment";
import "tailwindcss/tailwind.css";
import { colors } from "./components/utils/colorRandom";

const Autoridades = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % comentariosData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const borderColorClass = `border-${colors[activeIndex % colors.length]}`;

  return (
    <div
      id="autoridades"
      className="bg-customPurpple900T h-full py-4 w-full flex flex-col gap-4"
    >
      <article className="w-[85vw] mx-auto">
        <h2 className="text-xl font-medium text-white">
          Palabras de las autoridades
        </h2>
        {comentariosData.map(
          (datos, i) =>
            i === activeIndex && (
              <Comentarios
                key={i}
                datos={datos}
                className={borderColorClass}
              />
            )
        )}
      </article>
    </div>
  );
};

export default Autoridades;
