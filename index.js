function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}
console.log(getComputerChoice());

function getHumanChoice() {
  return prompt("Choose between rock, paper and scissors");
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toUpperCase();
  console.log(humanChoice);
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

function playGame(playRound) {
  let score = 0;
  if (humanSelection !== computerSelection) {
    return "Congratulations you won!" && score + 1;
  } else {
    return "loser";
  }
}

playGame();
playGame();
playGame();
playGame();
