import { useCallback, useEffect, useRef, useState } from "react";
import AsaButton from "./AsaButton";
import PreButton from "./PreButton";
import RegButton from "./RegButton";
import TukeButton from "./TukeButton";

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

  const handleClickStartTuke = useCallback(() => {
    timerId.current = setInterval(() => {
      setCountdownTuke((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  const handleClickStartAsa = useCallback(() => {
    timerId.current = setInterval(() => {
      setCountdownAsa((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countdownReg <= 0) {
      clearInterval(timerId.current);
      setCountdownReg((prev) => Reg);
    }
  }, [countdownReg]);

  useEffect(() => {
    if (countdownReg <= 0) {
      clearInterval(timerId.current);
      setCountdownPre((prev) => Pre);
    }
  }, [countdownReg]);

  useEffect(() => {
    if (countdownTuke <= 0) {
      clearInterval(timerId.current);
      setCountdownTuke((prev) => Tuke);
    }
  }, [countdownAsa]);

  useEffect(() => {
    if (countdownAsa <= 0) {
      clearInterval(timerId.current);
      setCountdownAsa((prev) => Asa);
    }
  }, [countdownAsa]);

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
      <TukeButton
        formatTime={formatTime}
        onClick={handleClickStartTuke}
        countdownTuke={countdownTuke}
      />
      <AsaButton
        formatTime={formatTime}
        onClick={handleClickStartAsa}
        countdownAsa={countdownAsa}
      />
    </>
  );
}
