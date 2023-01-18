import { useCallback, useEffect, useRef, useState } from "react";
import formatTime from "./FormatTime";
import TukeButton from "./TukeButton";

export default function CountDown({ seconds }) {
  const [countdownTuke, setCountdownTuke] = useState(seconds);
  const [showUp, setShowUp] = useState(false);
  const [showStartBtn, setShowStartBtn] = useState(true);
  const [showCountDown, setShowCountdown] = useState(false);
  const [showStopBtn, setShowStopBtn] = useState(false);
  const timerId = useRef();
  const handleClickStartTuke = useCallback(() => {
    timerId.current = setInterval(() => {
      setCountdownTuke((prev) => prev - 1);
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
    setCountdownTuke((prev) => seconds);
  }, []);

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
      {showStartBtn ? <TukeButton onClick={handleClickStartTuke} /> : null}
      {showStopBtn ? <button onClick={handleClickStop}>STOP</button> : null}
      {showCountDown ? <div>{formatTime(countdownTuke)}</div> : null}
      {showUp ? <div>UP</div> : null}
    </>
  );
}
