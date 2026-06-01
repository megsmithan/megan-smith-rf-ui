"use client";

import { useState } from "react";
import Modal from "@/components/Modal/Modal";
import styles from "./PageHeader.module.scss";

export default function PageHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.identity}>
        <img
          className={styles.logoThumb}
          src="/icons/logo-mountain.png"
          alt="RainFocus Summit"
        />
        <div className={styles.identityText}>
          <h1 className={styles.eventTitle}>RainFocus Summit</h1>
          <span className={styles.eventMeta}>December 15th</span>
          <span className={styles.eventMeta}>Lehi, Utah</span>
        </div>
      </div>
      <button className={styles.editButton} onClick={() => setOpen(true)}>
        Edit event
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        It has keys, but no locks. It has space, but no room. You can enter, but
        can’t go inside. What is it?
      </Modal>
    </header>
  );
}
