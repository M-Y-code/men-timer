import styles from "./AsaButton.module.scss";
import sound from "../public/sounds/start2.mp3";

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
