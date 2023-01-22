import sound from "../public/sounds/警告音1.mp3";

const End = () => {
  const Sound = new Audio(sound);
  Sound.play();
  Sound.pause();
  Sound.play();
};

export default End;
