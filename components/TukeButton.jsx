import styles from "./TukeButton.module.scss";

const TukeButton = (props) => {
  return (
    <>
      <button className={styles.btn} onClick={() => props.onClick()}>
        つけ
      </button>
    </>
  );
};

export default TukeButton;
