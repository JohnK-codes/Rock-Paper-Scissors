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
if (humanChoice === "ROCK" && computerChoice === "SCISSORS"){
return "You won";
} else if (humanChoice ==="PAPER" && computerChoice === "ROCK"){
return "You won";
} else if (humanChoice === "SCISSORS" && computerChoice === "PAPER"){
return "You won"
} else if (humanChoice === computerChoice){
return "Draw";
}else{
return "Loser";
}

}


function playGame(){
  let humanScore = 0;
  let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
alert(computerSelection);
const result = playRound(humanSelection, computerSelection);
if (result === "You won") {
  humanScore = humanScore + 1;
  alert("Human score: " + humanScore);
} else if (result === "Loser") {
  computerScore = computerScore + 1;
  alert("Computer score: " + computerScore);
}

const humanSelection2 = getHumanChoice();
const computerSelection2 = getComputerChoice();
alert(computerSelection2);
const result2 = playRound(humanSelection2, computerSelection2);
if (result2 === "You won") {
  humanScore = humanScore + 1;
  alert("Human score: " + humanScore);
} else if (result2 === "Loser") {
  computerScore = computerScore + 1;
  alert("Computer score: " + computerScore);
}
  alert("Human score: " + humanScore + "\nComputer score: " + computerScore);
  
}
playGame();