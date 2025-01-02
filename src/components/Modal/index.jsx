import { useContext } from "react";
import { VideosContext } from "../../context/VideosContext";
import FormVideos from "../FormVideos";
import styles from "./Modal.module.css";

const Modal = () => {
  const { openModal, setOpenModal } = useContext(VideosContext);
  return (
    <>
      {openModal && (
        <>
          <div className={styles.overlay}>
          <dialog
            className={styles.dialogContainer}
            open={!!openModal}
            onClose={() => setOpenModal(null)}
          >
            <h3 className={styles.title}>EDITAR CARD</h3>
            <FormVideos colorBorder="#2271D1" />
            <form method="dialog">
              <button className={styles.buttonClose} formMethod="dialog">
                <img src="/icons/x-cancel.png" alt="Icono Cerrar" />
              </button>
            </form>
          </dialog>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
