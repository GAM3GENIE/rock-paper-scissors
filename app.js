const game = () => {
let playerScore = 0;
let computerScore = 0;
let gameRound = 0;
const resultsDisplay = document.querySelector('#results');
const selectionDisplay = document.querySelector('#selections');
const endGameDisplay = document.querySelector('#endgame');
const reloadBtn = document.querySelector('#reload');
const compTurn = ['rock', 'paper', 'scissors'];


    const playGame = (e) => {
        playRound(e.target.innerText, compTurn[Math.floor(Math.random() * compTurn.length)]);
        if(gameRound === 5){
            if(playerScore > computerScore){
                endGameDisplay.innerText = `You Won! You scored ${playerScore} and the Computer scored ${computerScore}. You're Good!`;
            }else{
                endGameDisplay.innerText = `You Lost! You scrored ${playerScore} and the Computer scored ${computerScore}. Better luck next time.`;
            }
            reloadBtn.innerText = 'Restart';
            reloadBtn.style.display = 'flex'
            reloadBtn.addEventListener('click',() => {
            window.location.reload();
            reset();
            });
        }
    }
    
    compTurn.forEach(compTurn => {
        const button = document.createElement('button')
        button.innerHTML = compTurn
        button.addEventListener('click', playGame)
        selectionDisplay.appendChild(button)
    });
            
    // single round play
    const playRound = (playerSelection, computerSelection) => {
        switch(playerSelection + computerSelection){
            case 'scissorspaper':
            case 'rockscissors':
            case 'paperrock':
                resultsDisplay.innerText = `You chose ${playerSelection} and the Computer chose ${computerSelection}, You Won the round!`;
                playerScore++;
                gameRound++;
                console.log('Computer score is ' + computerScore);
                console.log('Your score is ' + playerScore);
                console.log('Game round is ' + gameRound);
                break;
            case 'paperscissors':
            case 'scissorsrock':
            case 'rockpaper':
                resultsDisplay.innerText = `You chose ${playerSelection} and the Computer chose ${computerSelection}, You Lost the round!`;
                computerScore++;
                gameRound++;
                console.log('Computer score is ' + computerScore);
                console.log('Your score is ' + playerScore);
                console.log('Game round is ' + gameRound);
                break;
            case 'paperpaper':
            case 'rockrock':
            case 'scissorsscissors':
                resultsDisplay.innerText = `You chose ${playerSelection} and the Computer chose ${computerSelection}, It\'s a Draw!`;
                console.log('Computer score is ' + computerScore);
                console.log('Your score is ' + playerScore);
                console.log('Game round is ' + gameRound);
                break;
        }
    }

    const reset = () => {
        gameRound = 0;
        playerScore = 0;
        computerScore = 0;
    }

}

// Calling the game function
game();




