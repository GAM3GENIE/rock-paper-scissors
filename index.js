function computerPlay(compTurn){
    return compTurn[Math.floor(Math.random() * compTurn.length)];
}

const compTurn = ['rock', 'paper', 'scissors'];
//console.log(computerPlay(compTurn))


function playRound(playerSelection){
    if(playerSelection == computerSelection){
        results = 'Tie';
    }else if(playerSelection = 'rock'){
        if(computerSelection = 'paper'){
            results = 'You lose! Paper beats Rock!';
            console.log(results)
        }else{
            results = 'You won! Rock was the best choice!';
            console.log(results)
        }
    }else if(playerSelection = 'scissors'){
        if(computerSelection = 'rock'){
            results = 'You lost! Rock beats Scissors!'
            console.log(results)
        }else{
            results = 'You won! Scissors was the best choice!';
            console.log(results)
        }
    }else if(playerSelection = 'paper'){
        if(computerSelection = 'scissors'){
            results = 'You lose! Scissors beats Paper!';
            console.log(results)
        }else{
            results = 'You won! Paper was the best choice!';
            console.log(results)
        }
    }

}

const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
