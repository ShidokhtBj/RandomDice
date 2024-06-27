// windows load action
window.addEventListener("load", () => {
  document.getElementById("loading").style.opacity = "1";
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
  }, 3500);

  setTimeout(() => {
    document.getElementById("dice-container").style.display = "flex";
    document.getElementById("start").style.display = "flex";
    document.getElementById("start").style.opacity = "1";
    document.getElementById("dice-container").style.opacity = "1";
  }, 4000);
});

const btn_start = document.getElementById("start");
const btn_dice = document.getElementById("rollDiceBtn");
const btn_Hold = document.getElementById("Hold-button");
const btn_New = document.getElementById("NewGame");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const first_player_field = document.getElementById("first_player_field");
const second_player_field = document.getElementById("second_player_field");

btn_start.addEventListener("click", function () {
  btn_start.style.opacity = "0";
  setTimeout(() => {
    btn_start.style.display = "none";
  }, 1000);

  btn_dice.style.display = "inline-block";
  btn_Hold.style.display = "inline-block";
  btn_New.style.display = "inline-block";
  player1.style.display = "flex";
  player2.style.display = "flex";
  setTimeout(() => {
    btn_dice.style.opacity = "1";
    btn_Hold.style.opacity = "1";
    btn_New.style.opacity = "1";
    player1.style.opacity = "1";
    player2.style.opacity = "1";
  }, 0);
});

let randomPlayer = 2;
let sumOfRolls_1 = 0;
let sumOfRolls_2 = 0;
btn_dice.addEventListener("click", () => {
  const dice = document.getElementById("dice");
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber);
  let rotateX = 0;
  let rotateY = 0;

  if (randomPlayer === 1) {
    first_player_field.classList.add("first_field_bg_display");
    first_player_field.classList.remove("first_field_bg_hidden");
    second_player_field.classList.remove("second_field_bg_display");
    second_player_field.classList.add("second_field_bg_hidden");
    switch (randomNumber) {
      case 1:
        rotateX = 0;
        rotateY = 0;
        //  alert("player1 loses trun");
        first_player_field.classList.remove("first_field_bg_display");
        first_player_field.classList.add("first_field_bg_hidden");
        second_player_field.classList.add("second_field_bg_display");
        second_player_field.classList.remove("second_field_bg_hidden");
        document.getElementById("sumOfRolls_1").textContent = 0;
        sumOfRolls_1 = 0;
        randomPlayer = 2;
        break;
      case 2:
        rotateX = 0;
        rotateY = 180;
        sumOfRolls_1 += randomNumber;
        break;
      case 3:
        rotateX = 0;
        rotateY = 90;
        sumOfRolls_1 += randomNumber;
        break;
      case 4:
        rotateX = 0;
        rotateY = -90;
        sumOfRolls_1 += randomNumber;
        break;
      case 5:
        rotateX = -90;
        rotateY = 0;
        sumOfRolls_1 += randomNumber;
        break;
      case 6:
        rotateX = 90;
        rotateY = 0;
        sumOfRolls_1 += randomNumber;
        break;
    }

    document.getElementById("sumOfRolls_1").textContent = sumOfRolls_1;
  } else if (randomPlayer === 2) {
    first_player_field.classList.remove("first_field_bg_display");
    first_player_field.classList.add("first_field_bg_hidden");
    second_player_field.classList.add("second_field_bg_display");
    second_player_field.classList.remove("second_field_bg_hidden");
    switch (randomNumber) {
      case 1:
        rotateX = 0;
        rotateY = 0;
        // alert("player2 loses trun");
        first_player_field.classList.add("first_field_bg_display");
        first_player_field.classList.remove("first_field_bg_hidden");
        second_player_field.classList.remove("second_field_bg_display");
        second_player_field.classList.add("second_field_bg_hidden");

        document.getElementById("sumOfRolls_2").textContent = 0;
        sumOfRolls_2 = 0;
        randomPlayer = 1;
        break;
      case 2:
        rotateX = 0;
        rotateY = 180;
        sumOfRolls_2 += randomNumber;
        break;
      case 3:
        rotateX = 0;
        rotateY = 90;
        sumOfRolls_2 += randomNumber;
        break;
      case 4:
        rotateX = 0;
        rotateY = -90;
        sumOfRolls_2 += randomNumber;
        break;
      case 5:
        rotateX = -90;
        rotateY = 0;
        sumOfRolls_2 += randomNumber;
        break;
      case 6:
        rotateX = 90;
        rotateY = 0;
        sumOfRolls_2 += randomNumber;
        break;
    }

    document.getElementById("sumOfRolls_2").textContent = sumOfRolls_2;
  }
  dice.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

let holdSum_1 = 0;
let holdSum_2 = 0;
const sumOfRoll_1 = document.getElementById("sumOfRolls_1");
const sumOfRoll_2 = document.getElementById("sumOfRolls_2");
const sumOfHoldScore_1 = document.getElementById("sumOfHoldScore_1");
const sumOfHoldScore_2 = document.getElementById("sumOfHoldScore_2");
btn_Hold.addEventListener("click", function () {
  if (randomPlayer === 1) {
    holdSum_1 = holdSum_1 + sumOfRolls_1;
    console.log(holdSum_1 + "hold1");
    sumOfHoldScore_1.textContent = holdSum_1;
    sumOfRolls_1 = 0;
    sumOfRoll_1.textContent = sumOfRolls_1;
    //  alert("player1 loses trun");
    first_player_field.classList.remove("first_field_bg_display");
    first_player_field.classList.add("first_field_bg_hidden");
    second_player_field.classList.add("second_field_bg_display");
    second_player_field.classList.remove("second_field_bg_hidden");
    randomPlayer = 2;
    if (holdSum_1 >= 30) {
      alert("player 1 is winner");
    }
  } else if (randomPlayer === 2) {
    holdSum_2 = holdSum_2 + sumOfRolls_2;
    console.log(holdSum_2 + "hold2");
    sumOfHoldScore_2.textContent = holdSum_2;
    sumOfRolls_2 = 0;
    sumOfRoll_2.textContent = sumOfRolls_2;
    // alert("player2 loses trun");
    first_player_field.classList.add("first_field_bg_display");
    first_player_field.classList.remove("first_field_bg_hidden");
    second_player_field.classList.remove("second_field_bg_display");
    second_player_field.classList.add("second_field_bg_hidden");
    randomPlayer = 1;
    if (holdSum_2 >= 30) {
      alert("player 2 is winner");
    }
  }
});

const cover = document.getElementById("cover");
const loading = document.getElementById("loadingText");
btn_New.addEventListener("click", function () {
  cover.classList.add("cover_display");
  cover.classList.remove("cover_hidden");
  cover.style.display = "flex";
  setTimeout(() => {
    cover.classList.remove("cover_display");
    cover.classList.add("cover_hidden");
    randomPlayer = 2;
    sumOfRoll_1.textContent = 0;
    sumOfRolls_1 = 0;
    sumOfRoll_2.textContent = 0;
    sumOfRolls_2 = 0;
    sumOfHoldScore_1.textContent = 0;
    holdSum_1 = 0;
    sumOfHoldScore_2.textContent = 0;
    holdSum_2 = 0;
    first_player_field.classList.remove("first_field_bg_display");
    first_player_field.classList.add("first_field_bg_hidden");
    second_player_field.classList.add("second_field_bg_display");
    second_player_field.classList.remove("second_field_bg_hidden");
    setTimeout(() => {
      cover.style.display = "none";
    }, 1000);
  }, 10000);
});
