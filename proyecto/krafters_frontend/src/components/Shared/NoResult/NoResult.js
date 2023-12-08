import styles from "./NoResult.module.scss";

export function NoResult(props) {
  const { text } = props;
  return (
    <div className={styles.NoResult}>
      <p>{text}</p>
    </div>
  );
}
