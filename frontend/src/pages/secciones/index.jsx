import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { opciones } from "../components/utils/options";
import { colorsExadecimal } from "../components/utils/colorRandom";
import Modal from "../components/modal";
import useModal from "../../hook/useModal";

const Index = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [selectComponent, setSelectComponent] = useState({
    component: null,
    color: "",
    title: "",
  });

  const renderComponent = (comp, color, title) => {
    openModal();
    setSelectComponent({ component: comp, color: color, title: title });
  };

  return (
    <section
      id="secciones"
      className="h-auto flex items-center relative mb-10 flex-col justify-center w-[85vw] mx-auto"
    >
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-full">
        {opciones.map((item, i) => {
          const backgroundColor = colorsExadecimal[i % colorsExadecimal.length];
          return (
            <div
              key={i}
              onClick={() =>
                renderComponent(item.Component, backgroundColor, item.name)
              }
              className="h-44 border flex justify-center items-center cursor-pointer rounded-lg text-white gap-2 "
              style={{ backgroundColor }}
            >
              <item.icon  />
              <p className=" text-lg">{item.name}</p>
            </div>
          );
        })}
      </section>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        color={{ backgroundColor: selectComponent.color }}
        title={selectComponent.title}
      >
        {selectComponent.component &&
          React.createElement(selectComponent.component)}
      </Modal>
    </section>
  );
};

export default Index;
