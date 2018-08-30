/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var globalScore,roundScore;
var currentPlayer;
var runnGame= true;

start();



document.querySelector(".btn-roll").addEventListener("click", newGame);

document.querySelector(".btn-new").addEventListener("click", start);
document.querySelector(".btn-hold").addEventListener("click", hold);



function start() {
	currentPlayer=0;
	globalScore=[0,0];
	roundScore=0;

	document.getElementById("score-0").textContent = "0";
	document.getElementById("current-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-1").textContent = "0";
	document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
	
	document.querySelector(".player-0-panel").classList.add("active");
	
	
	
}


//RollDice Function
function newGame(){
	if (runnGame){
		var rollDice=  Math.floor((Math.random()*6))+ 1;
		var diceRes;
		diceRes= document.querySelector(".dice");
		
		diceRes.src= "dice-" +rollDice+".png";		
		
		if (rollDice !== 1) {
            
			roundScore+= rollDice;
			document.getElementById("current-" + currentPlayer).textContent= roundScore;
			
		} else {
			   roundScore=0;
			   if (currentPlayer ===0) {
				   document.querySelector(".player-"+ currentPlayer +"-panel").classList.remove("active");
				   currentPlayer =1;
				   document.querySelector(".player-"+ currentPlayer +"-panel").classList.add("active");
			   }   else {
					   document.querySelector(".player-"+ currentPlayer +"-panel").classList.remove("active");
					   currentPlayer =0; 
					   document.querySelector(".player-"+ currentPlayer +"-panel").classList.add("active");
				   }
			   
			    document.getElementById("current-0").textContent = "0";
                document.getElementById("current-1").textContent = "0";
			    
			   
			   
			   
		   }
	
	}		
}
//hold button function 
function hold() {
	if (runnGame) {
		
		globalScore[currentPlayer]+=roundScore;
	    if (globalScore[currentPlayer] >=100) {
				document.getElementById("name-" + currentPlayer).textContent = "You won";
				runnGame=false;
		
		}  else{
			roundScore=0;
			if (currentPlayer ===0) {
				document.querySelector(".player-"+ currentPlayer +"-panel").classList.remove("active");
				 currentPlayer =1;
				 document.querySelector(".player-"+ currentPlayer +"-panel").classList.add("active");
			}  else {
					document.querySelector(".player-"+ currentPlayer +"-panel").classList.remove("active");
					currentPlayer =0; 
					document.querySelector(".player-"+ currentPlayer +"-panel").classList.add("active");
				   }
			   
			    document.getElementById("current-0").textContent = "0";
                document.getElementById("current-1").textContent = "0";
				
			
		}
		
		
		
		
	
}
}

