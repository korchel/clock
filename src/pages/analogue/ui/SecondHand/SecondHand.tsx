import styles from "./SecondsHand.module.scss";

interface Props {
  seconds: number;
  className: string;
}

export const SecondHand = ({ seconds, className }: Props) => {
  return (
    <div
      className={`${styles.secondHand} ${className}`}
      style={{ transform: "rotate(" + seconds * 6 + "deg)" }}
    ></div>
  );
};
