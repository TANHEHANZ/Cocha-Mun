import React, { useState } from "react";
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
    link: "", 
  });

  const handleItemClick = (item) => {
    if (item.Component) {
      openModal();
      setSelectComponent({
        component: item.Component,
        color:
          colorsExadecimal[opciones.indexOf(item) % colorsExadecimal.length],
        title: item.name,
        link: "",
      });
    } else if (item.Link) {
      window.open(item.Link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="secciones"
      className="h-auto flex items-center relative flex-col justify-center mx-auto background w-full p-16"
    >
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-full">
        {opciones.map((item, i) => {
          const backgroundColor = colorsExadecimal[i % colorsExadecimal.length];
          return (
            <div
              key={i}
              onClick={() => handleItemClick(item)}
              className="h-44 border flex justify-center items-center cursor-pointer rounded-lg text-white gap-2"
              style={{ backgroundColor }}
            >
              <item.icon />
              <p className="text-lg">{item.name}</p>
            </div>
          );
        })}
      </section>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        color={selectComponent.color}
        title={selectComponent.title}
      >
        {selectComponent.component &&
          React.createElement(selectComponent.component)}
      </Modal>
    </section>
  );
};

export default Index;
