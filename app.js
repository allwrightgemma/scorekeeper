const player1 = {
  button: document.querySelector("#player-one-button"),
  display: document.querySelector("#player-one-score"),
  score: 0,
  gamesWonDisplay: document.querySelector("#player1-games"),
  gamesWon: 0,
};

const player2 = {
  button: document.querySelector("#player-two-button"),
  display: document.querySelector("#player-two-score"),
  score: 0,
  gamesWonDisplay: document.querySelector("#player2-games"),
  gamesWon: 0,
};

const resetButton = document.querySelector("#reset-button");
const winningScoreSelect = document.querySelector("#playing-number");
const bestOfSelect = document.querySelector("#best-of");

let winningScore = 3;
let isGameOver = false;
let totalGames = 0;

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score++;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("winner");
      opponent.display.classList.add("loser");
      player.button.disabled = true;
      opponent.button.disabled = true;
      player.gamesWon++;
      player.gamesWonDisplay.innerText = player.gamesWon;
      totalGames++;
    }
    player.display.innerText = player.score;
  }
}

player1.button.addEventListener("click", function () {
  updateScore(player1, player2);
});

player2.button.addEventListener("click", function () {
  updateScore(player2, player1);
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

bestOfSelect.addEventListener("change", function () {
  totalGames = parseInt(this.value);
});

resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  for (let player of [player1, player2]) {
    player.score = 0;

    player.display.innerText = 0;
    player.display.classList.remove("winner", "loser");
    player.button.disabled = false;
  }
}
