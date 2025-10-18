import clsx from "clsx";
import styles from "./Weekday.module.scss";

interface Props {
  day: string;
  isCurrent: boolean;
}

export const Weekday = ({ day, isCurrent }: Props) => {
  return (
    <div
      className={clsx(styles.weekday, {
        [styles.active]: isCurrent,
      })}
    >
      {day.split("").map((letter, i) => (
        <span key={i}>{letter}</span>
      ))}
    </div>
  );
};
