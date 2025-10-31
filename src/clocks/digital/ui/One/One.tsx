import { DigitBar } from "../DigitBar/DigitBar";
import styles from "./One.module.scss";

interface Props {
  on: boolean;
  className: string;
}

export const One = ({ on, className }: Props) => {
  return (
    <div className={className}>
      <svg width="100%" height="100%" viewBox="0 0 260 580">
        <DigitBar x={220} y={80} on={on} />
        <DigitBar x={220} y={300} on={on} />
      </svg>
    </div>
  );
};
