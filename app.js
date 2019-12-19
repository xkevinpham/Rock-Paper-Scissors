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



//Comp option
const computerOptions = ["Rock", "Paper", "Scissors"];

options.forEach(option => {
    option.addEventListener("click", function() {
        //Comp's choice
        const computerNumber = Math.floor(Math.random()*3);
        const computersChoice = computerOptions[computerNumber];

        compareHands(this.textContent, computersChoice);

        playersHand.src = `./img/${this.textContent}.png`;
        computersHand.src =`./img/${computersChoice}.png`;
        

        });
    });
};

//Score updater
const updateScore = () => {
    const playersScores = document.querySelector(".playerScore p");
    const cpusScores = document.querySelector(".cpuScore p");
    playersScores.textContent = pScore;
    cpusScores.textContent = cScore;
};



//Comparing both hands
const compareHands = (playersChoice, computersChoice) => {
    const winner = document.querySelector(".winner");

    if(playersChoice === computersChoice){
        winner.textContent = "It is a tie";
        return;
    }


//Player chooses rock
    if(playersChoice === "Rock"){
        if(computersChoice === "Scissors"){
            winner.textContent = "Player Wins";
            pScore++;
            updateScore();
        }else{
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            return;
        }
    }

//Player chooses paper   
    if(playersChoice === "Paper"){
        if(computersChoice === "Scissors"){
            winner.textContent = "Computer Wins";
            cScore++
            updateScore();
            return;
            }else{
             winner.textContent = "Player Wins";
             pScore++;
             updateScore();
             return;
             }
         }

//Player chooses scissors
    if(playersChoice === "Scissors"){
        if(computersChoice === "Rock"){
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            return;
        }else{
             winner.textContent = "Player Wins";
             pScore++;
             updateScore();
             return;
             }
         }
    };




startGame();
playMatch();

};

game();
