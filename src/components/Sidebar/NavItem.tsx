import type { NavItem as NavItemData } from "@/data/navigation";
import styles from "./NavItem.module.scss";

interface NavItemProps {
  item: NavItemData;
  isActive: boolean;
  onSelect: () => void;
}

export default function NavItem({ item, isActive, onSelect }: NavItemProps) {
  const rowClass = [styles.row, isActive && styles.active]
    .filter(Boolean)
    .join(" ");

  return (
    <div>
      <div className={rowClass} onClick={onSelect}>
        <span className={styles.dot} />
        {item.label}
      </div>

      {isActive && item.children && (
        <div className={styles.subList}>
          {item.children.map((child) => (
            <div key={child.id} className={styles.subItem}>
              {child.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
