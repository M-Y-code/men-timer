import { useState } from "react";

export const useAct = () => {
  const [BariBtnAct, setBariBtnAct] = useState(false);
  const [KataBtnAct, setKataBtnAct] = useState(false);
  const [FutuuBtnAct, setFutuuBtnAct] = useState(false);
  const [YawaBtnAct, setYawaBtnAct] = useState(false);
  return {
    BariBtnAct,
    setBariBtnAct,
    KataBtnAct,
    setKataBtnAct,
    FutuuBtnAct,
    setFutuuBtnAct,
    YawaBtnAct,
    setYawaBtnAct,
  };
};
