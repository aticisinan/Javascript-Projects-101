const playerOne = document.getElementById("playerOne");
const playerOneScore = document.getElementById("playerOneScore");
const playerTwo = document.getElementById("playerTwo");
const playerTwoScore = document.getElementById("playerTwoScore");

const playerRock = document.getElementById("playerRock");
const playerHand = document.getElementById("playerHand");
const playerScissors = document.getElementById("playerScissors");

const playerTwoRock = document.getElementById("playerTwoRock");
const playerTwoHand = document.getElementById("playerTwoHand");
const playerTwoScissors = document.getElementById("playerTwoScissors");

const resetButton = document.querySelector(".reset");
const resultText = document.getElementById("resultText");


const allGamesIcons = document.querySelectorAll(".icon");
let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = "";

const choices = {
  rock: {name: "Rock", win:["scissors"]},
  paper: {name: "Paper", win:["rock"]},
  scissors: {name: "Scissors", win:["paper"]}
}

function resetSelected(){
  allGamesIcons.forEach(icon=>{
    icon.classList.remove("selected");
  })
}


function computerRandomSelect(){
  const computerChoiceNumber = Math.random();
  if(computerChoiceNumber < 0.3){
    computerChoice = "rock";
  }else if(computerChoiceNumber <= 0.65){
    computerChoice = "paper";
  }else if(computerChoiceNumber <= 1){
    computerChoice = "scissors";
  }
}

function displayComputerChoice(){
  switch(computerChoice){
    case "rock": 
      playerTwoRock.classList.add("selected");
      playerTwo.textContent = "--- Taş";
    break;
    case "paper": 
      playerTwoHand.classList.add("selected");
      playerTwo.textContent = "--- Kağıt";
    break;
    case "scissors": 
      playerTwoScissors.classList.add("selected");
      playerTwo.textContent = "--- Makas";
    break;
  }
}

function updateScore(playerChoice){
  if(playerChoice === computerChoice){
    resultText.textContent = "Berabere";
  }else{
    const choice = choices[playerChoice];
    if(choice.win.indexOf(computerChoice) === 0){
      resultText.textContent = "Player 1 Kazandı";
      playerScoreNumber++;;
      playerOneScore.textContent = playerScoreNumber;
    
    }else{
      resultText.textContent = "Player 2 Kazandı";
      computerScoreNumber++;
      playerTwoScore.textContent = computerScoreNumber;

    }
  }
}

function checkResult(playerChoice){
  resetSelected();
  computerRandomSelect();
  displayComputerChoice();
  updateScore(playerChoice);
}

function resetAll(){
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerOneScore.textContent= 0;
  playerTwoScore.textContent = 0;
  playerOne.textContent = "---";
  playerTwo.textContent = "---";
  resultText.textContent = "";
  allGamesIcons.forEach(icon=>{
    icon.classList.remove("selected");
  })
}


function select(playerChoice){
  checkResult(playerChoice);
  switch(playerChoice){
    case "rock": 
      playerRock.classList.add("selected");
      playerOne.textContent = "--- Taş";
    break;
    case "paper": 
      playerHand.classList.add("selected");
      playerOne.textContent = "--- Kağıt";
    break;
    case "scissors": 
      playerScissors.classList.add("selected");
      playerOne.textContent = "--- Makas";
    break;
  }
}


