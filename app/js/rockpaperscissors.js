var playerMove = 0;
var computerMove = 0;

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    return move||getInput();
}

function getComputerMove(move) {
    return move||randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove)  {
        winner = "tie"; 
    }
    else if (playerMove === "scissors"){
        if (computerMove === "rock") {
            winner="computer";
        }
        else if (computerMove === "paper"){
            winner="player";
        }
    }
    else if (playerMove === "rock"){
        if (computerMove === "paper"){
            winner="computer";
        }
        else if (computerMove === "scissors"){
            winner="player";
        }
    }
    else if (playerMove === "paper"){
        if (computerMove === "scissors") {
            winner="computer";
        }
        else if (computerMove === "rock"){
            winner="player";
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    for (var i = 0; playerWins||computerWins < 5; i+=1) {
        console.log (i); 
        var x = getPlayerMove();
        var y = getComputerMove();
        var z = getWinner(x,y);
        if (z==="player") {
            playerWins+=1;
            }
        else if (z==="computer") {
            computerWins+=1;
            }
        else {
            i=+1;
        }
        console.log('Player chose '+ x + ' while computer chose ' + y);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins);
    }    
    return [playerWins, computerWins];

}