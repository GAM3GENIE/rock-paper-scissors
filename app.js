const game = () => {
let roundMessage = '';
let playerScore = 0;
let computerScore = 0;
let playerSelection = prompt('Please choose from Rock, Paper, and Scissors.');

const compTurn = ['rock', 'paper', 'scissors'];

    const computerPlay = (compTurn) => {
        return compTurn[Math.floor(Math.random() * compTurn.length)];
    }

    const computerSelection = computerPlay(compTurn);
    //console.log(computerSelection);

    const playRound = (playerSelection, computerSelection) => {
        switch(playerSelection + computerSelection){
            case 'scissorspaper':
            case 'rockscissors':
            case 'paperrock':
                roundMessage = 'You chose ' + playerSelection + ' and the Computer chose ' + computerSelection + ' , You Win!';
                playerScore++;
                break;
            case 'paperscissors':
            case 'scissorsrock':
            case 'rockpaper':
                roundMessage = 'You chose ' + playerSelection + ' and the Computer chose ' + computerSelection + ' , You Lose!';
                computerScore++;
                break;
            case 'paperpaper':
            case 'rockrock':
            case 'scissorsscissors':
                roundMessage = 'You chose ' + playerSelection + ' and the Computer chose ' + computerSelection + ' , Its a Draw!';
                break;
        }
    }
    

    
    //playRound(playerSelection, computerSelection);
    //console.log(roundMessage)
    const playGame = () => {
        for(let i = 0; i < 5; i++){
            
            //playerSelection = prompt("Please choose from the folloing: Paper, Rock, or Scissors.").toLowerCase();

            playRound(playerSelection, computerSelection);
            console.log(computerSelection);
            console.log(computerScore, playerScore);
            console.log(roundMessage);
        }
    }

    // Calling the playGame fucntion
    playGame();

}

// Calling the game function
game();




