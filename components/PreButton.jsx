import styles from "./Button.module.scss";

const PreButton = (props) => {
  return (
    <>
      <button className={styles.btn} onClick={() => props.onClick()}>
        プレ
      </button>
    </>
  );
};

export default PreButton;
