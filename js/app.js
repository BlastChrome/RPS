const MIN = 1; 
const MAX = 3;   

let playerDeck = document.querySelectorAll(".card");   
let cpuDeck = document.querySelectorAll('.cpu_deck');
let resetBtn = document.querySelector(".reset_btn"); 


let win = 0; 
let loss = 0; 

let playerScore = document.querySelector(".win");  
let computerScore = document.querySelector(".loss"); 
let display = document.querySelector(".vs"); 


function graphicUpdateRock(choice){ 

    if(choice == "Rock"){ 
        cpuCardGUI();
        display.innerHTML = "DRAW";  
        cpuDeck[2].classList.add("focus");
    } else if(choice == "Paper"){ 
        cpuCardGUI();
        lossUp(); 
        computerScore.innerHTML = loss; 
        display.innerHTML = "LOST";  
        cpuDeck[1].classList.add("focus");
    } else{ 
        cpuCardGUI();
        console.log("win"); 
        winUp();
        playerScore.innerHTML = win; 
        display.innerHTML = "WIN";  
        cpuDeck[0].classList.add("focus");
        
    } 

}  
function graphicUpdatePaper(choice){
    if(choice == "Paper"){
        cpuCardGUI();
        display.innerHTML = "DRAW"; 
        cpuDeck[1].classList.add("focus");
    } else if(choice == "Scissors"){
        cpuCardGUI();
        lossUp(); 
        computerScore.innerHTML = loss; 
        display.innerHTML = "LOST";  
        cpuDeck[0].classList.add("focus");
    } else{
        cpuCardGUI();
        winUp();
        playerScore.innerHTML = win; 
        display.innerHTML = "WIN";  
        cpuDeck[2].classList.add("focus");

        
    } 
}
function graphicUpdateScissors(choice){
    if(choice == "Scissors"){
        cpuCardGUI();
        display.innerHTML = "DRAW"; 
        cpuDeck[0].classList.add("focus");
    } else if(choice == "Rock"){  
        cpuCardGUI();
        lossUp(); 
        computerScore.innerHTML = loss; 
        display.innerHTML = "LOST";  
        cpuDeck[2].classList.add("focus");
    } else{
        cpuCardGUI()
        winUp();
        playerScore.innerHTML = win; 
        display.innerHTML = "WIN";  
        cpuDeck[1].classList.add("focus");
        
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
        display.classList.remove("winner"); 
        display.classList.remove("loser");
        playerScore.innerHTML = "0";
        computerScore.innerHTML = "0";
        cpuDeck.forEach(card =>{
            card.classList.remove("focus");
        })
    })
}

function gameSet(){
    if(win === 5 || loss === 5){

        if(win == 5){
            display.classList.add("winner"); 
            console.log(win);
        } else{
            display.classList.add("loser"); 
            console.log(loss);
        }
        return true;
    } 
}

function cpuCardGUI(){ 



    cpuDeck.forEach(card => {
        if(card.classList.contains("focus")){
            card.classList.remove("focus");
        }
    })
}


// handles the main game logic
function cardSelect(){  
   
    playerDeck.forEach(function(card){ 
            card.addEventListener('click', function(){    

                // Ends the game after 5 rounds
                let end = gameSet(); 
                if(end) return true;
                
                // the computer makes it's selection at the same time as the player 
                let computerChoice = computerPlay(); 
                if(card.className == "rock card"){    
 
                    graphicUpdateRock(computerChoice); 
                } else if(card.className == "paper card"){    
                    graphicUpdatePaper(computerChoice); 
                } else{ 
                    graphicUpdateScissors(computerChoice); 
                }
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








