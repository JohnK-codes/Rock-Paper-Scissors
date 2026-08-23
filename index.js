function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  return choices[Math.floor(Math.random() * choices.length)];
}
console.log(getComputerChoice());

function getHumanChoice() {
  return prompt("Choose between rock, paper and scissors");
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toUpperCase();
  console.log(humanChoice);
  if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
    return "You won";
  } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
    return "You won";
  } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
    return "You won";
  } else if (humanChoice === computerChoice) {
    return "Draw";
  } else {
    return "Loser";
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
alert(playRound(humanSelection, computerSelection));
