import { Digit } from "../../DigitalClock";
import { ClockDigit } from "../ClockDigit/ClockDigit";
import { One } from "../One/One";
import styles from "./Day.module.scss";

interface Props {
  day: string;
  month: string;
}

export const Day = ({ day, month }: Props) => {
  return (
    <div className={styles.date}>
      <ClockDigit
        digit={day.split("")[0] as Digit}
        className={styles.dateDigit}
      />

      <ClockDigit
        digit={day.split("")[1] as Digit}
        className={`${styles.dateDigit} ${styles.d}`}
      />
      <One on={!!month.split("")[0]} className={styles.one} />
      <ClockDigit
        digit={month.split("")[1] as Digit}
        className={`${styles.dateDigit} ${styles.m}`}
      />
    </div>
  );
};
