var currentUserScore = 0;
var currentComputerScore = 0;

function refreshScore(winner){
    var userText = document.querySelector('.user-side');
    var computerText = document.querySelector('.computer-side');
    if(winner == "start"){
        document.querySelector('.user-score').textContent = currentUserScore;
        document.querySelector('.computer-score').textContent = currentComputerScore;
    } else if (winner == "user"){
        currentUserScore++;
        document.querySelector('.user-score').textContent = currentUserScore;
        userText.classList.add('winning-animation');
        
    } else if(winner == "computer"){
        currentComputerScore++;
        document.querySelector('.computer-score').textContent = currentComputerScore;
        computerText.classList.add('winning-animation');
        
        
    }

    if(currentComputerScore == 5) {
        alert('You lost! The computer got to 5 before you.');
    } else if(currentUserScore == 5) {
        alert('You won! You got to 5 before the computer!')
    }
}

const buttonCol = document.querySelectorAll('input');

buttonCol.forEach((input) => {
    input.addEventListener('click', (e) => {
        checkButton(input.classList);
    })
});


function checkButton(classList){
    if(classList.contains("button1")){
        whoWon("rock");
    } else if (classList.contains("button2")){
        whoWon("paper")
    } else if (classList.contains("button3")){
        whoWon("scissors");
    }
}

function computerPlay(){
    var random= Math.floor(Math.random() * 3) + 1
    switch(random){
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
    }
}

function whoWon(userChoice){
    
    if(singleRound(userChoice, computerPlay()).includes("win")){
        refreshScore("user");
    } else if(singleRound(userChoice, computerPlay()).includes("win")){
        refreshScore("computer");
    }
}


function singleRound(playerSelection, computerSelection){
    let userStr = playerSelection.toUpperCase();
    switch(userStr){
        case "ROCK":
            if (computerSelection == "ROCK"){
                return `It is a tie! Both of you chose ${computerSelection}`;
            } else if (computerSelection == "PAPER"){
                return `You lose! ${computerSelection} beats ${userStr}`;
            } else if (computerSelection == "SCISSORS"){
                return `You win! ${userStr} beats ${computerSelection}`;
            }
        case "PAPER":
            if (computerSelection == "PAPER"){
                return `It is a tie! Both of you chose ${computerSelection}`;
            } else if (computerSelection == "SCISSORS"){
                return `You lose! ${computerSelection} beats ${userStr}`;
            } else if (computerSelection == "ROCK"){
                return `You win! ${userStr} beats ${computerSelection}`;
            }
        case "SCISSORS":
            if (computerSelection == "SCISSORS"){
                return `It is a tie! Both of you chose ${computerSelection}`;
            } else if (computerSelection == "ROCK"){
                return `You lose! ${computerSelection} beats ${userStr}`;
            } else if (computerSelection == "PAPER"){
                return `You win! ${userStr} beats ${computerSelection}`;
            }
    }
}

/*
function game(){
    var i = 0;
    var userScore = 0;
    var computerScore = 0;
    while(userScore + computerScore < 5){
        var output = singleRound(prompt("Rock, Paper, Scissors, shoot! (Please enter your choice)"), computerPlay());
        if(!output.includes('tie')){
            alert(output);
            if(output.includes('win!')){
                userScore++;
            } else{
                computerScore++;
            }
        }
        else {
            alert("It was a tie!");
        }
    }
    console.log(`Game over! Final score: \nUser:${userScore}\nComputer:${computerScore}`)
}

*/