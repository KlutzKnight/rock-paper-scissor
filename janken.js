// Get all permanent stuff now
const buttonsContainer = document.querySelector(".buttons-container");
const gameUpdate = document.querySelector(".game-updates");
const scoreDiv = document.querySelector(".score");


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
    scoreDiv.textContent = `Computer Score: ${computerScore} \r\nPlayer Score: ${playerScore}`;
}

function getWinner(computerScore, playerScore) {
    if(computerScore == 5) 
        return "Computer";
    if(playerScore == 5) 
        return "Player";

    return "None";
}

function playGame() {
    // Variables for Score Keeping
    let computerScore = 0;
    let playerScore = 0;
    displayScore(computerScore, playerScore);



    function createChoiceButtons(choice) {
        // Catch event when bubbling
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.classList.add("choice-button");
        choiceButton.addEventListener("click" , () => playRound(choice) );
        buttonsContainer.appendChild(choiceButton);
    }
    
    function displayWinner(winner) {
        if(winner == "Player")
            gameUpdate.textContent = `Congratulations, You Won!!!\r\n`;
        else
            gameUpdate.textContent = `You lost :( Better luck next time.\r\n`;
        
        gameUpdate.textContent += "Game Over";
    }

    // Plays a single round of rock-paper-scissor
    function playRound(playerChoice) {
        const computerChoice = getComputerChoice();
        playerChoice = playerChoice.toLowerCase();
        
        
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

        // Check for winner and reset the game
        const winner = getWinner(computerScore, playerScore);
        if(winner != "None") {
            //Display the winner
            displayWinner(winner);

            const retryButton = document.createElement("button");
            retryButton.classList.add("action-button");
            retryButton.textContent = "Retry";
            retryButton.addEventListener("click", (e) => {
                playGame();
            });
            buttonsContainer.innerHTML = "";
            buttonsContainer.appendChild(retryButton);
        }

        displayScore(computerScore, playerScore);
    }


    buttonsContainer.innerHTML = "";
    createChoiceButtons("Rock");
    createChoiceButtons("Paper");
    createChoiceButtons("Scissor");
}

// Create a Start Game button and append it to container
const startButton = document.createElement("button");
startButton.classList.add("action-button");
startButton.textContent = "Start Game";
startButton.addEventListener("click", (e) => {
    playGame();
});
buttonsContainer.appendChild(startButton);