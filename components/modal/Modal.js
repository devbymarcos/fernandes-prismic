import React from "react";
import style from "./style.module.css";

const Modal = ({ children, visibility, onClick }) => {
  if (!visibility) return null;
  return (
    <div className={style.modalContainer}>
      <div className={style.modalContent}>
        <p>{children}</p>
        <button onClick={onClick} className={style.btnModal}>
          Ok está visto
        </button>
      </div>
    </div>
  );
};

export default Modal;
