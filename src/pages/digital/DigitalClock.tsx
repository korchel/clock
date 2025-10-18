"use client";

import { ClockDigit, Dots, Week } from "./ui";
import styles from "./DigitalClock.module.scss";
import { useEffect, useState } from "react";

export type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

export const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  // const hours = time.getHours().toString().padStart(2, "0");
  // const minutes = time.getMinutes().toString().padStart(2, "0");
  // const seconds = time.getSeconds().toString().padStart(2, "0");
  const timeString = time.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const [hours, minutes, seconds] = timeString.split(":");
  const day = new Date().getDay();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.digital}>
      <Week currentDay={day} />
      <ClockDigit digit={hours.split("")[0] as Digit} />
      <ClockDigit digit={hours.split("")[1] as Digit} />
      <Dots />
      <ClockDigit digit={minutes.split("")[0] as Digit} />
      <ClockDigit digit={minutes.split("")[1] as Digit} />
      <Dots />
      <ClockDigit digit={seconds.split("")[0] as Digit} />
      <ClockDigit digit={seconds.split("")[1] as Digit} />
    </div>
  );
};
