import sound from "../public/sounds/メッセージ表示音2.mp3";
const Count60 = () => {
  const Sound = new Audio(sound);
  Sound.muted = true; // ミュート有効
  Sound.play(); // 動画再生
  Sound.pause(); // 動画停止
  Sound.muted = false; // ミュート無効
  Sound.currentTime = 0; // 開始秒数を戻す
  Sound.play();
};

export default Count60;
