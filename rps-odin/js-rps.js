const startButton = document.querySelector('#playBtn');
const rock = document.querySelector('#rockBtn');
const sci = document.querySelector('#sciBtn');
const ppr = document.querySelector('#pprBtn');
const result = document.querySelector('#result');

let compScore = 0;
let playerScore = 0;

ppr.addEventListener('click', getPlayerChoice);
rock.addEventListener('click', getPlayerChoice);
sci.addEventListener('click', getPlayerChoice);
// startButton.addEventListener('click', startGame)

function getCompChoice() {
    let compNum =  Math.floor(Math.random() * (3) ) + 1;
    if (compNum == 1) {
        return "rock";
    }
    else if (compNum == 2) {
        return "scissors";
    }
    else if (compNum == 3) {
        return "paper";
    }
}

function getWinner(playerChoice, compChoice) {
    if (playerChoice == compChoice) {
        return "it's a tie!";
    }

    else if (playerChoice == "rock" && compChoice == "scissors" || playerChoice == "scissors" && compChoice == "paper" || playerChoice == "paper" && compChoice == "rock") {
        return `${playerChoice} beats ${compChoice}! you win :)`;
    }

    else if (compChoice == "rock" && playerChoice == "scissors" || compChoice == "scissors" && playerChoice == "paper" || compChoice == "paper" && playerChoice == "rock") {
        return `${compChoice} beats ${playerChoice}! you lose :(`;
    }
}

function getPlayerChoice(e) {
    let playerChoice;
    if (e.target.id == "rockBtn") {
        playerChoice = "rock";
    }
    else if (e.target.id == "sciBtn") {
        playerChoice = "scissors";
    }
    else if (e.target.id == "pprBtn") {
        playerChoice = "paper";
    }

    let compChoice = getCompChoice();

    result.textContent = getWinner(playerChoice, compChoice);
    result.style.color = "white";
}

