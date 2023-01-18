import { useCallback, useEffect, useRef, useState } from "react";
import formatTime from "./FormatTime";
import AsaButton from "./AsaButton";

export default function CountDown({ seconds }) {
  const [countdownAsa, setCountdownAsa] = useState(seconds);
  const [showUp, setShowUp] = useState(false);
  const [showStartBtn, setShowStartBtn] = useState(true);
  const [showCountDown, setShowCountdown] = useState(false);
  const [showStopBtn, setShowStopBtn] = useState(false);

  const timerId = useRef();

  const handleClickStartAsa = useCallback(() => {
    timerId.current = setInterval(() => {
      setCountdownAsa((prev) => prev - 1);
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
    setCountdownAsa((prev) => seconds);
  }, []);

  useEffect(() => {
    if (countdownAsa <= 0) {
      clearInterval(timerId.current);
      setCountdownAsa((prev) => seconds);
    }
  }, [countdownAsa]);

  useEffect(() => {
    if (countdownAsa === 0) {
      setShowUp((show) => true);
      setShowCountdown((show) => false);
    }
  }, [countdownAsa]);

  return (
    <>
      {showStartBtn ? <AsaButton onClick={handleClickStartAsa} /> : null}
      {showStopBtn ? <button onClick={handleClickStop}>STOP</button> : null}
      {showCountDown ? <div>{formatTime(countdownAsa)}</div> : null}
      {showUp ? <div>UP</div> : null}
    </>
  );
}
