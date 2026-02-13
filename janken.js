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

function displayScore(computerScore, playerScore) {
    const scoreDiv = document.querySelector(".score");

    scoreDiv.setAttribute('style', 'white-space: pre;');
    scoreDiv.textContent = `Computer Score: ${computerScore} \r\nPlayer Score: ${playerScore}`;
}

function getWinner(computerScore, playerScore) {
    if(computerScore != 5 && playerScore != 5)
        return 0;

    if(computerScore == 5)
        return "Computer"
    
    else if(playerScore == 5)
        return "Player"
}

function playGame() {
    // Variables for Score Keeping
    let computerScore = 0;
    let playerScore = 0;
    
    const gameUpdate = document.querySelector(".game-updates");
    gameUpdate.textContent = "Start Game";
    displayScore(computerScore, playerScore);

    // Plays a single round of rock-paper-scissor
    function playRound(playerChoice) {
        const computerChoice = getComputerChoice();
        playerChoice = playerChoice.toLowerCase();
        gameUpdate.setAttribute('style', 'white-space: pre;');
        
        //Both chose the same, i.e. Draw
        if(computerChoice == playerChoice) {
            gameUpdate.textContent = `It's a Tie! Both chose ${computerChoice}`;
        }
        //Compuer chose "Rock"
        else if(computerChoice == "rock") {
            if(playerChoice == "paper") {
                gameUpdate.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
                playerScore++;
            } else {
                gameUpdate.textContent = `You Lose :( ${computerChoice} beats ${playerChoice}`;
                computerScore++;
            }
        }
        //Computer chose "Paper"
        else if (computerChoice == "paper") {
            if(playerChoice == "scissor") {
                gameUpdate.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
                playerScore++;
            } else {
                gameUpdate.textContent = `You Lose :( ${computerChoice} beats ${playerChoice}`;
                computerScore++;
            }
        }
        //Computer chose "Scissor"
        else {
            if(playerChoice == "rock") {
                gameUpdate.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
                playerScore++;
            } else {
                gameUpdate.textContent = `You Lose :( ${computerChoice} beats ${playerChoice}`;
                computerScore++;
            }
        }

        displayScore(computerScore, playerScore);
        winner = getWinner(computerScore, playerScore);
        if(winner != 0) {
            //Display the winner and reset the game
            resetGame(winner);
        }
    }

    function resetGame(winner) {
        gameUpdate.textContent = `${winner} has won\r\n`;
        computerScore = 0;
        playerScore = 0;
        gameUpdate.textContent += "Game Over";
    }

    // Catch event when bubbling
    const btns = document.querySelector(".button-container");
    btns.addEventListener( "click" , (e) => {
        const button = e.target.closest("button");
        if(button && btns.contains(button))
            playRound(e.target.textContent);
    } );
}


playGame();