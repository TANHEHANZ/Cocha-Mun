import React, { useState } from "react";
import datosForo from "./components/utils/foros.json";
import imgData from "../assets/car1.jpg";
import { handleScroll } from "./components/utils/scroll";

const Sites = () => {
  const [verFoto, setVerFoto] = useState(null);

  return (
    <>
      <h3 className="text-center my-5 text-[1.2em] font-semibold">
        Foros y tópicos
      </h3>
      <section
        id="comites"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {datosForo.map((item, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => {
              setVerFoto({ ...item, imgSrc: imgData });
              handleScroll(item.Foro);
            }}
          >
            <img
              src={imgData}
              alt={`Imagen referente a ${item.sigla}`}
              className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
            />
            <p className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-lg font-bold">{item.Siglas}</span>
              <span className="text-sm">{item.Tópico}</span>
            </p>
          </div>
        ))}
      </section>
      {verFoto && (
        <article
          id={verFoto.Foro}
          className="mt-5 p-4 bg-white rounded-lg shadow-md flex"
        >
          <section className="flex flex-col gap-6 w-1/2 p-6">
            <h4 className="text-center text-[1.1em] font-semibold ">
              {verFoto.Siglas}
            </h4>
            <p className="text-center text-[1em] ">
              <strong>Topico</strong> : {verFoto.Tópico}
            </p>
            <p className=" text-[1em] ">
              <strong>Descripción : </strong>
              {verFoto.Descripción}
            </p>
            <p className=" text-[1em] ">
              <strong>Foro: </strong>
              {verFoto.Foro}
            </p>
          </section>
          <div className="flex justify-center w-[25em]">
            <img
              src={verFoto.imgSrc}
              alt="Foto"
              className=" h-auto rounded-lg  w-full  object-cover "
            />
          </div>
        </article>
      )}
    </>
  );
};

export default Sites;
