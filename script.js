let won =0;
let lost=0;
let draw=0;
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const endgameDiv=document.createElement("div");
const restart = document.createElement("button");
const h1=document.getElementById("h1");


function getComputerChoice() {
  let rando = Math.floor(Math.random() * 100);
  const resulsBoard=document.getElementById="results";

  if (rando >= 100) {
    getComputerChoice();
  }
  if (rando <= 33) {
    return "Rock";
  }
  if (rando <= 66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection0, computerSelection0) {

  const playerSelection = playerSelection0.toUpperCase();
  const computerSelection = computerSelection0.toUpperCase();

  if (playerSelection === computerSelection) {
    console.log("Draw");
    draw=draw+1;
    //return "Draw";
  }
  if (playerSelection === "ROCK") {
    if (computerSelection === "PAPER") {
        console.log("You Lose! Paper beats Rock");
        lost=lost+1;
      //return "You Lose! Paper beats Rock";
    }
    if (computerSelection === "SCISSORS") {
        console.log("You Win! Rock beats Scissors");
        won=won+1;
      //return "You Win! Rock beats Scissors";
    }
  }
  if (playerSelection === "PAPER") {
    if (computerSelection === "ROCK") {
        console.log("You Win! Paper beats Rock");
        won=won+1;
      //return "You Win! Paper beats Rock";
      
    }
    if (computerSelection === "SCISSORS") {
        console.log("You Lose! Scissors beats Paper");
        lost=lost+1;
      //return "You Lose! Scissors beats Paper";
    }
  }

  if (playerSelection === "SCISSORS") {
    if (computerSelection === "PAPER") {
        console.log("You Win! Scissors beats Paper");
        won=won+1;
      //return "You Win! Scissors beats Paper";
    }
    if (computerSelection === "ROCK") {
        console.log("You Lose! Rock beats Scissors");
        lost=lost+1;
      //return "You Lose! Rock beats Scissors";
    }
  }
  updateScore();
}

function start() {
   
  document.getElementById("mainBtn").remove();
  updateScore();
 
  
  rockBtn.textContent="Rock";
  rockBtn.classList.add="btn";
  rockBtn.onclick=()=>playRound('rock', getComputerChoice());

  paperBtn.textContent="Paper";
  paperBtn.classList.add="btn";
  paperBtn.onclick=()=>playRound('paper', getComputerChoice());

  scissorsBtn.textContent="Scissors";
  scissorsBtn.classList.add="btn";
  scissorsBtn.onclick=()=>playRound('scissors', getComputerChoice());

  const mainDiv = document.getElementById("main");
  mainDiv.appendChild(rockBtn);
  mainDiv.appendChild(paperBtn);
  mainDiv.appendChild(scissorsBtn);


  /*
  let userScore = 0;
  let computerScore = 0;
  let draw = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper or Scissors?");
    let computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    if (roundResult.includes("Win", 0)) {
      userScore++;
    }
    if (roundResult.includes("Lose", 0)) {
      computerScore++;
    }
    if (roundResult.includes("Draw", 0)) {
      draw++;
    }

    console.log(roundResult + "\n");
  }
  if (userScore > computerScore) {
    console.log("You won the game!");
  }
  if (userScore < computerScore) {
    console.log("You lost the game!");
  }
  if (userScore == computerScore) {
    console.log("It's a draw!");
  }
  console.log(
    "---Score---\nuser: " +
      userScore +
      " computer: " +
      computerScore +
      " draws: " +
      draw
  );
  */
}

function updateScore(){
    results.textContent=`Won:${won} - Lost:${lost} - Draw:${draw}`;
    if(won===5 || lost===5 ){
      rockBtn.disabled=true;
      paperBtn.disabled=true;
      scissorsBtn.disabled=true;
      if(won===5){
        h1.textContent="You Won!";
      }
      if(lost===5){
        h1.textContent="You Lost!";
      }

      restart.textContent="Restart";
      restart.setAttribute("id","restart");
      endgameDiv.setAttribute("id","endgameDiv");
      endgameDiv.appendChild(restart);
      document.body.appendChild(endgameDiv);
      restart.onclick=()=>{
        document.body.removeChild(endgameDiv);
        draw=0; won=0; lost=0;
        rockBtn.disabled=false;
        paperBtn.disabled=false;
        scissorsBtn.disabled=false;
        h1.textContent="Play Rock Paper Scissors!";
        updateScore();
      }


      
      
    }

}