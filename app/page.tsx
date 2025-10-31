import styles from "./page.module.css";
import { AnalogueClock } from "@/clocks/analogue";

export default function Home() {
  return (
    <div className={styles.container}>
      <AnalogueClock />
    </div>
  );
}
