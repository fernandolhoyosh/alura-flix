import styles from "./Modal.module.css"

const Modal = () => {
  return (
  <>
  <dialog className={styles.dialogContainer} open>
        <h3 className={styles.title}>EDITAR CARD</h3>
      <form method="dialog">
        <button className={styles.buttonClose}>
            <img src="/icons/x-cancel.png" alt="Icono Cerrar" />
        </button>
      </form>
    </dialog>
  </>
  );
};

export default Modal;
