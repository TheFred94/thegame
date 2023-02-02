let computerNumber;
let computerChoice;
const buttons = document.querySelectorAll("div button");

// When user clicks on a button the computer generates a random number which is associated with a value (rock, paper or scissor)
buttons.forEach((button) => button.addEventListener("click", randomNumber));

// Loads the DOM and runs the start function which generates a random number
window.addEventListener("load", function () {
  start();
});

// Shows that the site is loaded and generates a random number
function start() {
  console.log("start");
}

// Generates a random number and show it in the console.log
function randomNumber() {
  computerNumber = Math.floor(Math.random() * 3) + 1;
  console.log(computerNumber);
  computerChooses();
}

// The computer chooses a random number and that number is associated to either rock, paper or scissor which is logged in the console.log
function computerChooses() {
  if (computerNumber == 1) {
    computerChoice = "rock";
  } else if (computerNumber == 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissor";
  }
  console.log(computerChoice);
}
