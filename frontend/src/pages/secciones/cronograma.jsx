import React from "react";
import { cronograma } from "../components/utils/data/cronogram";

const Cronograma = () => {
  return (
    <div className=" flex flex-col gap-4 p-8 h-full overflow-y-auto">
      <h3 className="text-3xl text-center font-bold">
        CRONOGRAMA DE ACTIVIDADES
      </h3>
      {cronograma.dias.map((dia, index) => (
        <div key={index}>
          <h4 className="pb-2">{dia.fecha}</h4>
          <ul>
            {dia.actividades.map((actividad, idx) => (
              <li
                key={idx}
                className="border-l-2 pl-4 flex items-center border-black relative before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-full  before:bg-black before:-left-1 "
              >
                <strong className="w-[18%]">{actividad.hora}:</strong> 
                <p className="w-[73%]">{actividad.evento}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Cronograma;
