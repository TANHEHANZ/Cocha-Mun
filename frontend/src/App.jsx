import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Foros from "./pages/secciones/foros";
import Documentos from "./pages/secciones/documentos";
import Calendario from "./pages/secciones/calendario";
import Cronograma from "./pages/secciones/cronograma";
import Conversatorio from "./pages/secciones/conversatorio";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Foros />} />
          <Route path="/documento" element={<Documentos />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/cronograma" element={<Cronograma />} />
          <Route path="/conversatorio" element={<Conversatorio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
