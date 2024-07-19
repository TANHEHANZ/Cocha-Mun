import React, { useState } from "react";
import forosData from "../components/utils/foros.json";
import img from "../../assets/coment1.png";

const ForosCard = () => {
  const [selectedForo, setSelectedForo] = useState(null);

  const handleClick = (foro) => {
    setSelectedForo(selectedForo === foro ? null : foro);
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 overflow-y-auto h-[90vh] flex-1">
        {forosData.map((foro) => (
          <section
            key={foro.N}
            className={`${
              selectedForo === foro
                ? "col-span-3 md:grid md:grid-cols-3 gap-2 "
                : "col-span-1"
            } flex flex-col relative cursor-pointer `}
            onClick={() => handleClick(foro)}
          >
            <article
              className={`h-44 border flex justify-center items-center rounded-sm text-white relative group transition-transform duration-300 ${
                selectedForo === foro ? "col-span-1" : ""
              }`}
            >
              <img
                src={img}
                alt={foro.Tópico}
                className="absolute w-full h-full object-cover "
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-70"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <p>{foro.Siglas}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p>{foro.Tópico}</p>
              </div>
            </article>
            {selectedForo === foro && (
              <div
                className={`${
                  selectedForo === foro
                    ? "col-span-2 bg-transparent900Black "
                    : ""
                } slide-right text-sm border `}
              >
                <h4 className="text-center  font-medium mb-2 bg-customGreen900 p-2 text-white  ">
                  {foro.Siglas} - {foro.Foro}
                </h4>
                <div className="flex flex-col gap-2 p-2 text-gray-100">
                  <p>
                    <strong className="text-customYellow900">Topico:</strong>{" "}
                    {foro.Tópico}
                  </p>
                  <p>
                    <strong className="text-customYellow900">
                      Descripción:
                    </strong>{" "}
                    {foro.Descripción}
                  </p>
                  <p>
                    <strong className="text-customYellow900">Foro:</strong>{" "}
                    {foro.Foro}
                  </p>
                </div>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default ForosCard;
