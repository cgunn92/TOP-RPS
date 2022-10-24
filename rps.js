function getComputerChoice(){
    let rock = 'rock';
    let paper = 'paper';
    let scissors = 'scissors';

    const choice = Math.random() * 100;
    console.log('getComputerChoice: ' + choice);

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
    let userInput;
    let keepGoing = false;

    while(keepGoing === false){
        userInput = prompt("Choose between Rock, Paper, or Scissors: ").toLowerCase();
        if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
            return userInput;
        } 
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
    var winner;

    if(playerSelection == r){ //player chooses rock
        if(computerSelection == p){
            winner = comp;
        }
        else if(computerSelection == s){
            winner = play;
        }
        else{
            winner = tie;
        }
    }
    else if(playerSelection == p){ //player chooses paper
        if(computerSelection == r){
            winner = play;
        }
        else if(computerSelection == s){
            winner = comp;
        }
        else{
            winner = tie;
        }
    }
    else if(playerSelection == s){ //player choosees scissors
        if(computerSelection == p){
            winner = play;
        }
        else if(computerSelection == r){
            winner = comp;
        }
        else{
            winner = tie;
        }
    }

    return winner;
}


function playGame(){
    let winner;
    let comp = 0;
    let play = 0;
    let tie = 0;

    for(let i = 0; i < 5; i++){
        winner = playRound();
        console.log(winner);
        if(winner == 'player'){
            play++;
        }
        else if(winner == 'computer'){
            comp++;
        }
        else{
            tie++;
        }
        console.log('\nplayer wins: ' + play + '\ncomputer wins: ' + comp + '\nties: ' + tie);
    }

    if(comp > play){
        console.log('The computer won ' + comp + ' out of 5 rounds and is the winner!');
    }
    else if(play > comp){
        console.log('The player won ' + play + ' out of 5 rounds and is the winner!');
    }
    else if(tie === 5){
        console.log('It was a tie!');
    }
}

playGame();