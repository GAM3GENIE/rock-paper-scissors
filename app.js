const game = () => {
let roundMessage = '';
let playerScore = 0;
let computerScore = 0;
let gameRound = 0;
let playerSelection = '';

// Computer play
const compTurn = ['rock', 'paper', 'scissors'];
let computerSelection = '';

const generateComputerSelection = () => {
    const randomCompTurn = compTurn[Math.floor(Math.random() * compTurn.length)];
    computerSelection = randomCompTurn;
}
            // playgame
            const playGame = () => {
                do{
                    playRound();
                    
                    //for my own testing
                    console.log('Computer picked ' + computerSelection);
                    console.log('You picked ' + playerSelection);
                    console.log('Computer score is ' + computerScore);
                    console.log('Your score is ' + playerScore);
                    console.log('Game round is ' + gameRound);
                    console.log(roundMessage);
                    console.log('***********');
                }
                while(gameRound <= 4);

                if(playerScore > computerScore){
                    console.log('You Won!, You scored ' + playerScore +' and computer scored ' + computerScore);
                }else{
                    console.log('You Lost!, You scored ' + playerScore +' and computer scored ' + computerScore);
                }
            }

            // prompt user for input
            const promptInput = () => {
                do{
                    playerSelection = prompt('Please choose from Rock, Paper, and Scissors.').toLowerCase();
                    if(playerSelection == 'scissors' || playerSelection == 'paper' || playerSelection == 'rock'){
                        break;
                    }else{
                        playerSelection = prompt('That is not a legal selection, please choose from Rock, Paper, or Scissors.').toLowerCase();
                    }
                }
                while(playerSelection != 'scissors' || playerSelection != 'paper' || playerSelection != 'rock');
            }

            // single round play
            const playRound = () => {

                promptInput();
                generateComputerSelection();

                switch(playerSelection + computerSelection){
                    case 'scissorspaper':
                    case 'rockscissors':
                    case 'paperrock':
                        roundMessage = 'You chose ' + playerSelection + ' and the Computer chose ' + computerSelection + ' , You Win!';
                        playerScore++;
                        gameRound++;
                        break;
                    case 'paperscissors':
                    case 'scissorsrock':
                    case 'rockpaper':
                        roundMessage = 'You chose ' + playerSelection + ' and the Computer chose ' + computerSelection + ' , You Lose!';
                        computerScore++;
                        gameRound++;
                        break;
                    case 'paperpaper':
                    case 'rockrock':
                    case 'scissorsscissors':
                        roundMessage = 'You chose ' + playerSelection + ' and the Computer chose ' + computerSelection + ' , Its a Draw!';
                        break;
                }
            }
            
            // Calling the playGame fucntion
            playGame();

}

// Calling the game function
game();




