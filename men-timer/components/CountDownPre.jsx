import { useCallback, useEffect, useRef, useState } from "react";
import formatTime from "./FormatTime";
import PreButton from "./PreButton";
import { useShow } from "../hooks/useShow";
import { useAct } from "../hooks/useAct";
import styles from "./CountDown.module.scss";

export default function CountDown(props) {
  const [countdownPre, setCountdownPre] = useState(props.seconds);
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

  const handleClickStartPre = useCallback(() => {
    timerId.current = setInterval(() => {
      setCountdownPre((prev) => prev - 1);
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
    setCountdownPre((prev) => props.seconds);
  }, []);

  const handleClickBari = useCallback(() => {
    setBariBtnAct((act) => true);
    if (KataBtnAct === true) {
      setCountdownPre((prev) => prev - 120);
      setKataBtnAct((act) => false);
    } else {
      if (FutuuBtnAct === true) {
        setCountdownPre((prev) => prev - 180);
        setFutuuBtnAct((act) => false);
      } else {
        if (YawaBtnAct === true) {
          setCountdownPre((prev) => prev - 240);
          setYawaBtnAct((act) => false);
        }
      }
    }
  }, [handleClickShowTimer]);

  const handleClickKata = useCallback(() => {
    setKataBtnAct((prevState) => true);
    if (BariBtnAct === true) {
      setCountdownPre((prev) => prev + 120);
      setBariBtnAct((act) => false);
    } else {
      if (FutuuBtnAct === true) {
        setCountdownPre((prev) => prev - 60);
        setFutuuBtnAct((act) => false);
      } else {
        if (YawaBtnAct === true) {
          setCountdownPre((prev) => prev - 120);
          setYawaBtnAct((act) => false);
        }
      }
    }
  }, [handleClickShowTimer]);

  const handleClickFutuu = useCallback(() => {
    setFutuuBtnAct((act) => true);
    if (BariBtnAct === true) {
      setCountdownPre((prev) => prev + 180);
      setBariBtnAct((act) => false);
    } else {
      if (KataBtnAct === true) {
        setCountdownPre((prev) => prev + 60);
        setKataBtnAct((act) => false);
      } else {
        if (YawaBtnAct === true) {
          setCountdownPre((prev) => prev - 60);
          setYawaBtnAct((act) => false);
        }
      }
    }
  }, [handleClickShowTimer]);

  const handleClickYawa = useCallback(() => {
    setYawaBtnAct((act) => true);
    if (BariBtnAct === true) {
      setCountdownPre((prev) => prev + 240);
      setBariBtnAct((act) => false);
    } else {
      if (KataBtnAct === true) {
        setCountdownPre((prev) => prev + 120);
        setKataBtnAct((act) => false);
      } else {
        if (FutuuBtnAct === true) {
          setCountdownPre((prev) => prev + 60);
          setFutuuBtnAct((act) => false);
        }
      }
    }
  }, [handleClickShowTimer]);

  useEffect(() => {
    if (countdownPre <= 0) {
      clearInterval(timerId.current);
      setShowUp((show) => true);
      setShowCountdown((show) => false);
      setCountdownPre((prev) => props.seconds);
    }
  }, [countdownPre]);

  useEffect(() => {
    if (countdownPre === 0) {
      setShowUp((show) => true);
      setShowCountdown((show) => false);
    }
  }, [countdownPre]);

  return (
    <div className={styles.container}>
      {showPre ? (
        <PreButton
          onClick={() => {
            handleClickStartPre();
            handleClickShowTimer();
          }}
        />
      ) : null}
      {showStopBtn ? <button onClick={handleClickStop}>STOP</button> : null}
      {showCountDown ? (
        <>
          <h1>{formatTime(countdownPre)}</h1>
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
