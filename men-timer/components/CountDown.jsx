import { useCallback, useEffect, useRef, useState } from "react";

//秒を分に変換
const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes <= 9) minutes = "0" + minutes;
  if (seconds <= 9) seconds = "0" + seconds;
  return minutes + ":" + seconds;
};

export default function CountDown({ seconds }) {
  const [countdown, setCountdown] = useState(seconds);
  console.log(countdown);
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current);
      setCountdown((prev) => seconds);
    }
  }, [countdown]);

  return <h2>{formatTime(countdown)}</h2>;
}
