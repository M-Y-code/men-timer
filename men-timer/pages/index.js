import CountDownReg from "../components/CountDownReg";
import CountDownPre from "../components/CountDownPre";
import CountDownTuke from "../components/CountDownTuke";
import CountDownAsa from "../components/CountDownAsa";

export default function Home() {
  return (
    <>
      <div>
        <CountDownReg seconds={360} />
        <hr />
        <CountDownPre seconds={210} />
        <hr />
        <CountDownTuke seconds={450} />
        <hr />
        <CountDownAsa seconds={50} />
      </div>
    </>
  );
}
