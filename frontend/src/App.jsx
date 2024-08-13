import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Foros from "./pages/secciones/foros";
import Documentos from "./pages/secciones/documentos";
import { ROUTES } from "./pages/constants/routes";
import CronogramaDash from "./pages/private/cronograma";
import Login from "./pages/private/login";
import LayoutDashboard from "./pages/private/layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />}>
          <Route index element={<Foros />} />
        </Route>
        <Route path={ROUTES.BASE.LOGIN} element={<Login />} />
        <Route path={ROUTES.DASHBOARD.BASE  } element={<LayoutDashboard />}>
          <Route
            path={ROUTES.DASHBOARD.CRONOGRAMA}
            element={<CronogramaDash />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
