import CountDownReg from "../components/CountDownReg";
import CountDownPre from "../components/CountDownPre";
import CountDownTuke from "../components/CountDownTuke";
import CountDownAsa from "../components/CountDownAsa";

export default function Home() {
  return (
    <div>
      <CountDownReg seconds={360} />
      {/* <CountDownPre seconds={210} />
      <CountDownTuke seconds={450} />
      <CountDownAsa seconds={50} /> */}
    </div>
  );
}
