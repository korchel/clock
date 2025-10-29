"use client";

import { Day, Week, Time } from "./ui";
import styles from "./DigitalClock.module.scss";
import { useTime } from "@/shared";

export type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

export const DigitalClock = () => {
  const { hours, minutes, seconds } = useTime();
  const date = new Date();
  const weekday = date.getDay();
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  console.log("digital", seconds);
  return (
    <div className={styles.digital}>
      <Week currentDay={weekday} />
      <div>
        <Time hours={hours} minutes={minutes} seconds={seconds} />
        <Day day={day} month={month} />
      </div>
    </div>
  );
};
