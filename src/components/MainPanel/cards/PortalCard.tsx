import { step3Portal } from "@/data/steps";
import styles from "./Cards.module.scss";

export default function PortalCard() {
  return (
    <div className={`${styles.card} ${styles.portalCard}`}>
      <div className={styles.portalTitleRow}>
        <img
          className={styles.portalIcon}
          src="/icons/computer.png"
          alt=""
          aria-hidden="true"
        />
        <span className={styles.portalTitle}>{step3Portal.title}</span>
      </div>
      <p className={styles.portalBody}>{step3Portal.body}</p>
    </div>
  );
}
