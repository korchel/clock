import styles from "./HourHand.module.scss";

interface Props {
  hours: number;
  className: string;
}
export const HourHand = ({ hours, className }: Props) => {
  return (
    <div
      className={`${styles.hourHand} ${className}`}
      style={{ transform: "rotate(" + hours * 30 + "deg)" }}
    ></div>
  );
};
