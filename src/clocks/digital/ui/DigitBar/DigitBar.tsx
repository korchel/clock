import styles from "./DigitBar.module.scss";

interface Props {
  x: number;
  y: number;
  orientation?: "h" | "v";
  on: boolean;
}

export const DigitBar = ({ orientation = "v", x, y, on }: Props) => {
  return (
    <>
      <g
        transform={`translate(${x},${y})`}
        className={on ? styles.on : styles.off}
      >
        {orientation === "h" && (
          <path d="M0 20 L20 40 L180 40 L200 20 L180 0 L20 0 Z"></path>
        )}
        {orientation === "v" && (
          <path d="M20 0 L0 20 L0 180 L20 200 L40 180 L40 20 Z"></path>
        )}
      </g>
    </>
  );
};
