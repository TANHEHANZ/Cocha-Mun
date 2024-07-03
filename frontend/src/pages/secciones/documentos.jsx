import React from "react";
import img from "../../assets/coment3.jpg";
import DownloadIcon from "../../assets/icons/descargas.svg";
import { getRandomColor } from "../components/utils/colorRandom";

const Documentos = () => {
  const documentoData = [
    {
      nombre: "Protocolo",
      file: "https://holis",
      imagen: "https://holis",
    },
    {
      nombre: "Ejemplo de Posición Oficial",
      file: "https://holis",
      imagen: "https://holis",
    },
    {
      nombre: "Protocolo",
      file: "https://holis",
      imagen: "https://holis",
    },
    {
      nombre: "Ejemplo de Posición Oficial",
      file: "https://holis",
      imagen: "https://holis",
    },
    {
      nombre: "Protocolo",
      file: "https://holis",
      imagen: "https://holis",
    },
    {
      nombre: "Ejemplo de Posición Oficial",
      file: "https://holis",
      imagen: "https://holis",
    },
  ];
  return (
    <div className="flex gap-4 flex-wrap">
      {documentoData.map((item, i) => (
        <div
          key={i}
          style={{ backgroundColor: getRandomColor() }}
          className="flex justify-between items-center gap-4 rounded-lg w-[25em]"
        >
          {img && (
            <img
              src={img ? img : item.imagen}
              alt="Imagen de documento"
              className="w-[6em] h-[4em] object-cover rounded-md"
            />
          )}
          <p className="text-start">{item.nombre}</p>

          <button>
            <img
              src={DownloadIcon}
              alt="Icono de descarga"
              className="w-8 h-8 mr-5"
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Documentos;
