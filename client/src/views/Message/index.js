import styles from "./message.module.css";

function index() {
  return (
    <div className={styles.messageWrapper}>
      <div className={styles.leftWrapper}></div>
      <div className={styles.rightWrapper}>test</div>
    </div>
  );
}

export default index;
