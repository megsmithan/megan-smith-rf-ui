import { step2Workflows } from "@/data/steps";
import InfoCard from "./cards/InfoCard";
import RegistrationCard from "./cards/RegistrationCard";
import AddCard from "./cards/AddCard";
import PortalCard from "./cards/PortalCard";
import styles from "./ModuleSection.module.scss";

export default function ModuleSection() {
  return (
    <section className={styles.section}>
      <div className={styles.moduleHeading}>
        <img
          className={styles.moduleIcon}
          src="icons/attendee.png"
          alt=""
          aria-hidden="true"
        />
        <span className={styles.moduleTitle}>Attendee</span>
      </div>

      <div className={styles.step}>
        <span className={styles.stepLabel}>
          <strong>Step 1:</strong> Base settings.
        </span>
        <InfoCard />
      </div>

      <div className={styles.step}>
        <span className={styles.stepLabel}>
          <strong>Step 2:</strong> Build registration workflows.
        </span>
        <div className={styles.workflowGrid}>
          {step2Workflows.map((card) => (
            <RegistrationCard key={card.id} card={card} />
          ))}

          <AddCard />
        </div>
      </div>

      <div className={styles.step}>
        <span className={styles.stepLabel}>
          <strong>Step 3:</strong> Design post-registration experiences.
        </span>
        <PortalCard />
      </div>
    </section>
  );
}
