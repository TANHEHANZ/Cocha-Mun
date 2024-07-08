import React from "react";
import coment1 from "../assets/coment1.png";

const Comentarios = ({ index, activeIndex, handleClick, datos }) => {
  const isVisible = activeIndex === index;
  return (
    <div
      className={`flex relative justify-start items-start transition-all duration-500  flex-col md:flex-row  ${
        isVisible ? "md:w-[80vw] w-auto  " : "md:w-[20vw] hidden md:flex "
      }`}
    >
      <img
        src={datos.imagen}
        alt="Img-Foto-Comentario"
        className="md:w-[300px] w-full h-[300px] object-cover rounded-2xl shadow-2xl my-5 md:my-20 cursor-pointer"
        onClick={() => handleClick(index)}
      />
      {isVisible && (
        <section className="shadow-xl h-auto rounded-xl -translate-x-5 md:overflow-hidden transition-all duration-500 ease-in-out md:w-[40em] w-90vw m-auto relative md:relative -bottom-[0] left-[1em]  ">
          <div className="bg-customPurpple900 p-3 animate-slide-in-left w-full">
            <h2 className="text-[1.5em] text-white">{datos.nombre}</h2>
            <p className="text-[#fff9] text-[.9em]">
            {datos.cargo}
            </p>
          </div>
          <div className="bg-white p-3 text-[.9rem] animate-slide-in-left ">
           {datos.mensaje}
          </div>
        </section>
      )}
    </div>
  );
};

export default Comentarios;
