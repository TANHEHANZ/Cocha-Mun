import React from "react";
import logoOnu from "../../assets/logo/onu.png";
import logoCocha from "../../assets/logo/cohabamba.png";
import { handleScroll } from "./utils/scroll";

const Nav = () => {
  return (
    <>
      <nav className="flex h-auto justify-center  bg-white items-center font-sans  rounded-xl  overflow-hidden w-full z-50 ">
          <img
            className="h-10 object-cover md:ml-2 xl:ml-12 md:w-auto md:h-20"
            src={logoCocha}
            alt="Logo Cochabamba"
          />
      </nav>
    </>
  );
};

export default Nav;
