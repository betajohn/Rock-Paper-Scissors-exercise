function getComputerChoice(){
    let rando = Math.floor(Math.random()*100);
    if (rando>=100){
        getComputerChoice();
    }
    if (rando<=33){
       return "Rock";
    }
    if (rando<=66){
       return "Paper";
    }else{
        return "Scissors";
    }

}

function playRound(playerSelection0, computerSelection0){
    const playerSelection=playerSelection0.toUpperCase();
    const computerSelection=computerSelection0.toUpperCase();

    if(playerSelection === computerSelection){
        return "Draw";
    }
    if(playerSelection === "ROCK"){
        if(computerSelection==="PAPER"){
            return "You Lose! Paper beats Rock";
        }
        if(computerSelection==="SCISSORS"){
            return "You Win! Rock beats Scissors";
        }
    }
    if(playerSelection === "PAPER"){
        if(computerSelection==="ROCK"){
            return "You Win! Paper beats Rock";
        }
        if(computerSelection==="SCISSORS"){
            return "You Lose! Scissors beats Paper";
        }
    }
    
    if(playerSelection === "SCISSORS"){
        if(computerSelection==="PAPER"){
            return "You Win! Scissors beats Paper";
        }
        if(computerSelection==="ROCK"){
            return "You Lose! Rock beats Scissors";
        }
    }
    
}

function Game(){
    let userScore =0;
    let computerScore=0;
    let draw=0;
    for(let i=0;i<5;i++){
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let computerSelection = getComputerChoice();
        let roundResult=playRound(playerSelection, computerSelection);
        if(roundResult.includes("Win", 0)){
            userScore++;
        }
        if(roundResult.includes("Lose", 0)){
            computerScore++;
        }
        if(roundResult.includes("Draw", 0)){
            draw++;
        }

        console.log(roundResult+"\n");

    }
    if(userScore>computerScore){
       console.log("You won the game!");
    }
    if(userScore<computerScore){
        console.log("You lost the game!");
    }
    if(userScore==computerScore){
       console.log("It's a draw!");
    }
    console.log("---Score---\nuser: "+userScore+" computer: "+computerScore+ " draws: "+draw);

    
    


}

