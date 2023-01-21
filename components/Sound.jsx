import sound from "../public/sounds/start.mp3";

function Sound() {
  function play() {
    new Audio(sound).play();
  }
  return play;
}

export default Sound;
