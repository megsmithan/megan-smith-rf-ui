"use client";

import { useState } from "react";
import IconRail from "@/components/IconRail/IconRail";
import Sidebar from "@/components/Sidebar/Sidebar";
import MainPanel from "@/components/MainPanel/MainPanel";
import styles from "./AppShell.module.scss";

export default function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false);

  const drawerClass = [styles.drawer, menuOpen && styles.drawerOpen]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.shell}>
      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <svg
          className={styles.menuIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      {menuOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div className={drawerClass}>
        <IconRail />
        <Sidebar onClose={() => setMenuOpen(false)} />
      </div>

      <MainPanel />
    </div>
  );
}
