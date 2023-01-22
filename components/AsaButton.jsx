import styles from "./AsaButton.module.scss";

const AsaButton = (props) => {
  return (
    <>
      <button className={styles.btn} onClick={() => props.onClick()}>
        朝
      </button>
    </>
  );
};

export default AsaButton;
