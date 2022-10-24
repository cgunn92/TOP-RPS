function getComputerChoice(){
    let rock = 'rock';
    let paper = 'paper';
    let scissors = 'scissors';

    const choice = Math.random() * 100;

    if(choice <= 33){
        return rock;
    }
    else if(choice > 66){
        return scissors;
    }
    else{
        return paper;
    }
}

function getUserChoice(){
    const userInput = toLowerCase(prompt("Choose between Rock, Paper, or Scissors: "));

    if(userInput != 'rock' || userInput != 'paper' || userInput != 'scissors'){
        return null;
    }
    else{
        return userInput;
    }
}

function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    playerSelection = getUserChoice();
    const s = 'scissors';
    const r = 'rock';
    const p = 'paper';
    const play = 'player';
    const comp = 'computer';
    const tie = 'tie';
    let winner;

    if(playerSelection === r){ //player chooses rock
        if(computerSelection === p){
            winner = comp;
        }
        else if(computerSelection === s){
            winner = play;
        }
        else{
            winner = tie;
        }
    }
    else if(playerSelection === p){ //player chooses paper
        if(computerSelection === r){
            winner = play;
        }
        else if(computerSelection === s){
            winner = comp;
        }
        else{
            winner = tie;
        }
    }
    else if(playerSelection === s){ //player choosees scissors
        if(computerSelection === p){
            winner = play;
        }
        else if(computerSelection === r){
            winner = comp;
        }
        else{
            winner = tie;
        }
    }

    return winner;
}

