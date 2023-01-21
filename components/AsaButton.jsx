import styles from "./AsaButton.module.scss";
import sound from "../public/sounds/start2.mp3";

const AsaButton = (props) => {
  function play() {
    new Audio(sound).play();
  }
  return (
    <>
      <button
        className={styles.btn}
        onClick={() => {
          props.onClick();
          play();
        }}
      >
        朝
      </button>
    </>
  );
};

export default AsaButton;
