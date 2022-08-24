console.log("Hello This is Rock paper scissor game")
let wonCount = 0
let drawCount = 0
let lostCount = 0
function getComputerChoice() {
    let values = ["rock","paper","scissor"]
    return values[Math.floor(Math.random() * values.length)]
}
function playRound(playerSelection){
    getComputerChoice();
    let computerSelection = getComputerChoice();
    if(playerSelection == "rock" && computerSelection == "scissor"){
        console.log("you won");
        let result = document.querySelector('#results')
        let round = document.createElement('div')
        round.textContent = "you won"
        result.appendChild(round)
        wonCount++
        return wonCount

        

    }else if (playerSelection == "rock" && computerSelection == "rock"){
        console.log("same selection");
        let result = document.querySelector('#results')
        let round = document.createElement('div')
        round.textContent = "draw"
        result.appendChild(round)
        drawCount++
        return drawCount
    

    }else if (playerSelection == "rock" && computerSelection == "paper"){
        console.log("you lost");
        let result = document.querySelector('#results')
        let round = document.createElement('div')
        round.textContent = "you lost"
        result.appendChild(round)
        lostCount++
        return lostCount
    

    }else if (playerSelection == "scissor" && computerSelection == "paper"){
        console.log("you won");
        let result = document.querySelector('#results')
        let round = document.createElement('div')
        round.textContent = "you won"
        result.appendChild(round)
        wonCount++
        return wonCount
    

        
    }else if (playerSelection == "scissor" && computerSelection == "scissor"){
        console.log("same selection");
        let result = document.querySelector('#results')
        let round = document.createElement('div')
        round.textContent = "draw"
        result.appendChild(round)
        drawCount++
        return drawCount


 
    }else if (playerSelection == "scissor" && computerSelection == "rock"){
        console.log("you lost");
        let result = document.querySelector('#results')
        let round = document.createElement('div')
        round.textContent = "you lost"
        result.appendChild(round)
        lostCount++
        return lostCount


 
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        console.log("you won");
        let result = document.querySelector('#results')
        let round = document.createElement('div')
        round.textContent = "you won"
        result.appendChild(round)
        wonCount++
        return wonCount

 
    }else if (playerSelection == "paper" && computerSelection == "paper"){
        console.log("same selection");
        let result = document.querySelector('#results')
        let round = document.createElement('div')
        round.textContent = "draw"
        result.appendChild(round)
        drawCount++
        return drawCount


 
    }else if (playerSelection == "paper" && computerSelection == "scissor"){
        console.log("you lost");
        let result = document.querySelector('#results')
        let round = document.createElement('div')
        round.textContent = "you lost"
        result.appendChild(round)
        lostCount++
        return lostCount

    
    


 
    }
    
    if (lostCount==4){
        console.log("COMPUTER WON")
        document.getElementById("finalResult").innerHTML = "COMPUTER FINISHED THE PLAYER";
    }
}

console.log(wonCount)
console.log(drawCount)
console.log(lostCount)







//function game(){
//    for (let i=0; i<5; i++){
//        getComputerChoice(); 
//        let computerSelection = getComputerChoice();
//        console.log("player selected",playerSelection);
//        console.log("computer selected",computerSelection);
//        console.log(playRound(playerSelection,computerSelection));   
//    }
//}   


const rock = document.querySelector('#rock');
rock.addEventListener('click', () => playRound("rock"));

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => playRound("paper"));

const scissor = document.querySelector('#scissor');
scissor.addEventListener('click', () => playRound("scissor"));

if (lostCount==4){
    console.log("COMPUTER WON")
    document.getElementById("finalResult").innerHTML = "COMPUTER FINISHED THE PLAYER";
}

//if (finalResult == "you won"){
//    wonCount++
//} else if (finalResult == "draw"){
//    drawCount++
//} else if (finalResult == "you lost"){
//    lostCount++
//}
//




