const win = document.querySelector('p.winCount');
const lose = document.querySelector('p.loseCount');
const tie = document.querySelector('p.tieCount');
const paragraphs = document.querySelectorAll('p');

const content = document.querySelector('div.content');
const header = document.querySelector('h1');
const board = document.querySelector('.scoreboard');
const btns = document.querySelector('.buttonContainer');
const results = document.createElement('div');
const paper = document.querySelector('button.paper');
const rock = document.querySelector('button.rock');
const scissors = document.querySelector('button.scissors');

paper.addEventListener('click', getClassName);
rock.addEventListener('click', getClassName);
scissors.addEventListener('click', getClassName);

function getClassName(e){
    let input = e.target.className;
    console.log(input);
    console.log(e);
    keepScore(playRound(input, getComputerChoice()));
    endGame();
}


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


function keepScore(winner){
    if(winner === 'player'){
        win.textContent = parseInt(win.textContent) + 1;
    }
    else if(winner === 'computer'){
        lose.textContent = parseInt(lose.textContent) + 1;
    }
    else{
        tie.textContent = parseInt(tie.textContent) + 1;
    }
}


function playRound(playerSelection, computerSelection){
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

    console.log(winner);

    return winner;
}

function endGame(){
    let wins = parseInt(win.textContent);
    let losses = parseInt(lose.textContent);
    let ties = parseInt(tie.textContent);

    let count = wins + losses + ties;

    if(count === 5){
        if(wins > losses){
            results.textContent = 'You won!';
            content.appendChild(results);
        }
        else if(losses > wins){
            results.textContent = 'You lost!';
            content.appendChild(results);
        }
        else if(ties === 5){
            results.textContent = 'Tie!';
            content.appendChild(results);
        }
        restartGame();
    }
}


function reset(){
    paragraphs.forEach((paragraph) => {
        paragraph.textContent = '0';
    });
}


function restartGame(){
    const replay = document.createElement('div');
    replay.textContent = 'Would you like to play again?';
    const yesOrNo = document.createElement('div');
    const yes = document.createElement('button');
    yes.textContent = 'Yes!';
    const no = document.createElement('button');
    no.textContent = 'No!';

    yesOrNo.appendChild(yes);
    yesOrNo.appendChild(no);
    replay.appendChild(yesOrNo);
    content.appendChild(replay);

    yes.addEventListener('click', () => {
        content.removeChild(replay)
        reset();
    });

    no.addEventListener('click', () => {
        content.removeChild(replay);
        content.removeChild(board);
        content.removeChild(btns);
        header.textContent = 'Ok, if you want to play again just hit refresh!';
    });
}