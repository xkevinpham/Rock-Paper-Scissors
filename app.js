const game = () => {
    let pScore = 0;
    let cScore = 0;


    const startGame = () =>{
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };



//Play
const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playersHand = document.querySelector(".playerHand");
    const computersHand = document.querySelector(".computerHand");
    const hands = document.querySelectorAll(".hands img");

    /*
    hands.forEach(hand => {
        hand.addEventListener("animationed", function() {
            this.style.animation ="";
        });
    });
*/


//Comp option
const computerOptions = ["rock", "paper", "scissors"];

options.forEach(option => {
    option.addEventListener("click", function() {
        //Comp's choice
        const computerNumber = Math.floor(Math.random()*3);
        const computersChoice = computerOptions[computerNumber];

        playersHand.src = `./img/${this.textContent}`.png;
        computersHand.src =`./img/${computersChoice}`.png;


        });
    });
};

//Comparing both hands
const compareHands = (playersChoice, computersChoice) => {
    const winner = document.querySelector('.winner');

    if(playersChoice === computersChoice){
        winner.textContent = "It is a tie";
        return;
    }




//Player chooses rock
    if(playersChoice === "rock"){
        if(computersChoice === "scisssors"){
            winner.textContent = "Player Wins"
        }else{
            winner.textContent = "Computer Wins";
            return;
        }
    }

//Player chooses paper   
    if(playersChoice === "paper"){
        if(computersChoice === "scisssors"){
            winner.textContent = "Computer Wins"
            return;
            }else{
             winner.textContent = "Player Wins";
             return;
             }
         }

//Player chooses scissors
    if(playersChoice === "scissors"){
        if(computersChoice === "rock"){
            winner.textContent = "Computer Wins"
            return;
        }else{
             winner.textContent = "Player Wins";
             return;
             }
         }
    }


/*
//Score updater
const updateScore = () => {
    const playerScores = document.querySelector(".playerScore p");
    const cpuScores = document.querySelector(".cpuScore p");
    playerScores.textContent = pScore;
    cpuScores.textContent = cScore;
};
*/


startGame();
playMatch();

};

game();
