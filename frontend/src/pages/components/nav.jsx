import React from "react";
import logoOnu from "../../assets/logo/onu.png";
import logoCocha from "../../assets/logo/cohabamba.png";
import { handleScroll } from "./utils/scroll";

const Nav = () => {
  return (
    <>
      <nav className="flex h-[8vh] bg-transparent900 justify-start shadow-top-bottom border-[#0002] border-2 items-center font-sans border-1 rounded-xl mt-1 overflow-hidden fixed top-0 w-[85dvw] z-50">
        <section className="flex justify-center items-center gap-6">
          <img
            className="w-16 h-16 object-cover ml-12"
            src={logoCocha}
            alt="Logo Cochabamba"
          />
  
        </section>
        <ul className="flex flex-1 justify-center gap-8 font-medium text-sm">
          <li
            className="relative cursor-pointer transition-all duration-300 enojao"
            onClick={() => handleScroll("autoridades")}
          >
            Autoridades
          </li>
          <li
            className="relative cursor-pointer transition-all duration-300 hover:border-b-2 border-black hover:border-t-2"
            onClick={() => handleScroll("secciones")}
          >
            Secciones
          </li>
          <li
            className="relative cursor-pointer transition-all duration-300 hover:border-b-2 border-black hover:border-t-2"
            onClick={() => handleScroll("Foros")}
          >
            Foros y tópicos
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
