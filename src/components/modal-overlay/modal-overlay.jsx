import modalOverlay from "./modal-overlay.module.css";

export const ModalOverlay = ({ onClose }) => {
  return (
  <div className={modalOverlay.overlay} onClick={onClose}></div>
  );
};
