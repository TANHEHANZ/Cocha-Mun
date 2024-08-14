import React, { useMemo } from "react";
import Nav from "./components/nav";
import Heder from "./components/heder";
import Autoridades from "./autoridades";
import Index from "./secciones";
import Footer from "./components/footer";

const Home = () => {
  return (
     <div className="mx-auto overflow-hidden flex flex-col justify-center items-center gap-8 bg-customSelec relative">
      {/* <Nav /> */}
      <div className="w-1/2 bg-customPurpple900 absolute top-0 left-0 h-1/4 -z-10 blur-3xl moving-element" ></div>
      <Heder />
      <Autoridades />
      <Index />
      <Footer />
    </div>
  );
};

export default Home;
