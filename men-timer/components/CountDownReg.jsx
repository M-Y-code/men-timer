import { useCallback, useEffect, useRef, useState } from "react";
import formatTime from "./FormatTime";
import RegButton from "./RegButton";

export default function CountDown({ seconds }) {
  const [countdownReg, setCountdownReg] = useState(seconds);
  const [showUp, setShowUp] = useState(false);
  const [showStartBtn, setShowStartBtn] = useState(true);
  const [showCountDown, setShowCountdown] = useState(false);
  const [showStopBtn, setShowStopBtn] = useState(false);
  const timerId = useRef();

  const handleClickStartReg = useCallback(() => {
    timerId.current = setInterval(() => {
      setCountdownReg((prev) => prev - 1);
    }, 1000);
    setShowStartBtn((show) => false);
    setShowCountdown((show) => true);
    setShowStopBtn((show) => true);
    return () => clearInterval(timerId.current);
  }, []);

  const handleClickStop = useCallback(() => {
    setShowStartBtn((show) => true);
    setShowCountdown((show) => false);
    setShowStopBtn((show) => false);
    setShowUp((show) => false);
    clearInterval(timerId.current);
    setCountdownReg((prev) => seconds);
  }, []);

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
    </>
  );
}
