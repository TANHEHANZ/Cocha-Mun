import React from "react";
import cocha from "../../../assets/logo/cohabamba.png";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const Navbar = ({ isNavOpen }) => {
  return (
    <nav
      className={`w-[280px] flex flex-col  justify-center items-center gap-8 shadow-lg z-10 p-8 bg-white  md:relative top-0 left-0 h-full transform ${
        isNavOpen ? "translate-x-0 " : "-translate-x-full"
      } transition-transform  md:translate-x-0 md:static md:h-screen  `}
    >
      <img src={cocha} alt="img" className="justify-self-start w-32" />
      <Link
        to={ROUTES.DASHBOARD.CRONOGRAMA}
        className="p-1 text-customGreen900 w-full   rounded-sm  text-sm"
      >
        Cronograma
      </Link>
      <Link
        to={ROUTES.DASHBOARD.CRONOGRAMA}
        className="p-1 text-customGreen900 w-full  rounded-sm  text-sm"
      >
        Cronograma
      </Link>
    </nav>
  );
};

export default Navbar;
