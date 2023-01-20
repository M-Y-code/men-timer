import styles from "./RegButton.module.scss";

const RegButton = (props) => {
  return (
    <>
      <button className={styles.btn} onClick={() => props.onClick()}>
        REG
      </button>
    </>
  );
};

export default RegButton;
