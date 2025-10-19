import styles from "./Dot.module.scss";

interface Props {
  className: string;
}

export const Dot = ({ className }: Props) => {
  return <div className={`${styles.dot} ${className}`}></div>;
};
