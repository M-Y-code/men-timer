import { useCallback, useEffect, useRef, useState } from "react";
import formatTime from "./FormatTime";
import TukeButton from "./TukeButton";
import { useShow } from "../hooks/useShow";
import { useAct } from "../hooks/useAct";

export default function CountDown({ seconds }) {
  const [countdownTuke, setCountdownTuke] = useState(seconds);
  const timerId = useRef();

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
  };

  const handleClickStartTuke = useCallback(() => {
    timerId.current = setInterval(() => {
      setCountdownTuke((prev) => prev - 1);
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
    clearInterval(timerId.current);
    setCountdownTuke((prev) => seconds);
  }, []);

  const handleClickBari = useCallback(() => {
    setBariBtnAct((act) => true);
    if (KataBtnAct === true) {
      setCountdownTuke((prev) => prev - 120);
      setKataBtnAct((act) => false);
    } else {
      if (FutuuBtnAct === true) {
        setCountdownTuke((prev) => prev - 240);
        setFutuuBtnAct((act) => false);
      } else {
        if (YawaBtnAct === true) {
          setCountdownTuke((prev) => prev - 360);
          setYawaBtnAct((act) => false);
        }
      }
    }
  }, [handleClickShowTimer]);

  const handleClickKata = useCallback(() => {
    setKataBtnAct((prevState) => true);
    if (BariBtnAct === true) {
      setCountdownTuke((prev) => prev + 120);
      setBariBtnAct((act) => false);
    } else {
      if (FutuuBtnAct === true) {
        setCountdownTuke((prev) => prev - 120);
        setFutuuBtnAct((act) => false);
      } else {
        if (YawaBtnAct === true) {
          setCountdownTuke((prev) => prev - 240);
          setYawaBtnAct((act) => false);
        }
      }
    }
  }, [handleClickShowTimer]);

  const handleClickFutuu = useCallback(() => {
    setFutuuBtnAct((act) => true);
    if (BariBtnAct === true) {
      setCountdownTuke((prev) => prev + 240);
      setBariBtnAct((act) => false);
    } else {
      if (KataBtnAct === true) {
        setCountdownTuke((prev) => prev + 120);
        setKataBtnAct((act) => false);
      } else {
        if (YawaBtnAct === true) {
          setCountdownTuke((prev) => prev - 120);
          setYawaBtnAct((act) => false);
        }
      }
    }
  }, [handleClickShowTimer]);

  const handleClickYawa = useCallback(() => {
    setYawaBtnAct((act) => true);
    if (BariBtnAct === true) {
      setCountdownTuke((prev) => prev + 360);
      setBariBtnAct((act) => false);
    } else {
      if (KataBtnAct === true) {
        setCountdownTuke((prev) => prev + 240);
        setKataBtnAct((act) => false);
      } else {
        if (FutuuBtnAct === true) {
          setCountdownTuke((prev) => prev + 120);
          setFutuuBtnAct((act) => false);
        }
      }
    }
  }, [handleClickShowTimer]);

  useEffect(() => {
    if (countdownTuke <= 0) {
      clearInterval(timerId.current);
      setCountdownTuke((prev) => seconds);
    }
  }, [countdownTuke]);

  useEffect(() => {
    if (countdownTuke === 0) {
      setShowUp((show) => true);
      setShowCountdown((show) => false);
    }
  }, [countdownTuke]);

  return (
    <>
      {showStartBtn ? (
        <TukeButton
          onClick={() => {
            handleClickStartTuke();
            handleClickShowTimer();
          }}
        />
      ) : null}
      {showStopBtn ? <button onClick={handleClickStop}>STOP</button> : null}
      {showCountDown ? (
        <>
          <h1>{formatTime(countdownTuke)}</h1>
          <br />
        </>
      ) : null}
      {showUp ? <h1>UP</h1> : null}
      {showBariBtn ? <button onClick={handleClickBari}>バリ</button> : null}
      {showKataBtn ? <button onClick={handleClickKata}>かた</button> : null}
      {showFutuuBtn ? <button onClick={handleClickFutuu}>ふつう</button> : null}
      {showYawaBtn ? <button onClick={handleClickYawa}>やわ</button> : null}
    </>
  );
}
