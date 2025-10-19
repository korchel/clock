import { Dot } from "./Dot/Dot";
import styles from "./Dots.module.scss";

export const Dots = () => {
  return (
    <div className={styles.dots}>
      <Dot className={styles.dot} />
      <Dot className={styles.dot} />
    </div>
  );
};
