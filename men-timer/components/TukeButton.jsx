const TukeButton = (props) => {
  return (
    <>
      <button onClick={() => props.onClick()}>つけ</button>
      <div>{props.formatTime(props.countdownTuke)}</div>
    </>
  );
};

export default TukeButton;
