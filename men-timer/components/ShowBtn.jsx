import CountDownReg from "../components/CountDownReg";
import CountDownPre from "../components/CountDownPre";
import CountDownTuke from "../components/CountDownTuke";
import CountDownAsa from "../components/CountDownAsa";
import useBtnShow from "../hooks/useBtnShow";

const ShowBtn = (props) => {
  const btnShow = useBtnShow();
  return (
    <>
      <div>
        <CountDownReg {...btnShow} seconds={360} />
        <CountDownPre {...btnShow} seconds={210} />
        <CountDownTuke {...btnShow} seconds={450} />
        <CountDownAsa {...btnShow} seconds={50} />
      </div>
    </>
  );
};

export default ShowBtn;
