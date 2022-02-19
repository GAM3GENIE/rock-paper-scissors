const playGame = () => {
let roundMessage = '';
let playerScore = 0;
let computerScore = 0;
let playerSelection = '';

    function computerPlay(compTurn){
        return compTurn[Math.floor(Math.random() * compTurn.length)];
    }

    const compTurn = ['rock', 'paper', 'scissors'];
    //console.log(computerPlay(compTurn))
    const computerSelection = computerPlay(compTurn);

    function playRound(playerSelection, computerSelection){
        if(playerSelection === computerSelection){
            roundMessage = 'Tie';
        }else if(playerSelection == 'rock'){
            if(computerSelection == 'paper'){
                computerScore++;
                roundMessage = 'You lose! Paper beats Rock!';
            }else{
                playerScore++;
                roundMessage = 'You won! Rock was the best choice!';
            }
        }else if(playerSelection == 'scissors'){
            if(computerSelection == 'rock'){
                computerScore++;
                roundMessage = 'You lost! Rock beats Scissors!';
            }else{
                playerScore++;
                roundMessage = 'You won! Scissors was the best choice!';
            }
        }else if(playerSelection == 'paper'){
            if(computerSelection == 'scissors'){
                computerScore++;
                roundMessage = 'You lose! Scissors beats Paper!';
            }else{
                playerScore++;
                roundMessage = 'You won! Paper was the best choice!';
            }
        }
    }

    
    //playRound(playerSelection, computerSelection);
    //console.log(roundMessage)
    function game(){
        for(let i = 0; i < 5; i++){

            playerSelection = prompt("Please choose from the folloing: Paper, Rock, or Scissors.");

            if(roundMessage = 'tie'){
                playRound(playerSelection, computerSelection);
            }else{
                return roundMessage;
            }

            //playRound(playerSelection, computerSelection);
            // console.log(computerScore, playerScore)
            // console.log(roundMessage)
        }
    }

    // Calling the game fucntion
    game();

}

// Calling the playGame function
playGame();







