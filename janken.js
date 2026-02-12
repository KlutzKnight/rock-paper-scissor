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

function updateScore(computerScore, playerScore) {
    const scoreDiv = document.querySelector(".score");

    scoreDiv.setAttribute('style', 'white-space: pre;');
    scoreDiv.textContent = `Computer Score: ${computerScore} \r\nPlayer Score: ${playerScore}`;
}

function displayWinner(computerScore, playerScore) {
    if(computerScore > playerScore)
        console.log("You Lose");
    else if(computerScore < playerScore)
        console.log("You Win");
    else 
        console.log("It's a Draw");
}

function playGame() {
    // Variables for Score Keeping
    let computerScore = 0;
    let playerScore = 0;
    
    updateScore(computerScore, playerScore);

    //Plays a single round of rock-paper-scissor
    function playRound(playerChoice) {
        playerChoice = playerChoice.toLowerCase();
        const computerChoice = getComputerChoice();
        //Both chose the same, i.e. Draw
        if(computerChoice == playerChoice) {
            console.log(`It's a Tie! Both chose ${computerChoice}`);
        }
        //Compuer chose "Rock"
        else if(computerChoice == "rock") {
            if(playerChoice == "paper") {
                console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
                playerScore++;
            } else {
                console.log(`You Lose :( ${computerChoice} beats ${playerChoice}`);
                computerScore++;
            }
        }
        //Computer chose "Paper"
        else if (computerChoice == "paper") {
            if(playerChoice == "scissor") {
                console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
                playerScore++;
            } else {
                console.log(`You Lose :( ${computerChoice} beats ${playerChoice}`);
                computerScore++;
            }
        }
        //Computer chose "Scissor"
        else {
            if(playerChoice == "rock") {
                console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
                playerScore++;
            } else {
                console.log(`You Lose :( ${computerChoice} beats ${playerChoice}`);
                computerScore++;
            }
        }
        updateScore(computerScore, playerScore);
    }


    // Catch event when bubbling
    const btns = document.querySelector(".button-container");
    btns.addEventListener( "click", e => playRound(e.target.textContent) );

    
    // for(let i = 0; i < 5; i++) {
        
    //     let playerChoice = getPlayerChoice();
    //     let computerSelection = getComputerChoice();

    //     playRound(computerSelection, playerChoice);
    // }
    
    // console.log(`Player --> ${playerScore}, Computer --> ${computerScore}`);
    // displayWinner(computerScore, playerScore);
}


playGame();