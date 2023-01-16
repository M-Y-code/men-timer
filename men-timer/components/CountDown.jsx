import { useCallback, useEffect, useRef, useState } from "react";
import PreButton from "./PreButton";
import RegButton from "./RegButton";

//秒を分に変換
const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes <= 9) minutes = "0" + minutes;
  if (seconds <= 9) seconds = "0" + seconds;
  return minutes + ":" + seconds;
};

export default function CountDown({ Reg, Pre, Tuke, Asa }) {
  const [countdownReg, setCountdownReg] = useState(Reg);
  const [countdownPre, setCountdownPre] = useState(Pre);
  const [countdownTuke, setCountdownTuke] = useState(Tuke);
  const [countdownAsa, setCountdownAsa] = useState(Asa);
  const timerId = useRef();

  const handleClickStartReg = useCallback(() => {
    timerId.current = setInterval(() => {
      setCountdownReg((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  const handleClickStartPre = useCallback(() => {
    timerId.current = setInterval(() => {
      setCountdownPre((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countdownReg <= 0) {
      clearInterval(timerId.current);
      setCountdownReg((prev) => seconds);
    }
  }, [countdownReg]);

  useEffect(() => {
    if (countdownReg <= 0) {
      clearInterval(timerId.current);
      setCountdownPre((prev) => seconds);
    }
  }, [countdownReg]);

  return (
    <>
      <RegButton
        formatTime={formatTime}
        onClick={handleClickStartReg}
        countdownReg={countdownReg}
      />
      <PreButton
        formatTime={formatTime}
        onClick={handleClickStartPre}
        countdownPre={countdownPre}
      />
    </>
  );
}
