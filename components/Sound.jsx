import sound from "./assets/start.mp3";

function Sound() {
  function play() {
    new Audio(sound).play();
  }
  return play;
}

export default Sound;
