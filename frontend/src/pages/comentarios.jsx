import React from "react";

const Comentarios = ({ datos, className }) => {
  console.log(className);
  const destruct = className.split("-");
  const backgraundColor = `text-${destruct[1]}`;
  return (
    <div
      className={`
      flex bg-white relative md:min-h-64 h-full my-12 md:w-[70%] mx-auto rounded-lg shadow-xl `}
    >
      <img
        src={datos.imagen}
        alt="Img-Foto-Comentario"
        className="absolute md:w-44 md:h-44  w-32 h-32 object-cover md:-top-6 md:-left-6 -top-8  -right-4 rounded-lg flip-2-ver-right-1 shadow-2xl flex  "
      />

      <section className="md:ml-40 p-8  flex flex-col gap-2 slide-down ">
        <h2 className="font-bold text-2xl w-[70%] md:w-full">{datos.nombre}</h2>
        <p className={`${backgraundColor} text-sm w-[70%] md:w-full`}>{datos.cargo}</p>
        <p className={`border-t-2 ${className} pt-2`}>{datos.mensaje}</p>
      </section>
    </div>
  );
};

export default Comentarios;
