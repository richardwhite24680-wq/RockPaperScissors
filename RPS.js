function getComputerChoice() {
	const roll = Math.floor(Math.random() * 3);
	let result;
	
	if (roll === 0) {
	  result = "rock";
	} else if (roll === 1) {
	  result = "paper";
	} else {
	  result = "scissors";
	}

	return result;
}

function getHumanChoice() {
	let answer = prompt("Select your choice: Rock, Paper or Scissors?");

	return answer.toLowerCase();
}

function playGame() {

 let humanScore = 0;
 let computerScore = 0;

function playRound (humanChoice, computerChoice) {
	if (humanChoice === computerChoice) {
	   console.log("It's a tie!");
	} else if (humanChoice === 'rock' && computerChoice === 'scissors') {
	   console.log("You win! Rock beats Scissors");
	   humanScore++;
	} else if (humanChoice === 'paper' && computerChoice === 'rock') {
		console.log("You win! Paper beats Rock");
	   humanScore++;
	} else if (humanChoice === 'scissors' && computerChoice === 'paper') {
		console.log("You win! Scissors beats Paper");
	   humanScore++;
	} else {
		console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
	   computerScore++;
	}
}
	
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());


console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
    	console.log("You won the game!");
    } else if (computerScore > humanScore) {
    	console.log("Computer won the game!");
    } else {
    	console.log("It's a tie game!");
    }
}


playGame();
