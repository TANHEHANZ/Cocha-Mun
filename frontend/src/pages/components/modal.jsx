import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, closeModal, children, color, title }) => {
  if (!isOpen) return null;
  return createPortal(
    <div className="fixed flex items-center justify-center w-[80vw] md:w-1/2 z-50 right-0 top-0 h-full slide-left shadow-lg  bg-white">
      <div className="bg-transparent p-4 rounded w-full relative flex justify-center  flex-col">
        <nav className="border-b-2 m-4 py-2 border-gray-500">
          <button onClick={closeModal} className=" text-white cursor-pointer w-10 h-10 rounded-full  hover:text-black  absolute -left-4"
          style={{backgroundColor:color}}
          >
            ✖
          </button>
          <h5 className=" font-bold mt-2 text-xl" style={{color:color}}>
            {title && title}
          </h5>
        </nav>
        <section className="h-[88vh]">{children}</section>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
