import styles from "./AsaButton.module.scss";

const AsaButton = (props) => {
  return (
    <>
      <button className={styles.btn} onClick={() => props.onClick()}>
        <audio src="../public/sounds/ひらめく2.mp3" />朝
      </button>
    </>
  );
};

export default AsaButton;
