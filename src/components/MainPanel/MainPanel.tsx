import PageHeader from "./PageHeader";
import ModuleSection from "./ModuleSection";
import styles from "./MainPanel.module.scss";

export default function MainPanel() {
  return (
    <main className={styles.main}>
      <PageHeader />

      <div className={styles.guideIntro}>
        <h2 className={styles.guideTitle}>Event setup guide</h2>
        <p className={styles.guideText}>
          See the available list of modules below. We suggest that you start
          with the attendee module.
        </p>
      </div>

      <hr className={styles.divider} />

      <ModuleSection />
    </main>
  );
}
