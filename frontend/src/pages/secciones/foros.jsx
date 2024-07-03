import React, { useState } from "react";
import datosForo from "../components/utils/foros.json";
import img from "../../assets/coment3.jpg";
const Foros = () => {
  const [selectedForo, setSelectedForo] = useState(null);

  const handleRowClick = (foro) => {
    setSelectedForo(selectedForo === foro ? null : foro);
  };

  return (
    <div className="overflow-x-auto w-[100%] m-auto">
      <table className="  bg-white border w-[100%] ">
        <thead className="text-start text-[.9em] h-10 border bg-customRed900 text-white shadow-md">
          <tr className="">
            <th className="font-[100]">N</th>
            <th className="font-[100]">Foro</th>
            <th className="font-[100]">Siglas</th>
            <th className="font-[100]">Tópico</th>
          </tr>
        </thead>
        <tbody>
          {datosForo.map((item) => (
            <React.Fragment key={item.N}>
              <tr
                onClick={() => handleRowClick(item)}
                className="cursor-pointer hover:bg-customSelec border-b-2 "
              >
                <td className="py-2 px-2 text-[.8em] ">{item.N}</td>
                <td className="py-2 px-2 text-[.8em] ">{item.Foro}</td>
                <td className="py-2 px-2 text-[.8em] ">{item.Siglas}</td>
                <td className="py-2 px-2 text-[.8em] ">{item.Tópico}</td>
              </tr>
              {selectedForo === item && (
                <tr className="animacionBottom">
                  <td colSpan="4" className="py-2  border bg-gray-100 slide-down  ">
                    <div className="flex flex-row items-center  p-3 gap-8 justify-start">
                      {img && (
                        <img
                          src={img}
                          alt={item.Foro}
                          className="mt-2 ml-5 w-32 h-32 object-cover rounded-lg"
                        />
                      )}
                      <section className="flex flex-col justify-start items-start">
                        <h2 className="text-lg font-[900] uppercase text-[14px] text-customRed100">
                          {item.Foro}
                        </h2>
                        <p className="text-[.7em] bg-customBlue900 w-auto px-5 py-[.2em] rounded-2xl text-white">
                          {item.Siglas}
                        </p>
                        <p className="text-[.9em]">
                          <strong className="text-customGreen900">
                            Tópico:
                          </strong>{" "}
                          {item.Tópico}
                        </p>
                        <p className="text-[.9em] text-gray-700 my-2">
                          {item.Descripción}
                        </p>
                      </section>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Foros;
