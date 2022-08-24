const rockClicked = document.querySelector('#rock');
rockClicked.addEventListener('click', () => game("rock"));

const paperClicked = document.querySelector('#paper');
paperClicked.addEventListener('click', () => game("paper"));

const scissorClicked = document.querySelector('#scissor');
scissorClicked.addEventListener('click', () => game("scissor"));

const restartClicked = document.querySelector('#restart');
restartClicked.addEventListener('click', () => {
    playerWonCount = 0;
    computerWonCount = 0;
    matchDrawnCount = 0;
    document.getElementById("roundresult").innerHTML = "";
    document.getElementById("playerwoncount").innerHTML = "";
    document.getElementById("matchdrawncount").innerHTML = "";
    document.getElementById("computerwoncount").innerHTML = "";
    document.getElementById("finalresult").innerHTML = "";
});

let playerWonCount = 0;
let computerWonCount = 0;
let matchDrawnCount = 0;

function game(playerSelection){
    let finalResult = playRound(playerSelection);

    if ((finalResult == "Player Won")&&(playerWonCount<=5)&&(computerWonCount!=5)){
        playerWonCount++
    } else if ((finalResult == "Computer Won")&&(playerWonCount!=5)&&(computerWonCount<=5)){
        computerWonCount++
    } else if ((finalResult == "Match Drawn")&&(playerWonCount!=5)&&(computerWonCount!=5)){
        matchDrawnCount++
    }

    if ((playerWonCount<=5)&&(computerWonCount<=5)){
        document.getElementById("roundresult").innerHTML = finalResult;
        document.getElementById("playerwoncount").innerHTML = playerWonCount;
        document.getElementById("matchdrawncount").innerHTML = matchDrawnCount;
        document.getElementById("computerwoncount").innerHTML = computerWonCount;
    }


    if ((playerWonCount ==5)&&(computerWonCount<5)){
        document.getElementById("finalresult").innerHTML = "Player won first 5 times";
        alert(`Match ended 
        Player Won First 5 times
        To play again
        press Restart button `);
    } else if ((computerWonCount ==5 )&&(playerWonCount<5)){
        document.getElementById("finalresult").innerHTML = "Computer won first 5 times";
        alert(`Match ended 
        Computer Won First 5 times
        To play again
        press Restart button `);
    }



}

function getComputerChoice() {
    let values = ["rock","paper","scissor"]
    return values[Math.floor(Math.random() * values.length)]
}


function playRound(playerSelection){
    let computerSelection = getComputerChoice();
    if((playerSelection == "rock" && computerSelection == "scissor")||
    (playerSelection == "scissor" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")){
        return "Player Won";
    } else if((playerSelection == "rock" && computerSelection == "rock")||
    (playerSelection == "paper" && computerSelection == "paper") ||
    (playerSelection == "scissor" && computerSelection == "scissor")){
        return "Match Drawn";

    } else if((playerSelection == "rock" && computerSelection == "paper")||
    (playerSelection == "scissor" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "scissor")){
        return "Computer Won";
    }
}
