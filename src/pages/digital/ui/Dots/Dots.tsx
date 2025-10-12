import { Dot } from "../Dot/Dot";
import styles from "./Dots.module.scss";

export const Dots = () => {
  return (
    <div className={styles.dots}>
      <Dot />
      <Dot />
    </div>
  );
};
