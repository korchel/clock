import styles from "./ClockDigit.module.scss";
import { type Digit } from "../../DigitalClock";
import clsx from "clsx";

interface Props {
  digit: Digit;
}

export const ClockDigit = ({ digit }: Props) => {
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
    <div className={styles.digit}>
      <svg width="0" height="0" viewBox="0 0 0 0">
        <defs>
          <g id="horizintal">
            <path d="M0 20 L20 40 L180 40 L200 20 L180 0 L20 0 Z"></path>
          </g>
          <g id="vertical">
            <path d="M20 0 L0 20 L0 180 L20 200 L40 180 L40 20 Z"></path>
          </g>
        </defs>
      </svg>
      <svg id="digit" width="160" height="240" viewBox="0 0 260 580">
        <use
          xlinkHref="#horizintal"
          id="a"
          x="30"
          y="50"
          className={clsx({ [styles.on]: positions[digit].includes("a") })}
        ></use>
        <use
          xlinkHref="#vertical"
          id="b"
          x="220"
          y="80"
          className={clsx({ [styles.on]: positions[digit].includes("b") })}
        ></use>
        <use
          xlinkHref="#vertical"
          id="c"
          x="220"
          y="300"
          className={clsx({ [styles.on]: positions[digit].includes("c") })}
        ></use>
        <use
          xlinkHref="#horizintal"
          id="d"
          x="30"
          y="490"
          className={clsx({ [styles.on]: positions[digit].includes("d") })}
        ></use>
        <use
          xlinkHref="#vertical"
          id="e"
          x="0"
          y="300"
          className={clsx({ [styles.on]: positions[digit].includes("e") })}
        ></use>
        <use
          xlinkHref="#vertical"
          id="f"
          x="0"
          y="80"
          className={clsx({ [styles.on]: positions[digit].includes("f") })}
        ></use>
        <use
          xlinkHref="#horizintal"
          id="g"
          x="30"
          y="270"
          className={clsx({ [styles.on]: positions[digit].includes("g") })}
        ></use>
      </svg>
    </div>
  );
};
