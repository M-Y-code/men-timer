import { useCallback, useEffect, useRef, useState } from "react";
import formatTime from "./FormatTime";
import RegButton from "./RegButton";
import { useShow } from "../hooks/useShow";
import { useAct } from "../hooks/useAct";
import styles from "./CountDown.module.scss";
import Play from "./Play";
import sound1 from "../public/sounds/メッセージ表示音2.mp3";
import sound2 from "../public/sounds/警告音1.mp3";
import { PrePlayCount60, PrePlayEnd, PlayCount60, PlayEnd } from "./Sounds";

export default function CountDownReg(props) {
  const [countdownReg, setCountdownReg] = useState(props.seconds);
  const timerId = useRef();
  const play = Play;

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
    setBariBtnAct((act) => false);
    setKataBtnAct((act) => false);
    setFutuuBtnAct((act) => true);
    setYawaBtnAct((act) => false);
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
    if (countdownReg === 60) {
      setTimeout(PlayCount60, 0);
      setTimeout(PlayCount60, 2000);
      setTimeout(PlayCount60, 4000);
    }
  }, [countdownReg]);

  useEffect(() => {
    if (countdownReg === 0) {
      setShowUp((show) => true);
      setShowCountdown((show) => false);
      setTimeout(PlayEnd, 0);
      setTimeout(PlayEnd, 3000);
      setTimeout(PlayEnd, 6000);
    }
  }, [countdownReg]);

  return (
    <div className={styles.container}>
      <audio id="count60" preload="auto">
        <source src={sound1} type="audio/mp3"></source>
      </audio>
      <audio id="end" preload="auto">
        <source src={sound2} type="audio/mp3"></source>
      </audio>
      {showReg ? (
        <RegButton
          onClick={() => {
            handleClickStartReg();
            handleClickShowTimer();
            play();
            PrePlayCount60();
            PrePlayEnd();
          }}
        />
      ) : null}
      <div className={styles.countDownContainer}>
        {showStartBtn ? null : FutuuBtnAct ? (
          <div className={styles.futuuAct}>REG-ふつう</div>
        ) : null}
        {showStartBtn ? null : BariBtnAct ? (
          <div className={styles.bariAct}>REG-バリ</div>
        ) : null}
        {showStartBtn ? null : KataBtnAct ? (
          <div className={styles.kataAct}>REG-かため</div>
        ) : null}
        {showStartBtn ? null : YawaBtnAct ? (
          <div className={styles.yawaAct}>REG-やわめ</div>
        ) : null}
        {showStopBtn ? (
          <button className={styles.stopBtn} onClick={handleClickStop}>
            STOP
          </button>
        ) : null}
        {showCountDown ? <h1>{formatTime(countdownReg)}</h1> : null}
        {showUp ? <h1>UP</h1> : null}
        <div className={styles.katasaContainer}>
          {showBariBtn ? (
            <button
              className={styles.bariBtn}
              onClick={() => {
                handleClickBari();
                play();
              }}
            >
              バリ
            </button>
          ) : null}
          {showKataBtn ? (
            <button
              className={styles.kataBtn}
              onClick={() => {
                handleClickKata();
                play();
              }}
            >
              かた
            </button>
          ) : null}
          {showFutuuBtn ? (
            <button
              className={styles.futuuBtn}
              onClick={() => {
                handleClickFutuu();
                play();
              }}
            >
              ふつう
            </button>
          ) : null}
          {showYawaBtn ? (
            <button
              className={styles.yawaBtn}
              onClick={() => {
                handleClickYawa();
                play();
              }}
            >
              やわ
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
