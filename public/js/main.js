window.addEventListener('load',() => {
  
  document.getElementById('loading').style.opacity="0.8";
  setTimeout(() => {
    document.getElementById('loading').style.display="none";
  }, 3500);

  setTimeout(() => {
    document.getElementById('start').style.opacity="1";
    document.getElementById('dice').style.opacity="1";
    document.getElementById('dice').style.display="grid";
    document.getElementById('start').style.display="flex";
  }, 4000);
});

function rollDice() {
    const dice = [...document.querySelectorAll(".die-list")];
    dice.forEach(die => {
      toggleClasses(die);
      die.dataset.roll = getRandomNumber(1, 6);
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
  
  
  const btn_start=document.getElementById('start');
  const btn_dice=document.getElementById('roll-button');
  const btn_get=document.getElementById('get-button');
  btn_start.addEventListener("click" , function () {
      btn_start.style.opacity="0";
      setTimeout(() => {
        btn_start.style.display="none";
      }, 1000);
  
      btn_dice.style.display="inline-block";
      btn_get.style.display="inline-block";
      setTimeout(() => {
        btn_dice.style.opacity="1";
        btn_get.style.opacity="1";
      }, 0);
  });