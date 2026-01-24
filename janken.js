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

function displayWinner(computerScore ,humanScore) {
    if(computerScore > humanScore)
        console.log("You Lose");
    else if(computerScore < humanScore)
        console.log("You Win");
    else 
        console.log("It's a Draw");
}

function playGame() {
    // Variables for Score Keeping
    let computerScore = 0;
    let humanScore = 0;

    //Plays a single round of rock-paper-scissor
    function playRound(computerChoice ,humanChoice) {
        //Both chose the same, i.e. Draw
        if(computerChoice == humanChoice) {
            console.log(`It's a Tie! Both chose ${computerChoice}`)
            computerScore++;
            humanScore++;
        }
        //Compuer chose "Rock"
        else if(computerChoice == "rock") {
            if(humanChoice == "paper") {
                console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
                humanScore++;
            } else {
                console.log(`You Lose :( ${computerChoice} beats ${humanChoice}`)
                computerScore++;
            }
        }
        //Computer chose "Paper"
        else if (computerChoice == "paper") {
            if(humanChoice == "scissor") {
                console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
                humanScore++;
            } else {
                console.log(`You Lose :( ${computerChoice} beats ${humanChoice}`)
                computerScore++;
            }
        }
        //Computer chose "Scissor"
        else {
            if(humanChoice == "rock") {
                console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
                humanScore++;
            } else {
                console.log(`You Lose :( ${computerChoice} beats ${humanChoice}`)
                computerScore++;
            }
        }
    }
    
    for(let i = 0; i < 5; i++) {

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(computerSelection, humanSelection);
    }
    
    console.log(`Human --> ${humanScore}, Computer --> ${computerScore}`);
    displayWinner(computerScore, humanScore);
}

playGame();