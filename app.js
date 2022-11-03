const player1Button = document.querySelector("#player-one-button");
const player2Button = document.querySelector("#player-two-button");
const resetButton = document.querySelector("#reset-button");
const player1Score = document.querySelector("#player-one-score");
const player2Score = document.querySelector("#player-two-score");
const playingNumber = document.querySelector("#playing-number");
let player1points = 0;
let player2points = 0;

player1Button.addEventListener("click", function () {
  if (player1points < playingNumber.value) {
    player1points++;
    player1Score.innerText = player1points;
  }
});

player2Button.addEventListener("click", function () {
  if (player2points < playingNumber.value) {
    player2points++;
    player2Score.innerText = player2points;
  }
});

resetButton.addEventListener("click", function () {
  player1points = 0;
  player2points = 0;
  player1Score.innerText = 0;
  player2Score.innerText = 0;
});
