const MIN = 1; 
const MAX = 3;  

// Generates random number(1-3). 1.Rock 2.Paper 3.Scissors
function randomNumber(min,max){
    return Math.floor(Math.random() * max) + min  
}


// Uses the random number function to determine computer choice.
function computerPlay(){ 
    let choice = randomNumber(MIN,MAX);  
    if(choice === 1) return 'Rock';  
    else if(choice === 2) return 'Paper'; 
    else return 'Scissors';
}  

// takes input from the user
function playerPlay(){
    choice = prompt("Please Enter R P or S");  
    
    if(choice === 'r' || choice === 'R') return 'Rock';  
    else if (choice === 'p' || choice === 'P') return 'Paper';
    else if (choice === 's' || choice === 'S') return 'Scissors';
    
}

function game(){  
    let redo = false; 
    let win = 0; 
    let loss = 0;
    do{
        let computer = computerPlay();
        let player = playerPlay(); 
    
    
        console.log(`player: ${player} CPU: ${computer}  ${win}/${loss} `);
    
        if(player === computer) console.log("Draw");  
        else if(player === "Rock" && computer == "Paper" ) {console.log("You Lose"); loss++;}
        else if(player === "Paper" && computer == "Rock" ) { console.log("You Win"); win++;}
    
        else if(player === "Scissors" && computer == "Rock" ){ console.log("You Lose"); loss++}
        else if(player === "Rock" && computer == "Scissors" ){ console.log("You Win"); win++;} 
    
        else if(player === "Paper" && computer == "Scissors" ){ console.log("You Loe"); loss++;}  
        else if(player === "Scissors" && computer == "Paper" ){ console.log("You Win"); win++;} 

        let playAgain = prompt("Play again?(Y/N): "); 
        if(playAgain === 'Y' || playAgain === 'y') redo = true;
        else redo = false; 

    } while( redo === true);
}  


game();



