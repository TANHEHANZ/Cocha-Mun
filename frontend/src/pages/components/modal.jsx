import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed  flex items-center justify-center bg-black bg-opacity-50  w-1/2  z-50 right-0 top-0 h-full slide-left ">
      <div className="bg-white p-4 rounded shadow-lg w-1/2 max-w-lg right-0">
        <button onClick={closeModal} className="absolute top-2 left-2 text-black cursor-pointer ">✖</button>
        {children}
      </div>
    </div>,
    document.body 
  );
};

export default Modal;
