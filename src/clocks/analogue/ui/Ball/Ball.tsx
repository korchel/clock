import styles from "./Ball.module.scss";

interface Props {
  color?: "red" | "green" | "white";
}

export const Ball = ({ color = "red" }: Props) => {
  return <div className={`${styles.ball} ${styles[color]}`}></div>;
};
