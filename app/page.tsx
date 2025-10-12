import { DigitalClock } from "@/pages/digital";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <DigitalClock />
    </div>
  );
}
