//Randomly generates computer's choice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice == 0)
        return "rock";
    else if(computerChoice == 1)
        return "paper";
    else
        return "scissor";
}

//Asks the user for their choice
function getHumanChoice() {
    let humanChoice = prompt("Enter your Choice: ");
    return humanChoice.toLowerCase();
}

//Plays a single round of rock-paper-scissor
//Returns 1: Human Wins
//Returns 0: Draw
//Returns -1: Computer Wins
function playRound(computerChoice ,humanChoice) {
    //Both chose the same, i.e. Draw
    if(computerChoice == humanChoice) {
        console.log(`It's a Tie! Both chose ${computerChoice}`)
        return 0;
    }
    //Compuer chose "Rock"
    else if(computerChoice == "rock") {
        if(humanChoice == "paper") {
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
            //Human Wins
            return 1;
        } else {
            console.log(`You Lose :( ${computerChoice} beats ${humanChoice}`)
            //Computer Wins
            return -1;
        }
    }
    //Computer chose "Paper"
    else if (computerChoice == "paper") {
        if(humanChoice == "scissor") {
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
            //Human Wins
            return 1;
        } else {
            console.log(`You Lose :( ${computerChoice} beats ${humanChoice}`)
            //Computer Wins
            return -1;
        }
    }
    //Computer chose "Scissor"
    else {
        if(humanChoice == "rock") {
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
            //Human Wins
            return 1;
        } else {
            console.log(`You Lose :( ${computerChoice} beats ${humanChoice}`)
            //Computer Wins
            return -1;
        }
    }
}
let computerScore = 0;
let humanScore = 0;

//Helper function to update Score
//  1 --> Human wins
//  0 --> Draw
// -1 --> Computer Wins
function updateScore(result) {
    if(result == 1)
        humanScore++;
    else if(result == -1)
        computerScore++;
    else {
        humanScore++;
        computerScore++;
    }
}

function displaysWinner(computerScore ,humanScore) {
    if(computerScore > humanScore)
        console.log("You Lose");
    else if(computerScore < humanScore)
        console.log("You Win");
    else 
        console.log("It's a Draw");
}

function playGame() {
    // Variables for Score Keeping
    
    
    for(let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        let result = playRound(computerSelection, humanSelection);
        updateScore(result);
    }

}

playGame();
console.log(humanScore, computerScore);
displaysWinner(computerScore, humanScore);