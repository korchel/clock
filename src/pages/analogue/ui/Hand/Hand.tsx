import styles from "./Hand.module.scss";

interface Props {
  angle: number;
  className: string;
  type: "hours" | "minutes" | "seconds";
}

export const Hand = ({ angle, className, type }: Props) => {
  return (
    <div
      className={`${styles.hand} ${styles[type]} ${className}`}
      style={{ transform: "rotate(" + angle + "deg)" }}
    ></div>
  );
};
