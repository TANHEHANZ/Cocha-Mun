import React from "react";
import { CarouselCustomNavigation } from "./carroucel";
import Cronometro from "./cronometro";
import elemento from "../../assets/elemento.png";

const Heder = () => {
  return (
    <div className="flex flex-col  mt-10 relative ">
      <section className="flex flex-col mt-8 justify-start items-start  ">
        <h1 className="flex text-[2rem] sm:text-[3rem] sm:flex-col font-bold absolute bg-gray-200 pt-4 px-4 rounded-b-xl ml-4 slide-bottom top-5 z-10 ">
          <p className=" flex">
            <strong className="text-customPurpple900 font-semibold">
              Cocha
            </strong>
            <p className="text-customGreen900">M</p>
            <p className="text-customYellow900">U</p>
            <p className="text-customRed900">N</p>
          </p>
          <p className="text-[0.5rem] sm:text-[0.75rem] md:text-[1rem]  font-normal text-customBlue900 absolute top-2 ">
            Modelo de Naciones Unidas
          </p>
        </h1>
        <Cronometro />
      </section>

      <CarouselCustomNavigation />
    </div>
  );
};

export default Heder;
