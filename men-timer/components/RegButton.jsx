const RegButton = (props) => {
  return (
    <>
      <button onClick={() => props.onClick()}>REG</button>
      <div>{props.formatTime(props.countdownReg)}</div>
    </>
  );
};

export default RegButton;
