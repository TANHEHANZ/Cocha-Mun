import React from "react";
import Select from "../components/select";
import { Outlet, useNavigate } from "react-router-dom";
import { opciones } from "../components/utils/options";

const Index = () => {
  const navigation = useNavigate();
  return (
    <section
      id="secciones"
      className="h-auto flex  items-start relative mb-10 flex-col"
    >
      {/* <Select /> */}
      <section className="flex justify-center items-center gap-5 w-full my-5 flex-wrap ">
        {opciones.map((item, i) => (
          <div onClick={() => navigation(item.path)} key={i} className="flex justify-center items-center g-2 cursor-pointer shadow-md border border-gray-300 px-5 py-2">
            <img src={item.icon} alt="" />
            <div>{item.name}</div>
          </div>
        ))}
      </section>

      <Outlet />
    </section>
  );
};

export default Index;
