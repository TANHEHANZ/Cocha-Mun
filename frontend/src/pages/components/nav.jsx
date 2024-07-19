import React from "react";
import logoOnu from "../../assets/logo/onu.png";
import logoCocha from "../../assets/logo/cohabamba.png";
import { handleScroll } from "./utils/scroll";

const Nav = () => {
  return (
    <>
      <nav className="flex h-auto bg-transparent900 justify-center shadow-top-bottom border-[#0002] border-2 items-center font-sans border-1 rounded-xl  overflow-hidden fixed top-0 w-[85dvw] z-50 ">
          <img
            className="w-10 h-10 object-cover md:ml-2 xl:ml-12 md:w-auto md:h-16"
            src={logoCocha}
            alt="Logo Cochabamba"
          />
      </nav>
    </>
  );
};

export default Nav;
