import CountDownReg from "../components/CountDownReg";
import CountDownPre from "../components/CountDownPre";
import CountDownTuke from "../components/CountDownTuke";
import CountDownAsa from "../components/CountDownAsa";
import useBtnShow from "../hooks/useBtnShow";
import styles from "./ShowBtn.module.scss";

const ShowBtn = (props) => {
  const btnShow = useBtnShow();
  return (
    <>
      <div
        className={
          btnShow.showReg ? styles.stopContainer : styles.countDownContainer
        }
      >
        <CountDownReg {...btnShow} seconds={360} />
        <CountDownPre {...btnShow} seconds={210} />
        <CountDownTuke {...btnShow} seconds={450} />
        <CountDownAsa {...btnShow} seconds={50} />
      </div>
    </>
  );
};

export default ShowBtn;
