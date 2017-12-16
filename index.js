let userPoints = 0;
let compPoints = 0;

const computerPlay = () => {
  let computerChoice = Math.round(Math.random() * 2) + 1;

  if (computerChoice === 1) {
    computerChoice = "rock";
  } else if (computerChoice === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
};

const playRound = (player, comp) => {
  console.log(`player's choice => ${player}`);
  console.log(`computer's choice => ${comp}`);

  if (player === "rock" && comp === "scissors") {
    userPoints++;
  }
  if (player === "rock" && comp === "paper") {
    compPoints++;
  }
  if (player === "paper" && comp === "rock") {
    userPoints++;
  }
  if (player === "paper" && comp === "scissors") {
    compPoints++;
  }
  if (player === "scissors" && comp === "rock") {
    compPoints++;
  }
  if (player === "scissors" && comp === "paper") {
    userPoints++;
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt(`rock, paper or scissors?`).toLowerCase();
    if (![" ", "scissors", "rock", "paper"].includes(playerChoice)) {
      console.error("Please enter a correct value");
      return;
    }

    let computerChoice = computerPlay();
    playRound(playerChoice, computerChoice);
  }

  if (userPoints > compPoints) {
    console.warn("Victory!");
  } else if (userPoints === compPoints) {
    console.warn("Draw ...");
  } else {
    console.warn("Defeat =(");
  }
  console.log(`userPoints = ${userPoints}`);
  console.log(`compPoints = ${compPoints}`);
};

const start = document.querySelector(".start");
start.addEventListener("click", game);
