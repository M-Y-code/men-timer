import { useState } from "react";
const useBtnShow = () => {
  const [showReg, setShowReg] = useState(true);
  const [showPre, setShowPre] = useState(true);
  const [showTuke, setShowTuke] = useState(true);
  const [showAsa, setShowAsa] = useState(true);
  return {
    showReg,
    setShowReg,
    showPre,
    setShowPre,
    showTuke,
    setShowTuke,
    showAsa,
    setShowAsa,
  };
};

export default useBtnShow;
