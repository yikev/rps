var roundsPlayed = 0;
var maxRounds = 5;
var playerWins = 0;
var computerWins = 0;
var ties = 0;

// Button listeners

var buttons = document.getElementsByClassName('button');

for (var i = 0; i < buttons.length; i ++) {
    buttons[i].addEventListener('click', buttonClick);
}

// Play round on player choice (click)

function buttonClick(e) {
    let playerChoice = e.target.textContent.toLowerCase();

    if (roundsPlayed < maxRounds) {
        playRound(playerChoice);
    }
}

// Get Computer's Choice

function getComputerChoice() {
    var randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum == 1) return 'Paper';
    else if (randomNum == 2) return 'Rock';
    else if (randomNum == 3) return 'Scissors';
}

// Determine Outcome

function didPlayerWin(playerChoice, computerChoice) {
    if (playerChoice == 'rock' && computerChoice == 'scissors') {
        return 1;
    } else if (playerChoice == 'rock' && computerChoice == 'paper') {
        return 2;
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        return 1;
    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        return 2;
    } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        return 2;
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        return 1;
    } else if (playerChoice == computerChoice) {
        return 3;
    }
}

document.getElementsByClassName('computer-choice')[0].textContent = getComputerChoice();

// Play a round

function playRound(playerChoice) {
    let computerChoice = getComputerChoice().toLowerCase();
    document.getElementsByClassName('computer-choice')[0].textContent = getComputerChoice();

    let outcome = didPlayerWin(playerChoice, computerChoice);

    if (outcome == 1) {
        playerWins ++;
        document.getElementsByClassName('result')[0].innerHTML =
  `Result: You chose: <span style="color: green;">${playerChoice}</span>. The computer chose: <span style="color: red;">${computerChoice}</span>. You <span style="color: yellow;">win </span>!`;
    } else if (outcome == 2) {
        computerWins ++;
        document.getElementsByClassName('result')[0].innerHTML =
  `Result: You chose: <span style="color: green;">${playerChoice}</span>. The computer chose: <span style="color: red;">${computerChoice}</span>. You <span style="color: black;">lost </span>.`;
    } else if (outcome == 3) {
        ties ++;
        document.getElementsByClassName('result')[0].innerHTML =
  `Result: You chose: <span style="color: green;">${playerChoice}</span>. The computer chose: <span style="color: red;">${computerChoice}</span>. You <span style="color: green;">tied </span>.`;
    }
    
    document.getElementsByClassName('score')[0].innerHTML = playerWins + "-" + computerWins + "-" + ties;
    roundsPlayed ++;
}