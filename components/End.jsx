import sound from "../public/sounds/警告音1.mp3";

const End = () => {
  const Sound = new Audio(sound);
  return Sound.play();
};

export default End;
