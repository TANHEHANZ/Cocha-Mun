import React from "react";
import { useNavigate } from "react-router-dom";
import { opciones } from "../components/utils/options";
import { colorsExadecimal } from "../components/utils/colorRandom";

const Index = () => {
  const navigation = useNavigate();
  return (
    <section
      id="secciones"
      className="h-auto flex items-center relative mb-10 flex-col justify-center w-[85vw] mx-auto"
    >
      <section className="grid grid-cols-3 gap-2 w-full">
        {opciones.map((item, i) => {
          const backgroundColor = colorsExadecimal[i % colorsExadecimal.length];
          return (
            <div
              key={i}
              onClick={() => navigation(item.path)}
              className="h-44 border flex justify-center items-center cursor-pointer rounded-lg text-white "
              style={{ backgroundColor }}
            >
              <img src={item.icon} alt="" />
              <div>{item.name}</div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Index;
