const MIN = 1; 
const MAX = 3;   





let cardDeck = document.querySelectorAll(".card");  
let resetBtn = document.querySelector(".reset_btn");
// let computerChoice = '';

let win = 0; 
let loss = 0; 

let playerScore = document.querySelector(".win");  
let computerScore = document.querySelector(".loss"); 
let display = document.querySelector(".vs"); 


function graphicUpdateRock(choice){
    if(choice == "Rock"){
        console.log("draw");  
        display.innerHTML = "DRAW"; 
    } else if(choice == "Paper"){
        console.log("lose");  
        lossUp(); 
        computerScore.innerHTML = loss; 
        display.innerHTML = "LOST"; 
    } else{
        console.log("win"); 
        winUp();
        playerScore.innerHTML = win; 
        display.innerHTML = "WIN"; 
        
    } 

}  
function graphicUpdatePaper(choice){
    if(choice == "Paper"){
        console.log("draw");  
        display.innerHTML = "DRAW";
    } else if(choice == "Scissors"){
        console.log("lose");  
        lossUp(); 
        computerScore.innerHTML = loss; 
        display.innerHTML = "LOST"; 
    } else{
        console.log("win"); 
        winUp();
        playerScore.innerHTML = win; 
        display.innerHTML = "WIN"; 
        
    } 
}
function graphicUpdateScissors(choice){
    if(choice == "Scissors"){
        console.log("draw");  
        display.innerHTML = "DRAW";
    } else if(choice == "Rock"){
        console.log("lose");  
        lossUp(); 
        computerScore.innerHTML = loss; 
        display.innerHTML = "LOST"; 
    } else{
        console.log("win"); 
        winUp();
        playerScore.innerHTML = win; 
        display.innerHTML = "WIN"; 
        
    } 
}
function winUp(){
    win++;
} 

function lossUp(){
    loss++;
}

function reset(){
    resetBtn.addEventListener('click', function(){
        win = 0; 
        loss = 0; 
        display.innerHTML = "VS";   
        playerScore.innerHTML = "0";
        computerScore.innerHTML = "0";
        console.log("reset");
    })
}

function matchSet(){
    
}

// handles the main game logic
function cardSelect(){  
   
    cardDeck.forEach(function(card){ 
            card.addEventListener('click', function(){    

                // Ends the game after 5 rounds
                if(win >= 5 || loss >= 5){
                    console.log("Game end!") 
                    return true;
                }
                // the computer makes it's selection at the same time as the player 
                let computerChoice = computerPlay(); 
                if(card.className == "rock card"){   
                    console.log(`Rock vs ${computerChoice}`)  
                    graphicUpdateRock(computerChoice); 
                } else if(card.className == "paper card"){   
                    console.log(`Paper vs ${computerChoice}`)  
                    graphicUpdatePaper(computerChoice); 
                } else{
                    console.log(`Scissors vs ${computerChoice}`)  
                    graphicUpdateScissors(computerChoice); 
                }
                console.log(`${win} | ${loss}`)
            })
        
    }) 
}

// Generates random number(1-3). 1.Rock 2.Paper 3.Scissors
function randomNumber(min,max){
    return Math.floor(Math.random() * max) + min  
}

// Uses the random number function to determine computer choice.
function computerPlay(){ 
    let choice = randomNumber(MIN,MAX);  
    if(choice === 1) return "Rock";  
    else if(choice === 2) return 'Paper'; 
    else return 'Scissors';
}  

// Handles the game logic
function game(){ 
     cardSelect();    
     reset();
    

} 

game();








