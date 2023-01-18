import CountDownReg from "../components/CountDownReg";
import CountDownPre from "../components/CountDownPre";
import CountDownTuke from "../components/CountDownTuke";
import CountDownAsa from "../components/CountDownAsa";

export default function Home() {
  return (
    <div>
      <CountDownReg seconds={5} />
      <CountDownPre seconds={4} />
      <CountDownTuke seconds={6} />
      <CountDownAsa seconds={10} />
    </div>
  );
}
