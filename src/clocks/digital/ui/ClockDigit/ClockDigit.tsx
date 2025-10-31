import styles from "./ClockDigit.module.scss";
import { type Digit } from "../../DigitalClock";
import { DigitBar } from "../DigitBar/DigitBar";

interface Props {
  digit: Digit;
  className: string;
}

export const ClockDigit = ({ digit, className }: Props) => {
  const positions: { [key in Digit]: string } = {
    "0": "abcdef",
    "1": "bc",
    "2": "abdeg",
    "3": "abcdg",
    "4": "bcfg",
    "5": "acdfg",
    "6": "acdefg",
    "7": "abc",
    "8": "abcdefg",
    "9": "abcdfg",
  };

  return (
    <div className={`${styles.digit} ${className}`}>
      <svg id="digit" width="100%" height="100%" viewBox="0 0 260 580">
        <DigitBar
          x={30}
          y={50}
          on={positions[digit].includes("a")}
          orientation="h"
        />
        <DigitBar
          x={220}
          y={80}
          on={positions[digit].includes("b")}
          orientation="v"
        />
        <DigitBar
          x={220}
          y={300}
          on={positions[digit].includes("c")}
          orientation="v"
        />
        <DigitBar
          x={30}
          y={490}
          on={positions[digit].includes("d")}
          orientation="h"
        />
        <DigitBar
          x={0}
          y={300}
          on={positions[digit].includes("e")}
          orientation="v"
        />
        <DigitBar
          x={0}
          y={80}
          on={positions[digit].includes("f")}
          orientation="v"
        />
        <DigitBar
          x={30}
          y={270}
          on={positions[digit].includes("g")}
          orientation="h"
        />
      </svg>
    </div>
  );
};
