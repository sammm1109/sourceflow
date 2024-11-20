import React, { useEffect } from "react";
import styles from "../styles/modal.module.scss";

const Modal = ({ show, onClose, children, title }) => {
  // Focus management when modal is shown
  useEffect(() => {
    if (show) {
      const focusableElements = document.querySelectorAll(
        `.${styles.modalContent} button`
      );
      focusableElements[0]?.focus(); // Focus on the first button or element
    }
  }, [show]);

  if (!show) return null;

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-labelledby="modal-title"
      aria-hidden={!show}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
        role="document">
        <div>
          <h2 id="modal-title">{title || "Popup Modal"}</h2>
          {children}
        </div>
        <button className={styles.button} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
