let computerNumber;
let computerChoice;
let userChoice;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const buttons = document.querySelectorAll("div button");

// When user clicks on a button the computer generates a random number which is associated with a value (rock, paper or scissors)
buttons.forEach((button) =>
  button.addEventListener("click", () => {
    randomNumber();
  })
);

// Add an eventlistener to the different buttons and defines the user choice as either rock, paper or scissors and then runs the userChooses function
rock.addEventListener("click", function () {
  userChoice = "rock";
  userChooses();
});
paper.addEventListener("click", function () {
  userChoice = "paper";
  userChooses();
});
scissors.addEventListener("click", function () {
  userChoice = "scissors";
  userChooses();
});

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

// The computer chooses a random number and that number is associated to either rock, paper or scissors which is logged in the console.log
function computerChooses() {
  if (computerNumber == 1) {
    computerChoice = "rock";
  } else if (computerNumber == 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  console.log("computer", computerChoice);
}

function userChooses() {
  if (userChoice == rock) {
    userNumber = "1";
  } else if (userChoice == paper) {
    userNumber = "2";
  } else if (userChoice == scissors) {
    userNumber = "3";
  }
  console.log("user", userChoice);
}
