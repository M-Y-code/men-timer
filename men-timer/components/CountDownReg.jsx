import { useCallback, useEffect, useRef, useState } from "react";
import formatTime from "./FormatTime";
import RegButton from "./RegButton";
import { useShow } from "../hooks/useShow";
import { useAct } from "../hooks/useAct";
import styles from "./CountDown.module.scss";

export default function CountDownReg(props) {
  const [countdownReg, setCountdownReg] = useState(props.seconds);
  const timerId = useRef();

  const {
    showReg,
    setShowReg,
    showPre,
    setShowPre,
    showTuke,
    setShowTuke,
    showAsa,
    setShowAsa,
  } = props;

  const {
    BariBtnAct,
    setBariBtnAct,
    KataBtnAct,
    setKataBtnAct,
    FutuuBtnAct,
    setFutuuBtnAct,
    YawaBtnAct,
    setYawaBtnAct,
  } = useAct();

  const {
    showUp,
    showStartBtn,
    showCountDown,
    showStopBtn,
    showBariBtn,
    showKataBtn,
    showFutuuBtn,
    showYawaBtn,
    setShowUp,
    setShowStartBtn,
    setShowCountdown,
    setShowStopBtn,
    setShowBariBtn,
    setShowKataBtn,
    setShowFutuuBtn,
    setShowYawaBtn,
  } = useShow();

  const handleClickShowTimer = () => {
    setShowStartBtn((show) => false);
    setShowCountdown((show) => true);
    setShowStopBtn((show) => true);
    setShowBariBtn((show) => true);
    setShowKataBtn((show) => true);
    setShowFutuuBtn((show) => true);
    setShowYawaBtn((show) => true);
    setFutuuBtnAct((prev) => true);
    setShowReg((show) => false);
    setShowPre((show) => false);
    setShowTuke((show) => false);
    setShowAsa((show) => false);
  };

  const handleClickStartReg = useCallback(() => {
    timerId.current = setInterval(() => {
      setCountdownReg((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  const handleClickStop = useCallback(() => {
    setShowStartBtn((show) => true);
    setShowCountdown((show) => false);
    setShowStopBtn((show) => false);
    setShowUp((show) => false);
    setShowBariBtn((show) => false);
    setShowKataBtn((show) => false);
    setShowFutuuBtn((show) => false);
    setShowYawaBtn((show) => false);
    setShowReg((show) => true);
    setShowPre((show) => true);
    setShowTuke((show) => true);
    setShowAsa((show) => true);
    clearInterval(timerId.current);
    setCountdownReg((prev) => props.seconds);
  }, []);

  const handleClickBari = useCallback(() => {
    setBariBtnAct((act) => true);
    if (KataBtnAct === true) {
      setCountdownReg((prev) => prev - 150);
      setKataBtnAct((act) => false);
    } else {
      if (FutuuBtnAct === true) {
        setCountdownReg((prev) => prev - 240);
        setFutuuBtnAct((act) => false);
      } else {
        if (YawaBtnAct === true) {
          setCountdownReg((prev) => prev - 330);
          setYawaBtnAct((act) => false);
        }
      }
    }
  }, [handleClickShowTimer]);

  const handleClickKata = useCallback(() => {
    setKataBtnAct((prevState) => true);
    if (BariBtnAct === true) {
      setCountdownReg((prev) => prev + 150);
      setBariBtnAct((act) => false);
    } else {
      if (FutuuBtnAct === true) {
        setCountdownReg((prev) => prev - 90);
        setFutuuBtnAct((act) => false);
      } else {
        if (YawaBtnAct === true) {
          setCountdownReg((prev) => prev - 180);
          setYawaBtnAct((act) => false);
        }
      }
    }
  }, [handleClickShowTimer]);

  const handleClickFutuu = useCallback(() => {
    setFutuuBtnAct((act) => true);
    if (BariBtnAct === true) {
      setCountdownReg((prev) => prev + 240);
      setBariBtnAct((act) => false);
    } else {
      if (KataBtnAct === true) {
        setCountdownReg((prev) => prev + 90);
        setKataBtnAct((act) => false);
      } else {
        if (YawaBtnAct === true) {
          setCountdownReg((prev) => prev - 90);
          setYawaBtnAct((act) => false);
        }
      }
    }
  }, [handleClickShowTimer]);

  const handleClickYawa = useCallback(() => {
    setYawaBtnAct((act) => true);
    if (BariBtnAct === true) {
      setCountdownReg((prev) => prev + 330);
      setBariBtnAct((act) => false);
    } else {
      if (KataBtnAct === true) {
        setCountdownReg((prev) => prev + 180);
        setKataBtnAct((act) => false);
      } else {
        if (FutuuBtnAct === true) {
          setCountdownReg((prev) => prev + 90);
          setFutuuBtnAct((act) => false);
        }
      }
    }
  }, [handleClickShowTimer]);

  useEffect(() => {
    if (countdownReg <= 0) {
      clearInterval(timerId.current);
      setCountdownReg((prev) => props.seconds);
    }
  }, [countdownReg]);

  useEffect(() => {
    if (countdownReg === 0) {
      setShowUp((show) => true);
      setShowCountdown((show) => false);
    }
  }, [countdownReg]);

  return (
    <div className={styles.container}>
      {showReg ? (
        <RegButton
          onClick={() => {
            handleClickStartReg();
            handleClickShowTimer();
          }}
        />
      ) : null}
      {showStopBtn ? <button onClick={handleClickStop}>STOP</button> : null}
      {showCountDown ? (
        <>
          <h1>{formatTime(countdownReg)}</h1>
          <br />
        </>
      ) : null}
      {showUp ? <h1>UP</h1> : null}
      {showBariBtn ? (
        <button className={styles.katasa} onClick={handleClickBari}>
          バリ
        </button>
      ) : null}
      {showKataBtn ? (
        <button className={styles.katasa} onClick={handleClickKata}>
          かた
        </button>
      ) : null}
      {showFutuuBtn ? (
        <button className={styles.katasa} onClick={handleClickFutuu}>
          ふつう
        </button>
      ) : null}
      {showYawaBtn ? (
        <button className={styles.katasa} onClick={handleClickYawa}>
          やわ
        </button>
      ) : null}
    </div>
  );
}
