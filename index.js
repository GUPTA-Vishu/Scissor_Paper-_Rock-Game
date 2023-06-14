function openDialog() {
  document.getElementById("dialogBox").style.display = "block";
}

function closeDialog() {
  document.getElementById("dialogBox").style.display = "none";
}

let compScore = 0;
let upScore = 0;
let userChoiceCount = 0;

const result_div = document.querySelector(".matchScreen");
const intro = document.querySelector(".playerSpot");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const spot4_img = document.querySelector(".spot4 img");
const spot5_img = document.querySelector(".spot5 img");
const Textwinn = document.querySelector(".winner-text");
const playerScore = document.querySelector(".score");
playerScore.innerHTML = upScore;
const compScore_span = document.querySelector(".comp-Score");
compScore_span.innerHTML = compScore;
const playButton = document.querySelector(".playAgain");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomNumber = Math.floor(Math.floor(Math.random() * 3));
  return choices[randomNumber];
}

getComputerChoice();

function game(userChoice) {
  const computerChoice = getComputerChoice();
  console.log("user choice is =" + userChoice);
  console.log("comnputer choice is=" + computerChoice);

  if (userChoice === "rock" && computerChoice === "scissor") {
    result_div.style.visibility = "visible";
    intro.style.visibility = "hidden";
    spot4_img.setAttribute("src", "stone.png");
    spot5_img.setAttribute("src", "scissors.png");
    Textwinn.innerHTML = "YOU WIN";
    upScore++;
    playerScore.innerHTML = upScore;
  } else if (userChoice === "rock" && computerChoice === "paper") {
    result_div.style.visibility = "visible";
    intro.style.visibility = "hidden";
    spot4_img.setAttribute("src", "stone.png");
    spot5_img.setAttribute("src", "hand.png");
    Textwinn.innerHTML = "YOU LOSE";
    compScore++;
    compScore_span.innerHTML = compScore;
  } else if (userChoice === "paper" && computerChoice === "rock") {
    result_div.style.visibility = "visible";
    intro.style.visibility = "hidden";
    spot4_img.setAttribute("src", "hand.png");
    spot5_img.setAttribute("src", "stone.png");
    Textwinn.innerHTML = "YOU WIN";
    upScore++;
    playerScore.innerHTML = upScore;
  } else if (userChoice === "paper" && computerChoice === "scissor") {
    result_div.style.visibility = "visible";
    intro.style.visibility = "hidden";
    Textwinn.innerHTML = "YOU LOSE";
    compScore++;
    compScore_span.innerHTML = compScore;
    spot4_img.setAttribute("src", "hand.png");
    spot5_img.setAttribute("src", "scissors.png");
  } else if (userChoice === "scissor" && computerChoice === "paper") {
    result_div.style.visibility = "visible";
    intro.style.visibility = "hidden";
    spot4_img.setAttribute("src", "scissors.png");
    spot5_img.setAttribute("src", "hand.png");
    Textwinn.innerHTML = "YOU WIN";
    upScore++;
    playerScore.innerHTML = upScore;
  } else if (userChoice === "scissor" && computerChoice === "rock") {
    result_div.style.visibility = "visible";
    intro.style.visibility = "hidden";
    spot4_img.setAttribute("src", "scissors.png");
    spot5_img.setAttribute("src", "stone.png");
    Textwinn.innerHTML = "YOU LOSE";
    compScore++;
    compScore_span.innerHTML = compScore;
  } else if (userChoice === "rock" && computerChoice === "rock") {
    result_div.style.visibility = "visible";
    intro.style.visibility = "hidden";
    spot4_img.setAttribute("src", "stone.png");
    spot5_img.setAttribute("src", "stone.png");
    Textwinn.innerHTML = "IT'S A TIE";
  } else if (userChoice === "paper" && computerChoice === "paper") {
    result_div.style.visibility = "visible";
    intro.style.visibility = "hidden";
    spot4_img.setAttribute("src", "hand.png");
    spot5_img.setAttribute("src", "hand.png");
    Textwinn.innerHTML = "IT'S A TIE";
  } else if (userChoice === "scissor" && computerChoice === "scissor") {
    result_div.style.visibility = "visible";
    intro.style.visibility = "hidden";
    spot4_img.setAttribute("src", "scissors.png");
    spot5_img.setAttribute("src", "scissors.png");
    Textwinn.innerHTML = "IT'S A TIE";
  }
}

playButton.addEventListener("click", function () {
  result_div.style.visibility = "hidden";
  intro.style.visibility = "visible";
});

function main() {
  rock_div.addEventListener("click", function () {
    game("rock");
  });

  paper_div.addEventListener("click", function () {
    game("paper");
  });

  scissors_div.addEventListener("click", function () {
    game("scissor");
  });
}

main();
