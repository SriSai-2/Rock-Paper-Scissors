function getComputerChoice(){// function to get computer choice
	let n = Math.floor(Math.random() * 3) + 1;
	let choice = 0;
	if(n === 1){
		choice = "rock";
	}	
	else if(n === 2){
		choice = "paper";
	}
	else if(n === 3){
		choice = "scissors";
	}
	return choice;
}
function getHumanChoice(){  // function to get human choice
	// Stores it
	let choice = prompt("Make your choice: Rock, Paper, Scissors");
	// returns it
	return choice.toLowerCase();
}

//function to play Game 

const playGame = ()=> {

	let humanScore = 0;
	let computerScore = 0;
//function to play round
	function playRound(humanChoice, computerChoice){
//comparing the results we get from the choice functions
	if(humanChoice === "rock" && computerChoice === "paper"){
		console.log("You lose!Paper beats Rock");
		computerScore++;
	}
	else if(humanChoice === "paper" && computerChoice === "rock"){
		console.log("You win!Paper beats Rock");
		humanScore++;
	}
	else if(humanChoice === "rock" && computerChoice === "scissors"){
		console.log("You win!Rock beats scissors");
		humanScore++;
	}
	else if(humanChoice === "paper" && computerChoice === "scissors"){
		console.log("You lose!Scissors beats paper");
		computerScore++;
	}
	else if(humanChoice === "scissors" && computerChoice === "paper"){
		console.log("You win!Scissors beats paper");
		humanScore++;
	}
	else if(humanChoice ==="scissors" && computerChoice === "rock"){
		console.log("You lose!Rock beats scissors");
		computerScore++;
	}
	else if(humanChoice === "rock" && computerChoice === "rock"){
		console.log("Tie");
	}
	else if(humanChoice === "paper" && computerChoice === "paper"){
		console.log("Tie");
	}
	else if(humanChoice === "scissors" && computerChoice ==="scissors"){
		console.log("Tie");
	}
}
//loop so that we can run the round function 5 times
	for(let i = 0; i < 5; i++)
	{
		const humanselection = getHumanChoice();
		const computerselection = getComputerChoice();
		playRound(humanselection,computerselection);
	}

	console.log(`Your Score is ${humanScore} vs ComputerScore is ${computerScore}`);
};

playGame();

