import { useCallback, useEffect, useRef, useState } from "react";
import formatTime from "./FormatTime";
import PreButton from "./PreButton";

export default function CountDown({ seconds }) {
  const [countdownPre, setCountdownPre] = useState(seconds);
  const [showUp, setShowUp] = useState(false);
  const [showStartBtn, setShowStartBtn] = useState(true);
  const [showCountDown, setShowCountdown] = useState(false);
  const [showStopBtn, setShowStopBtn] = useState(false);
  const timerId = useRef();
  const handleClickStartPre = useCallback(() => {
    timerId.current = setInterval(() => {
      setCountdownPre((prev) => prev - 1);
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
    setCountdownPre((prev) => seconds);
  }, []);

  useEffect(() => {
    if (countdownPre <= 0) {
      clearInterval(timerId.current);
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
    </>
  );
}
