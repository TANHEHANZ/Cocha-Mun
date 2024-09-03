import React, { useState } from "react";
import { foro } from "../components/utils/data/foros";
import { foroImages } from "../components/utils/forosImg";

const ForosCard = () => {
  const [selectedForo, setSelectedForo] = useState(null);

  const handleClick = (foro) => {
    setSelectedForo(selectedForo === foro ? null : foro);
  };

  return (
    <div className="flex flex-wrap w-full gap-2 overflow-y-scroll h-[85vh] scroll-hidden lg:h-auto">
      {foro.map((foro) => (
        <div
          key={foro.N}
          className={`flex items-center gap-4 border rounded-lg border-gray-500 transition-all duration-300 cursor-pointer overflow-hidden relative group ${
            selectedForo === foro
              ? "w-[100%]"
              : "w-[100%] md:w-[45%] lg:w-[23%]  "
          } hover:bg-gray-700 hover:text-white`}
          onClick={() => handleClick(foro)}
        >
          <img
            src={foroImages[foro.Siglas]}
            alt={foro.Foro}
            className="w-full h-48 object-cover"
          />
          {selectedForo === foro ? (
            <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-black bg-opacity-60 text-white">
              <h4 className="text-xl font-semibold">
                {foro.Siglas} - {foro.Foro}
              </h4>
              <p>
                <strong className="text-customYellow900">Descripción:</strong>{" "}
                {foro.Descripción}
              </p>
            </div>
          ) : (
            <>
              <div
                className={`absolute inset-0 flex justify-center items-center bg-black bg-opacity-45`}
              >
                <p className="text-white text-center text-[14px] font-semibold">
                  {foro.Siglas}
                </p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ForosCard;
