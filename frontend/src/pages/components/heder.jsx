import React from "react";
import { CarouselCustomNavigation } from "./carroucel";
import Cronometro from "./cronometro";
import logoCocha from "../../assets/logo/cohabamba.png";

const Heder = () => {
  return (
    <div className="flex flex-col  relative ">
      <section className="flex flex-col  justify-start items-start  ">
        <h1 className="flex text-[2rem] sm:text-[3rem] sm:flex-col font-bold absolute bg-gray-200 bg-opacity-85 pt-4 px-4 rounded-r-md ml-4 slide-bottom top-40 -left-2 z-10 ">
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
        <img src={logoCocha} alt="" className="fixed z-20 w-28 h-24 object-cover right-4 rounded-md top-2 bg-white bg-opacity-55 p-2 " />
        <Cronometro />
      </section>

      <CarouselCustomNavigation />
    </div>
  );
};

export default Heder;
