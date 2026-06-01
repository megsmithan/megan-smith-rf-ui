import { step1Columns } from "@/data/steps";
import styles from "./Cards.module.scss";

export default function InfoCard() {
  return (
    <div className={`${styles.card} ${styles.infoCard}`}>
      {step1Columns.map((col) => (
        <div key={col.id} className={styles.infoColumn}>
          <span className={styles.infoHeading}>{col.heading}</span>
          <p className={styles.infoBody}>{col.body}</p>
        </div>
      ))}
    </div>
  );
}
