import { useState } from "react";

export const useShow = () => {
  const [showUp, setShowUp] = useState(false);
  const [showStartBtn, setShowStartBtn] = useState(true);
  const [showCountDown, setShowCountdown] = useState(false);
  const [showStopBtn, setShowStopBtn] = useState(false);
  const [showBariBtn, setShowBariBtn] = useState(false);
  const [showKataBtn, setShowKataBtn] = useState(false);
  const [showFutuuBtn, setShowFutuuBtn] = useState(false);
  const [showYawaBtn, setShowYawaBtn] = useState(false);
  return {
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
  };
};
