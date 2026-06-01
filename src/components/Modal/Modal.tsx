"use client";

import styles from "./Modal.module.scss";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.close}
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <p className={styles.text}>{children}</p>
      </div>
    </div>
  );
}
