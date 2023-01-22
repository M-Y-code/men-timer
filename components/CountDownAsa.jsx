import { useCallback, useEffect, useRef, useState } from "react";
import formatTime from "./FormatTime";
import AsaButton from "./AsaButton";
import { useShow } from "../hooks/useShow";
import { useAct } from "../hooks/useAct";
import styles from "./CountDown.module.scss";
import Play from "./Play";
import Count60 from "./Count60";
import End from "./End";

export default function CountDownAsa(props) {
  const [countdownAsa, setCountdownAsa] = useState(props.seconds);
  const play = Play;
  const count60 = Count60;
  const end = End;
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
  const timerId = useRef();

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

  const handleClickStartAsa = useCallback(() => {
    timerId.current = setInterval(() => {
      setCountdownAsa((prev) => prev - 1);
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
    setCountdownAsa((prev) => props.seconds);
  }, []);

  const handleClickBari = useCallback(() => {
    setBariBtnAct((BariBtnAct) => true);
    if (KataBtnAct === true) {
      setCountdownAsa((prev) => prev - 20);
      setKataBtnAct((act) => false);
    } else {
      if (FutuuBtnAct === true) {
        setCountdownAsa((prev) => prev - 30);
        setFutuuBtnAct((act) => false);
      } else {
        if (YawaBtnAct === true) {
          setCountdownAsa((prev) => prev - 70);
          setYawaBtnAct((act) => false);
        }
      }
    }
  }, [handleClickShowTimer]);

  const handleClickKata = useCallback(() => {
    setKataBtnAct((prevState) => true);
    if (BariBtnAct === true) {
      setCountdownAsa((prev) => prev + 20);
      setBariBtnAct((act) => false);
    } else {
      if (FutuuBtnAct === true) {
        setCountdownAsa((prev) => prev - 10);
        setFutuuBtnAct((act) => false);
      } else {
        if (YawaBtnAct === true) {
          setCountdownAsa((prev) => prev - 50);
          setYawaBtnAct((act) => false);
        }
      }
    }
  }, [handleClickShowTimer]);

  const handleClickFutuu = useCallback(() => {
    setFutuuBtnAct((act) => true);
    if (BariBtnAct === true) {
      setCountdownAsa((prev) => prev + 30);
      setBariBtnAct((act) => false);
    } else {
      if (KataBtnAct === true) {
        setCountdownAsa((prev) => prev + 10);
        setKataBtnAct((act) => false);
      } else {
        if (YawaBtnAct === true) {
          setCountdownAsa((prev) => prev - 40);
          setYawaBtnAct((act) => false);
        }
      }
    }
  }, [handleClickShowTimer]);

  const handleClickYawa = useCallback(() => {
    Count60Play;
    setYawaBtnAct((act) => true);
    if (BariBtnAct === true) {
      setCountdownAsa((prev) => prev + 70);
      setBariBtnAct((act) => false);
    } else {
      if (KataBtnAct === true) {
        setCountdownAsa((prev) => prev + 50);
        setKataBtnAct((act) => false);
      } else {
        if (FutuuBtnAct === true) {
          setCountdownAsa((prev) => prev + 40);
          setFutuuBtnAct((act) => false);
        }
      }
    }
  }, [handleClickShowTimer]);

  useEffect(() => {
    if (countdownAsa <= 0) {
      clearInterval(timerId.current);
      setShowUp((show) => true);
      setShowCountdown((show) => false);
      setCountdownAsa((prev) => props.seconds);
    }
  }, [countdownAsa]);

  const Count60Play = useEffect(() => {
    if (countdownAsa === 60) {
      setTimeout(count60, 0);
      setTimeout(count60, 2000);
      setTimeout(count60, 4000);
    }
  }, [countdownAsa]);

  useEffect(() => {
    if (countdownAsa === 0) {
      setShowUp((show) => true);
      setShowCountdown((show) => false);
      setTimeout(end, 0);
      setTimeout(end, 3000);
      setTimeout(end, 6000);
    }
  }, [countdownAsa]);

  return (
    <div className={styles.container}>
      {showAsa ? (
        <AsaButton
          onClick={() => {
            handleClickStartAsa();
            handleClickShowTimer();
            play();
          }}
        />
      ) : null}
      <div className={styles.countDownContainer}>
        {showStartBtn ? null : FutuuBtnAct ? (
          <div className={styles.futuuAct}>朝-ふつう</div>
        ) : null}
        {showStartBtn ? null : BariBtnAct ? (
          <div className={styles.bariAct}>朝-バリ</div>
        ) : null}
        {showStartBtn ? null : KataBtnAct ? (
          <div className={styles.kataAct}>朝-かため</div>
        ) : null}
        {showStartBtn ? null : YawaBtnAct ? (
          <div className={styles.yawaAct}>朝-やわめ</div>
        ) : null}
        {showStopBtn ? (
          <button className={styles.stopBtn} onClick={handleClickStop}>
            STOP
          </button>
        ) : null}
        {showCountDown ? (
          <h1 className={styles.countdown}>{formatTime(countdownAsa)}</h1>
        ) : null}
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
