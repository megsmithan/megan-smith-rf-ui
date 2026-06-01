import styles from "./IconRail.module.scss";

export default function IconRail() {
  return (
    <aside className={styles.rail}>
      <img className={styles.logo} src="icons/logo-rf.png" alt="RainFocus" />
      <img
        className={styles.appIcon}
        src="icons/logo-mountain.png"
        alt="RainFocus Summit"
      />
      <div className={styles.spacer} />
      <div className={styles.avatar}>MS</div>
    </aside>
  );
}
