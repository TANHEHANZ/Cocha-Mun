import React from "react";
import coment1 from "../assets/coment1.png";

const Comentarios = ({ index, activeIndex, handleClick, datos }) => {
  const isVisible = activeIndex === index;
  return (
    <div
      className={`flex relative justify-start items-start transition-all duration-500 ${
        isVisible ? "w-[70%]" : "w-[30%]"
      }`}
    >
      <img
        src={datos.imagen}
        alt="Img-Foto-Comentario"
        className="w-[300px] h-[300px] object-cover rounded-2xl shadow-2xl my-20 cursor-pointer"
        onClick={() => handleClick(index)}
      />
      {isVisible && (
        <section className="shadow-xl h-auto rounded-xl -translate-x-5 overflow-hidden transition-all duration-500 ease-in-out">
          <div className="bg-customPurpple900 p-3 animate-slide-in-left">
            <h2 className="text-[1.5em] text-white">{datos.nombre}</h2>
            <p className="text-[#fff9] text-[.9em]">
            {datos.cargo}
            </p>
          </div>
          <div className="bg-white p-3 text-[.9rem] animate-slide-in-left">
           {datos.mensaje}
          </div>
        </section>
      )}
    </div>
  );
};

export default Comentarios;
