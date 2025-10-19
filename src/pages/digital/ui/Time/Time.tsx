"use client";

import { ClockDigit, Dots } from "..";
import { Digit } from "../../DigitalClock";
import styles from "./Time.module.scss";

interface Props {
  hours: string;
  minutes: string;
  seconds: string;
}

export const Time = ({ hours, minutes, seconds }: Props) => {
  return (
    <div className={styles.time}>
      <ClockDigit
        digit={hours.split("")[0] as Digit}
        className={styles.timeDigit}
      />
      <ClockDigit
        digit={hours.split("")[1] as Digit}
        className={styles.timeDigit}
      />
      <Dots />
      <ClockDigit
        digit={minutes.split("")[0] as Digit}
        className={styles.timeDigit}
      />
      <ClockDigit
        digit={minutes.split("")[1] as Digit}
        className={styles.timeDigit}
      />
      <Dots />
      <ClockDigit
        digit={seconds.split("")[0] as Digit}
        className={styles.timeDigit}
      />
      <ClockDigit
        digit={seconds.split("")[1] as Digit}
        className={styles.timeDigit}
      />
    </div>
  );
};
