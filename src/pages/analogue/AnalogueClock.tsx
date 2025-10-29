"use client";

import { useTime } from "@/shared";
import styles from "./AnalogueClock.module.scss";
import { HourHand, SecondHand } from "./ui";

export const AnalogueClock = () => {
  const { hours, seconds } = useTime();

  return (
    <>
      <div className={styles.glass}>
        {Array.from({ length: 12 }, (_, i) => i + 1).map((digit) => (
          <div
            className={styles.digit}
            style={{ ["--number" as string]: digit }}
            key={digit}
          >
            {digit}
          </div>
        ))}
        <SecondHand seconds={+seconds} className={styles.hand} />
        <HourHand hours={+hours} className={styles.hand} />
      </div>
      <div className={styles.ball}></div>
    </>
  );
};
