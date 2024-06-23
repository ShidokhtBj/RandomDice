window.addEventListener("load", () => {
  document.getElementById("loading").style.opacity = "1";
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
  }, 3500);

  setTimeout(() => {
    document.getElementById("dice").style.display = "grid";
    document.getElementById("start").style.display = "flex";
    document.getElementById("start").style.opacity = "1";
    document.getElementById("dice").style.opacity = "1";
  }, 4000);
});

function rollDice() {
  const dice = [...document.querySelectorAll(".die-list")];
  dice.forEach((die) => {
    toggleClasses(die);
    die.dataset.roll = getRandomNumber(1, 6);
    const diceNumber = die.dataset.roll = getRandomNumber(1, 6);
    const starter = Math.floor(Math.random() * 2) + 1;
    console.log(starter + "p1");
    console.log(diceNumber + "d1");
    if (starter === 1) {
      
      sumPlayer_1 += diceNumber;
      ScorePlayer_1.innerHTML = sumPlayer_1;
    } else {
      sumPlayer_2 += diceNumber;
      ScorePlayer_2.innerHTML = sumPlayer_2;
    }
  });
}

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("roll-button").addEventListener("click", rollDice);

const btn_start = document.getElementById("start");
const btn_dice = document.getElementById("roll-button");
const btn_get = document.getElementById("get-button");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const Player1 = document.getElementById("Player1");
const Player2 = document.getElementById("Player2");
const first_player_field = document.getElementById("first_player_field");
const second_player_field = document.getElementById("second_player_field");
const ScorePlayer_1 = document.getElementById("ScorePlayer_1");
const ScorePlayer_2 = document.getElementById("ScorePlayer_2");
const sumPlayer_1 = 0;
const sumPlayer_2 = 0;

btn_start.addEventListener("click", function () {
  btn_start.style.opacity = "0";
  setTimeout(() => {
    btn_start.style.display = "none";
  }, 1000);

  btn_dice.style.display = "inline-block";
  btn_get.style.display = "inline-block";
  player1.style.display = "flex";
  player2.style.display = "flex";
  setTimeout(() => {
    btn_dice.style.opacity = "1";
    btn_get.style.opacity = "1";
    player1.style.opacity = "1";
    player2.style.opacity = "1";
    
    const starter = Math.floor(Math.random() * 2) + 1;
    console.log(starter + "p2");
    if (starter === 1) {
      player1.style.color = "#fff";
      player2.style.color = "#2b2b2b";
      second_player_field.style.background = "none";
    } else {
      player2.style.color = "#fff";
      player1.style.color = "#2b2b2b";
      first_player_field.style.background = "none";
    }
  }, 0);
});
