"use client";

import { useTime } from "@/shared";
import styles from "./AnalogueClock.module.scss";
import { Ball, ClockFace, Hand, Cogwheel17, Cogwheel12 } from "./ui";

export const AnalogueClock = () => {
  const { hours, seconds, minutes } = useTime();

  return (
    <>
      <div className={styles.glass}>
        <ClockFace />
        <Hand angle={+seconds * 6} className={styles.hand} type="seconds" />
        <Hand
          angle={+hours * 30 + +minutes * 0.5}
          className={styles.hand}
          type="hours"
        />
        <Hand angle={+minutes * 6} className={styles.hand} type="minutes" />
      </div>

      <Cogwheel17 className={styles.cog1} />
      <Cogwheel12 className={styles.cog} />
    </>
  );
};
