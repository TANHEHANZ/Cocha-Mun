import React from "react";
import { CarouselCustomNavigation } from "./carroucel";
import Cronometro from "./cronometro";
import elemento from "../../assets/elemento.png";

const Heder = () => {
  return (
    <div className="flex flex-col lg:flex-row  mt-10 relative md:mt-16 md:gap-8">
      <img
        src={elemento}
        alt=""
        className="absolute bottom-[-30vh] w-[10em] sm:w-[15em] md:w-[20em] right-[5vw] md:right-[15vw] lg:right-[30vw] opacity-30 -z-50"
      />
      <section className="flex flex-col my-8 justify-center w-full lg:w-1/2">
        <h1 className="flex text-[2rem] sm:text-[3rem] md:text-[4rem] m-0 p-0 font-bold relative">
          <p className="text-[0.5rem] sm:text-[0.75rem] md:text-[1rem] p-0 m-0 top-[-.5em] text-customBlue900 absolute">
            Modelo de Naciones Unidas
          </p>
          <strong className="text-customPurpple900 font-semibold">
            COCHA
          </strong>
          -<p className="text-customGreen900">M</p>
          <p className="text-customYellow900">U</p>
          <p className="text-customRed900">M</p>
        </h1>
        <Cronometro />
      </section>

      <CarouselCustomNavigation />
    </div>
  );
};

export default Heder;
