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
  ];

  return (
    <div className="flex gap-4 flex-wrap overflow-hidden">
      {documentoData.map((item, i) => {
        const borderColor = getRandomColor();
        return (
          <div
            key={i}
            style={{ borderColor }}
            className="flex justify-between items-center gap-4 rounded-lg w-[20em] border-2 h-18 m-auto md:m-0"
          >
            {img && (
              <img
                src={img ? img : item.imagen}
                alt="Imagen de documento"
                className="w-[6em] h-[80px] object-cover rounded-md"
              />
            )}
            <p className="text-start w-[60%]">{item.nombre}</p>

            <button>
              <img
                src={DownloadIcon}
                alt="Icono de descarga"
                style={{ backgroundColor: borderColor }}
                className="w-12 h-[80px] p-2"
              />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Documentos;
