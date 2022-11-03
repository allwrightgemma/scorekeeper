const player1Button = document.querySelector("#player-one-button");
const player2Button = document.querySelector("#player-two-button");
const resetButton = document.querySelector("#reset-button");
const player1Score = document.querySelector("#player-one-score");
const player2Score = document.querySelector("#player-two-score");
const winningScoreSelect = document.querySelector("#playing-number");
let player1points = 0;
let player2points = 0;
let winningScore = 3;
let isGameOver = false;

player1Button.addEventListener("click", function () {
  if (!isGameOver) {
    player1points++;
    if (player1points === winningScore) {
      isGameOver = true;
      player1Score.classList.add("winner");
      player2Score.classList.add("loser");
    }
    player1Score.innerText = player1points;
  }
});

player2Button.addEventListener("click", function () {
  if (!isGameOver) {
    player2points++;
    if (player2points === winningScore) {
      isGameOver = true;
      player2Score.classList.add("winner");
      player1Score.classList.add("loser");
    }
    player2Score.innerText = player2points;
  }
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  player1points = 0;
  player2points = 0;
  player1Score.innerText = 0;
  player2Score.innerText = 0;
  player1Score.classList.remove("winner", "loser");
  player2Score.classList.remove("winner", "loser");
}
