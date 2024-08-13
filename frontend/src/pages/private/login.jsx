import React from "react";
import Input from "../components/input";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";

const Login = () => {
  const redirect = useNavigate();
  const iniciarSecion = () => {
    redirect(ROUTES.DASHBOARD.CRONOGRAMA);
  };
  return (
    <div className=" h-screen w-screen grid place-items-center relative ">
      <div className="cuadrados"></div>
      <div className="cuadrados2"></div>
      <form className=" w-[450px]  h-[450px] shadow-lg border border-gray-300 rounded-xl bg-white p-16 gap-4 flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center font-semibold my-4">
          Inicio de secion
        </h1>
        <Input label="Usuario" />
        <Input label="Constraseña" />
        <Button text="Ingresar" onClick={() => iniciarSecion()} />
      </form>
    </div>
  );
};

export default Login;
