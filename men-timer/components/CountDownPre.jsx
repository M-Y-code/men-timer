import { useCallback, useEffect, useRef, useState } from "react";
import formatTime from "./FormatTime";
import PreButton from "./PreButton";

export default function CountDown({ seconds }) {
  const [countdownPre, setCountdownPre] = useState(seconds);
  const [showUp, setShowUp] = useState(false);
  const [showStartBtn, setShowStartBtn] = useState(true);
  const [showCountDown, setShowCountdown] = useState(false);
  const [showStopBtn, setShowStopBtn] = useState(false);
  const [showBariBtn, setShowBariBtn] = useState(false);
  const [BariBtnAct, setBariBtnAct] = useState(false);
  const [showKataBtn, setShowKataBtn] = useState(false);
  const [KataBtnAct, setKataBtnAct] = useState(false);
  const [showFutuuBtn, setShowFutuuBtn] = useState(false);
  const [FutuuBtnAct, setFutuuBtnAct] = useState(false);
  const [showYawaBtn, setShowYawaBtn] = useState(false);
  const [YawaBtnAct, setYawaBtnAct] = useState(false);

  const timerId = useRef();

  const handleClickStartPre = useCallback(() => {
    setShowStartBtn((show) => false);
    setShowCountdown((show) => true);
    setShowStopBtn((show) => true);
    setShowBariBtn((show) => true);
    setShowKataBtn((show) => true);
    setShowFutuuBtn((show) => true);
    setShowYawaBtn((show) => true);
    setFutuuBtnAct((prev) => true);
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
    clearInterval(timerId.current);
    setCountdownPre((prev) => seconds);
  }, []);

  const handleClickBari = useCallback(() => {
    setBariBtnAct((act) => true);
    if (KataBtnAct === true) {
      setCountdownPre((prev) => prev - 20);
      setKataBtnAct((act) => false);
    } else {
      if (FutuuBtnAct === true) {
        setCountdownPre((prev) => prev - 30);
        setFutuuBtnAct((act) => false);
      } else {
        if (YawaBtnAct === true) {
          setCountdownPre((prev) => prev - 70);
          setYawaBtnAct((act) => false);
        }
      }
    }
  }, [countdownPre]);

  const handleClickKata = useCallback(() => {
    setKataBtnAct((prevState) => true);
    if (BariBtnAct === true) {
      setCountdownPre((prev) => prev + 20);
      setBariBtnAct((act) => false);
    } else {
      if (FutuuBtnAct === true) {
        setCountdownPre((prev) => prev - 10);
        setFutuuBtnAct((act) => false);
      } else {
        if (YawaBtnAct === true) {
          setCountdownPre((prev) => prev - 50);
          setYawaBtnAct((act) => false);
        }
      }
    }
  }, [countdownPre]);

  const handleClickFutuu = useCallback(() => {
    setFutuuBtnAct((act) => true);
    if (BariBtnAct === true) {
      setCountdownPre((prev) => prev + 30);
      setBariBtnAct((act) => false);
    } else {
      if (KataBtnAct === true) {
        setCountdownPre((prev) => prev + 10);
        setKataBtnAct((act) => false);
      } else {
        if (YawaBtnAct === true) {
          setCountdownPre((prev) => prev - 40);
          setYawaBtnAct((act) => false);
        }
      }
    }
  }, [countdownPre]);

  const handleClickYawa = useCallback(() => {
    setYawaBtnAct((act) => true);
    if (BariBtnAct === true) {
      setCountdownPre((prev) => prev + 70);
      setBariBtnAct((act) => false);
    } else {
      if (KataBtnAct === true) {
        setCountdownPre((prev) => prev + 50);
        setKataBtnAct((act) => false);
      } else {
        if (FutuuBtnAct === true) {
          setCountdownPre((prev) => prev + 40);
          setFutuuBtnAct((act) => false);
        }
      }
    }
  }, [countdownPre]);

  useEffect(() => {
    if (countdownPre <= 0) {
      clearInterval(timerId.current);
      setShowUp((show) => true);
      setShowCountdown((show) => false);
      setCountdownPre((prev) => seconds);
    }
  }, [countdownPre]);

  useEffect(() => {
    if (countdownPre === 0) {
      setShowUp((show) => true);
      setShowCountdown((show) => false);
    }
  }, [countdownPre]);

  return (
    <>
      {showStartBtn ? <PreButton onClick={handleClickStartPre} /> : null}
      {showStopBtn ? <button onClick={handleClickStop}>STOP</button> : null}
      {showCountDown ? <div>{formatTime(countdownPre)}</div> : null}
      {showUp ? <div>UP</div> : null}
      {showBariBtn ? <button onClick={handleClickBari}>バリ</button> : null}
      {showKataBtn ? <button onClick={handleClickKata}>かた</button> : null}
      {showFutuuBtn ? <button onClick={handleClickFutuu}>ふつう</button> : null}
      {showYawaBtn ? <button onClick={handleClickYawa}>やわ</button> : null}
    </>
  );
}
