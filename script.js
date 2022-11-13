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