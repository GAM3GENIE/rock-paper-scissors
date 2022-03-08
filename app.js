const game = () => {
let roundMessage = '';
let playerScore = 0;
let computerScore = 0;
let gameRound = 0;
let playerSelection = '';
//let playerSelection = prompt('Please choose from Rock, Paper, and Scissors.').toLowerCase();

    const compTurn = ['rock', 'paper', 'scissors'];

            const computerPlay = (compTurn) => {
                return compTurn[Math.floor(Math.random() * compTurn.length)];
            }

            const computerSelection = computerPlay(compTurn);
            //console.log(computerSelection);

            //playRound(playerSelection, computerSelection);
            //console.log(roundMessage)
            const playGame = () => {
                for(let i = 1; i <= 5; i++){
                    
                    promptInput(playerSelection);
                    playRound(playerSelection, computerSelection);

                    console.log('Computer picked ' + computerSelection);
                    console.log('You picked ' + playerSelection);
                    console.log('Computer score is ' + computerScore);
                    console.log('Your score is ' + playerScore);
                    console.log('Game round is ' + gameRound);
                    console.log(roundMessage);
                    console.log('***********');
                }
                // if(score[playerScore] > score[computerScore]){
                //     return 'You Won! ${score[playerscore]} - ${score[computer score]}';
                // }else{
                //     return 'You Lost! ${score[playerscore]} - ${score[computer score]}';
                // }
            }

            const promptInput = () => {
                let playerSelection = prompt('Please choose from Rock, Paper, and Scissors.').toLowerCase();
                if(playerSelection == 'scissors' || playerSelection == 'paper' || playerSelection == 'rock'){
                    return playerSelection;
                }else{
                    return promptInput = prompt('That is not a legal selection, please choose from Rock, Paper, or Scissors.');
                    
                }
            }

            const playRound = (playerSelection, computerSelection) => {
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




