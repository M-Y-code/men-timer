import ShowBtn from "../components/ShowBtn";
import styles from "../styles/Index.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.timerContainer}>
        <div className={styles.ShowBtn}>
          <ShowBtn />
        </div>
        <div className={styles.ShowBtn}>
          <ShowBtn />
        </div>
        <div className={styles.ShowBtn}>
          <ShowBtn />
        </div>
        <div className={styles.ShowBtn}>
          <ShowBtn />
        </div>
        <div className={styles.ShowBtn}>
          <ShowBtn />
        </div>
        <div className={styles.ShowBtn}>
          <ShowBtn />
        </div>
      </div>
    </>
  );
}
