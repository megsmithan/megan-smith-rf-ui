"use client";

import { useState } from "react";
import { navItems, activeNavId } from "@/data/navigation";
import NavItem from "./NavItem";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  onClose: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  const [activeId, setActiveId] = useState(activeNavId);

  const [query, setQuery] = useState("");

  return (
    <aside className={styles.sidebar}>
      <button
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Close menu"
      >
        <svg
          className={styles.closeIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="18" y1="6" x2="6" y2="18" />
        </svg>
      </button>

      <div className={styles.titleBlock}>
        <span className={styles.title}>RainFocus Summit</span>
        <span className={styles.subtitle}>Lehi, UT • December 15th</span>
      </div>

      <div className={styles.search}>
        <svg
          className={styles.searchIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="16.5" y1="16.5" x2="21" y2="21" />
        </svg>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            isActive={item.id === activeId}
            onSelect={() => setActiveId(item.id)}
          />
        ))}
      </nav>
    </aside>
  );
}
