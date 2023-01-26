const PrePlayCount60 = () => {
  const audio = document.getElementById("count60");
  audio.load();
};

const PrePlayEnd = () => {
  const audio = document.getElementById("end");
  audio.load();
};

const PlayCount60 = () => {
  const audio = document.getElementById("count60");
  audio.play();
};

const PlayEnd = () => {
  const audio = document.getElementById("end");
  audio.play();
};

export { PrePlayCount60, PrePlayEnd, PlayCount60, PlayEnd };
