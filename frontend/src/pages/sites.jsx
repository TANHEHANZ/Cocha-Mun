import React from "react";
import onuSite from "../assets/logoSites/onuSite.webp";

const Sites = () => {
  const documentoData = [
    {
      sigla: "UNESCO",
      nombre:
        "Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura",
      file: "https://holis",
      imagen: onuSite,
    },
    {
      sigla: "UNICEF",
      nombre: "Fondo de las Naciones Unidas para la Infancia",
      file: "https://holis",
      imagen: onuSite,
    },
    {
      sigla: "PNUMA",
      nombre: "Programa de las Naciones Unidas para el Medio Ambiente",
      file: "https://holis",
      imagen: onuSite,
    },
    {
      sigla: "OMS",
      nombre: "Organización Mundial de la Salud",
      file: "https://holis",
      imagen: onuSite,
    }
  ];

  return (
    <section id="comites" className="py-8">
      <h5 className="text-2xl font-semibold  text-center mb-8  text-customPurpple100" >Sitios web oficiales</h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {documentoData.map((item, i) => (
          <a key={i} href={item.file} target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden rounded-md shadow-lg block">
            <img
              src={item.imagen}
              alt={`Imagen referente a ${item.sigla}`}
              className="w-full h-48 object-cover transition-transform duration-500 transform group-hover:scale-105"
            />
            <p className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 ">
              <span className="text-xl font-bold">{item.sigla}</span>
              <span className="text-xs">{item.nombre}</span>
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Sites;
