import React from "react";
import logoCocha from "../../assets/logo/cohabamba.png";

import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

const Footer = () => {
  const CONTACTS = [
    {
      nombre: "Mgr.Blanca A Molina Mejia",
      Teléfono: " +(591) 78362214",
      cargo: "Asesora",
    },
    {
      nombre: "Daniela E. Zabala Quispe",
      Teléfono: " +(591) 79418522",
      cargo: "Secretaria General",
    },
    {
      nombre: "Yasser S. Gil Rios",
      Teléfono: " +(591) 60723443",
      cargo: "Secretario General",
    },
    {
      nombre: "Valeria M. Coca Delgadillo",
      Teléfono: " +(591) 70799745",
      cargo: "Subsecretaria General",
    },
  ];

  return (
    <footer className="w-full bg-customPurpple900T p-8 rounded-t-md relative">
      <div className="w-1/3 bg-customPurpple100 absolute -top-20 left-0 h-[20rem] -z-10 blur-3xl rounded-3xl"></div>

      <div className="w-[85vw] mx-auto grid gap-8 grid-cols-1 md:grid-cols-4 place-items-center">
        <img src={logoCocha} alt="Logo" className="w-32" />
        <section className="grid grid-cols-1 md:grid-cols-4 col-span-3 gap-8 text-gray-300">
          {CONTACTS.map((datosContacto, index) => (
            <div key={index} className="text-center md:text-left">
              <p>{datosContacto.nombre}</p>
              <p>{datosContacto.Teléfono}</p>
              <p>{datosContacto.cargo}</p>
            </div>
          ))}
        </section>
        <div className="flex flex-wrap text-2xl w-full col-span-1 md:col-span-4 justify-center items-center gap-4 mt-4 md:mt-0">
          <p className="text-base text-gray-300 w-full md:w-auto">
            Síguenos en:
          </p>
          <FaFacebookF className="bg-gray-300 rounded-full p-2 w-8 h-8 md:w-10 md:h-10 cursor-pointer" />
          <FaInstagram className="bg-gray-300 rounded-full p-2 w-8 h-8 md:w-10 md:h-10 cursor-pointer" />
          <FaTiktok className="bg-gray-300 rounded-full p-2 w-8 h-8 md:w-10 md:h-10 cursor-pointer" />
        </div>
      </div>
      <div className="w-[85vw] mx-auto mt-8 text-center text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
