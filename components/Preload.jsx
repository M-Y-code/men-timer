import Count60 from "./Count60";
import End from "./End";

const PreLoad = (props) => {
  return (
    <button
      onClick={() => {
        Count60(0, 0);
        End(0, 0);
      }}
    >
      効果音の再生を許可
    </button>
  );
};

export default PreLoad;
