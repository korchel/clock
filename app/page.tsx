import { DigitalClock } from "@/pages/digital";
import styles from "./page.module.css";
import { AnalogueClock } from "@/pages/analogue";

export default function Home() {
  return (
    <div className={styles.container}>
      <AnalogueClock />
    </div>
  );
}
