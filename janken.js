function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice == 0)
        return "rock";
    else if(computerChoice == 1)
        return "paper";
    else
        return "scissor";
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your Choice: ");
    return humanChoice.toLowerCase();
}

let computerScore = 0;
let humanScore = 0;
