const AsaButton = (props) => {
  return (
    <>
      <button onClick={() => props.onClick()}>朝</button>
      <div>{props.formatTime(props.countdownAsa)}</div>
    </>
  );
};

export default AsaButton;
