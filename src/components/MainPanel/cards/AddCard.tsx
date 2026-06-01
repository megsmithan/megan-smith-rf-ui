"use client";

import { useState } from "react";
import Modal from "@/components/Modal/Modal";
import styles from "./Cards.module.scss";

export default function AddCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`${styles.card} ${styles.addCard}`}
        onClick={() => setOpen(true)}
      >
        <img
          className={styles.addIcon}
          src="icons/add-circle-outline.png"
          alt=""
          aria-hidden="true"
        />
        <span className={styles.addLabel}>Add Registration Workflow</span>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        A keyboard :)
      </Modal>
    </>
  );
}
