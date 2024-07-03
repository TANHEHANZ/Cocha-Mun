import React from "react";
import Select from "../components/select";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <section
      id="secciones"
      className="h-auto flex  items-start relative mb-10 flex-col"
    >
      <Select />
      <Outlet />
    </section>
  );
};

export default Index;
