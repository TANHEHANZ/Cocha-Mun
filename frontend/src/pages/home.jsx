// Home Component
import React from "react";
import Nav from "./components/nav";
import Heder from "./components/heder";
import Autoridades from "./autoridades";
import Index from "./secciones";
import Sites from "./sites";
import Footer from "./components/footer";

const Home = () => {
  return (
    <div className="w-[90vw] mx-auto overflow-hidden sm:w-[85vw]">
      <Nav />
      <Heder />
      <Autoridades />
      <Index />
      <Sites />
      <Footer />
    </div>
  );
};

export default Home;
