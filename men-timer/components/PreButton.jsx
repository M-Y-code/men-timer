const PreButton = (props) => {
  return (
    <>
      <button onClick={() => props.onClick()}>プレ</button>
      <div>{props.formatTime(props.countdownPre)}</div>
    </>
  );
};

export default PreButton;
