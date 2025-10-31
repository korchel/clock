import styles from "./ClockFace.module.scss";

export const ClockFace = () => {
  return (
    <>
      {Array.from({ length: 12 }, (_, i) => i + 1).map((digit) => (
        <div
          className={styles.digit}
          style={{ ["--number" as string]: digit }}
          key={digit}
        >
          {digit}
        </div>
      ))}
    </>
  );
};
