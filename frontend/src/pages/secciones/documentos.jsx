import React from "react";
import DownloadIcon from "../../assets/icons/descargas.svg";
import doc1 from "../../assets/documentos/PROTOCOLO COCHAMUN - 2024..pdf";
import doc2 from "../../assets/documentos/Convocatoria 2024 - CochaMUN.pdf";
import doc3 from "../../assets/documentos/EJEMPLO DE POSICIÓN OFICIAL COCHAMUN 2024. DOCUMENTO FINAL.pdf";
import doc4 from "../../assets/documentos/GUÍA BÁSICA COCHAMUN 2024 OFICIAL.pdf";
import img1 from "../../assets/documentos/1.png";
import img2 from "../../assets/documentos/2.png";
import img3 from "../../assets/documentos/3.png";
import img4 from "../../assets/documentos/4.png";
import { DOWNLOAD, VIEW } from "../components/utils/icons/icon";

const Documentos = () => {
  const documentoData = [
    {
      nombre: "Protocolo CochaMun 2024",
      file: doc1,
      img: img1,
    },
    {
      nombre: "Convocatoria 2024 CochaMun",
      file: doc2,
      img: img2,
    },
    {
      nombre: "Ejemplo de posición oficial cochamun 2024",
      file: doc3,
      img: img3,
    },
    {
      nombre: "Guia básica Cochamun 2024",
      file: doc4,
      img: img4,
    },
  ];

  return (
    <div className="flex gap-4 flex-wrap overflow-hidden">
      {documentoData.map((item, i) => (
        <div
          key={i}
          className="relative group flex flex-col items-center justify-center w-[20em] h-[20rem] border-2 rounded-lg overflow-hidden transition-transform duration-300 ease-in-out"
        >
          <img
            src={item.img}
            alt={item.nombre}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <p className="text-center mb-4">{item.nombre}</p>

            <a href={item.file} target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center items-center">
              <VIEW />
              Previsualizar
            </a>

            <a href={item.file} download className="absolute top-2 right-2 border p-2 hover:bg-customGreen900 rounded-md ">
              <DOWNLOAD />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Documentos;
