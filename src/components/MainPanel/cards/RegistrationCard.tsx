import type { WorkflowCard } from "@/data/steps";
import styles from "./Cards.module.scss";

interface RegistrationCardProps {
  card: WorkflowCard;
}

export default function RegistrationCard({ card }: RegistrationCardProps) {
  return (
    <div className={`${styles.card} ${styles.workflowCard}`}>
      <div className={styles.workflowTitleRow}>
        <img
          className={styles.workflowIcon}
          src="icons/logic-arrow.png"
          alt=""
          aria-hidden="true"
        />
        <span className={styles.workflowTitle}>{card.title}</span>
      </div>
      <p className={styles.workflowBody}>{card.body}</p>
    </div>
  );
}
