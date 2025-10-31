import { weekDays } from "@/types";
import styles from "./Week.module.scss";
import { Weekday } from "./Weekday/Weekday";

interface Props {
  currentDay: number;
}
export const Week = ({ currentDay }: Props) => {
  console.log("Week rendered");
  return (
    <div className={styles.week}>
      {Object.entries(weekDays).map(([day, number]) => (
        <Weekday key={number} day={day} isCurrent={currentDay === number} />
      ))}
    </div>
  );
};
