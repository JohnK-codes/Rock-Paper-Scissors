function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  return choices[Math.floor(Math.random() * choices.length)];
}
console.log(getComputerChoice());

function getHumanChoice() {
  return prompt("Choose between rock, paper and scissors");
}

function playGame() {
  let computerScore = 0;
  let humanScore = 0;
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();
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

  let round = 1;
  for (; round < 6; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    alert(playRound(humanSelection, computerSelection));
    const result = playRound(humanSelection, computerSelection);
    if (result === "You won") {
      humanScore++;
    } else if (playRound(humanSelection, computerSelection) === "Loser") {
      computerScore++;
    } else if (playRound(humanSelection, computerSelection) === "Draw") {
      humanScore++;
      computerScore++;
      const result = playRound(humanSelection, computerSelection);
    }
  }
}

playGame();
