import { useCallback, useEffect, useRef, useState } from "react";
import formatTime from "./FormatTime";
import RegButton from "./RegButton";

export default function CountDown({ seconds }) {
  const [countdownReg, setCountdownReg] = useState(seconds);
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

  const handleClickStartReg = useCallback(() => {
    setShowStartBtn((show) => false);
    setShowCountdown((show) => true);
    setShowStopBtn((show) => true);
    setShowBariBtn((show) => true);
    setShowKataBtn((show) => true);
    setShowFutuuBtn((show) => true);
    setShowYawaBtn((show) => true);
    setFutuuBtnAct((prev) => true);
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
    clearInterval(timerId.current);
    setCountdownReg((prev) => seconds);
  }, []);

  const handleClickBari = useCallback(() => {
    setBariBtnAct((act) => true);
    if (KataBtnAct === true) {
      setCountdownReg((prev) => prev - 20);
      setKataBtnAct((act) => false);
    } else {
      if (FutuuBtnAct === true) {
        setCountdownReg((prev) => prev - 30);
        setFutuuBtnAct((act) => false);
      } else {
        if (YawaBtnAct === true) {
          setCountdownReg((prev) => prev - 70);
          setYawaBtnAct((act) => false);
        }
      }
    }
  }, [countdownReg]);

  const handleClickKata = useCallback(() => {
    setKataBtnAct((prevState) => true);
    if (BariBtnAct === true) {
      setCountdownReg((prev) => prev + 20);
      setBariBtnAct((act) => false);
    } else {
      if (FutuuBtnAct === true) {
        setCountdownReg((prev) => prev - 10);
        setFutuuBtnAct((act) => false);
      } else {
        if (YawaBtnAct === true) {
          setCountdownReg((prev) => prev - 50);
          setYawaBtnAct((act) => false);
        }
      }
    }
  }, [countdownReg]);

  const handleClickFutuu = useCallback(() => {
    setFutuuBtnAct((act) => true);
    if (BariBtnAct === true) {
      setCountdownReg((prev) => prev + 30);
      setBariBtnAct((act) => false);
    } else {
      if (KataBtnAct === true) {
        setCountdownReg((prev) => prev + 10);
        setKataBtnAct((act) => false);
      } else {
        if (YawaBtnAct === true) {
          setCountdownReg((prev) => prev - 40);
          setYawaBtnAct((act) => false);
        }
      }
    }
  }, [countdownReg]);

  const handleClickYawa = useCallback(() => {
    setYawaBtnAct((act) => true);
    if (BariBtnAct === true) {
      setCountdownReg((prev) => prev + 70);
      setBariBtnAct((act) => false);
    } else {
      if (KataBtnAct === true) {
        setCountdownReg((prev) => prev + 50);
        setKataBtnAct((act) => false);
      } else {
        if (FutuuBtnAct === true) {
          setCountdownReg((prev) => prev + 40);
          setFutuuBtnAct((act) => false);
        }
      }
    }
  }, [countdownReg]);

  useEffect(() => {
    if (countdownReg <= 0) {
      clearInterval(timerId.current);
      setCountdownReg((prev) => seconds);
    }
  }, [countdownReg]);

  useEffect(() => {
    if (countdownReg === 0) {
      setShowUp((show) => true);
      setShowCountdown((show) => false);
    }
  }, [countdownReg]);

  return (
    <>
      {showStartBtn ? <RegButton onClick={handleClickStartReg} /> : null}
      {showStopBtn ? <button onClick={handleClickStop}>STOP</button> : null}
      {showCountDown ? <div>{formatTime(countdownReg)}</div> : null}
      {showUp ? <div>UP</div> : null}
      {showBariBtn ? <button onClick={handleClickBari}>バリ</button> : null}
      {showKataBtn ? <button onClick={handleClickKata}>かた</button> : null}
      {showFutuuBtn ? <button onClick={handleClickFutuu}>ふつう</button> : null}
      {showYawaBtn ? <button onClick={handleClickYawa}>やわ</button> : null}
    </>
  );
}
