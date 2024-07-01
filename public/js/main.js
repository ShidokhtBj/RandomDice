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
      document.getElementById("end").style.display="block";
      document.getElementById("resultPlayer1").style.right = "0";
      document.getElementById("resultPlayer2").style.left = "0";

      const resultPlayer1 =  "Player1" + `<br>` + "Total Score:" +`<br>` ;
      const result_Player1 = document.getElementById('resultPlayer1');
      const resultPlayer2 =  "Player2" + `<br>` + "Total Score:" +`<br>` ;
      const result_Player2 = document.getElementById('resultPlayer2');
      let index = 0;

      function type() {
        if (index < resultPlayer1.length || index < resultPlayer2.length) {
          if (resultPlayer1.slice(index, index + 4) === '<br>' || resultPlayer2.slice(index, index + 4) === '<br>') {
            result_Player1.innerHTML += '<br>';
            result_Player2.innerHTML += '<br>';
            index += 4;
          } else {
            result_Player1.innerHTML += resultPlayer1[index];
            result_Player2.innerHTML += resultPlayer2[index];
            index++;
          }
          setTimeout(type, 100); // Adjust typing speed here (in milliseconds)
        }
      }

      type();

      setTimeout(() => {
        const Player1counter = document.getElementById('Player1counter');
        const Player2counter = document.getElementById('Player2counter');
        Player1counter.style.opacity="1";
        Player2counter.style.opacity="1";
        Player1counter.style.display="block";
        Player2counter.style.display="block";
      
      let currentNumber1 = 0;
      const targetNumber1 = holdSum_1;
      const speed = 100; // Adjust the speed here (in milliseconds)
    
      function countUp() {
        if (currentNumber1 <= targetNumber1) {
          Player1counter.innerHTML = currentNumber1;
          currentNumber1++;
          setTimeout(countUp, speed);
        }
      }
    
      countUp();

      
      let currentNumber2 = 0;
      const targetNumber2 = holdSum_2;
    
      function countUp2() {
        if (currentNumber2 <= targetNumber2) {
          Player2counter.innerHTML = currentNumber2;
          currentNumber2++;
          setTimeout(countUp2, speed);
        }
      }
    
      countUp2();
      }, 2000);
      
      setTimeout(() => {
        document.getElementById("lost").style.left="20%";
      document.getElementById("win").style.right="23%";
      document.getElementById("lost").style.opacity="1";
      document.getElementById("win").style.opacity="1";
       document.getElementById("lost").style.display="block";
      document.getElementById("win").style.display="block";
      }, 4000);

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
      document.getElementById("end").style.display="block";
      document.getElementById("resultPlayer1").style.right = "0";
      document.getElementById("resultPlayer2").style.left = "0";

      const resultPlayer1 =  "Player1" + `<br>` + "Total Score:" +`<br>` ;
      const result_Player1 = document.getElementById('resultPlayer1');
      const resultPlayer2 =  "Player2" + `<br>` + "Total Score:" +`<br>` ;
      const result_Player2 = document.getElementById('resultPlayer2');
      let index = 0;

      function type() {
        if (index < resultPlayer1.length || index < resultPlayer2.length) {
          if (resultPlayer1.slice(index, index + 4) === '<br>' || resultPlayer2.slice(index, index + 4) === '<br>') {
            result_Player1.innerHTML += '<br>';
            result_Player2.innerHTML += '<br>';
            index += 4;
          } else {
            result_Player1.innerHTML += resultPlayer1[index];
            result_Player2.innerHTML += resultPlayer2[index];
            index++;
          }
          setTimeout(type, 100); // Adjust typing speed here (in milliseconds)
        }
      }

      type();

      setTimeout(() => {
        const Player1counter = document.getElementById('Player1counter');
        const Player2counter = document.getElementById('Player2counter');
        Player1counter.style.opacity="1";
        Player2counter.style.opacity="1";
        Player1counter.style.display="block";
        Player2counter.style.display="block";
      
      let currentNumber1 = 0;
      const targetNumber1 = holdSum_1;
      const speed = 100; // Adjust the speed here (in milliseconds)
    
      function countUp() {
        if (currentNumber1 <= targetNumber1) {
          Player1counter.innerHTML = currentNumber1;
          currentNumber1++;
          setTimeout(countUp, speed);
        }
      }
    
      countUp();

      
      let currentNumber2 = 0;
      const targetNumber2 = holdSum_2;
    
      function countUp2() {
        if (currentNumber2 <= targetNumber2) {
          Player2counter.innerHTML = currentNumber2;
          currentNumber2++;
          setTimeout(countUp2, speed);
        }
      }
    
      countUp2();
      }, 2000);
      
      setTimeout(() => {
        document.getElementById("lost").style.right="20%";
      document.getElementById("win").style.left="25%";
      document.getElementById("lost").style.opacity="1";
      document.getElementById("win").style.opacity="1";
       document.getElementById("lost").style.display="block";
      document.getElementById("win").style.display="block";
      }, 4000);


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


const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');
let fireworks = [];
let particles = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Firework {
  constructor(sx, sy, tx, ty) {
    this.x = sx;
    this.y = sy;
    this.sx = sx;
    this.sy = sy;
    this.tx = tx;
    this.ty = ty;
    this.distanceToTarget = this.calculateDistance(sx, sy, tx, ty);
    this.distanceTraveled = 0;
    this.coordinates = [];
    this.coordinateCount = 3;
    while (this.coordinateCount--) {
      this.coordinates.push([this.x, this.y]);
    }
    this.angle = Math.atan2(ty - sy, tx - sx);
    this.speed = 2;
    this.acceleration = 1.05;
    this.brightness = Math.random() * 50 + 50;
    this.targetRadius = 1;
  }

  calculateDistance(x1, y1, x2, y2) {
    const xDistance = x2 - x1;
    const yDistance = y2 - y1;
    return Math.sqrt(xDistance * xDistance + yDistance * yDistance);
  }

  update(index) {
    this.coordinates.pop();
    this.coordinates.unshift([this.x, this.y]);
    if (this.targetRadius < 8) {
      this.targetRadius += 0.3;
    } else {
      this.targetRadius = 1;
    }
    this.speed *= this.acceleration;
    const vx = Math.cos(this.angle) * this.speed;
    const vy = Math.sin(this.angle) * this.speed;
    this.distanceTraveled = this.calculateDistance(this.sx, this.sy, this.x + vx, this.y + vy);
    if (this.distanceTraveled >= this.distanceToTarget) {
      createParticles(this.tx, this.ty);
      fireworks.splice(index, 1);
    } else {
      this.x += vx;
      this.y += vy;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
    ctx.lineTo(this.x, this.y);
    ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, ${this.brightness}%)`;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(this.tx, this.ty, this.targetRadius, 0, Math.PI * 2);
    ctx.stroke();
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.coordinates = [];
    this.coordinateCount = 5;
    while (this.coordinateCount--) {
      this.coordinates.push([this.x, this.y]);
    }
    this.angle = Math.random() * Math.PI * 2;
    this.speed = Math.random() * 10 + 1;
    this.friction = 0.95;
    this.gravity = 1;
    this.hue = Math.random() * 360;
    this.brightness = Math.random() * 80 + 20;
    this.alpha = 1;
    this.decay = Math.random() * 0.03 + 0.015;
  }

  update(index) {
    this.coordinates.pop();
    this.coordinates.unshift([this.x, this.y]);
    this.speed *= this.friction;
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed + this.gravity;
    this.alpha -= this.decay;
    if (this.alpha <= this.decay) {
      particles.splice(index, 1);
    }
  }

  draw() {
    ctx.beginPath();
    ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
    ctx.lineTo(this.x, this.y);
    ctx.strokeStyle = `hsla(${this.hue}, 100%, ${this.brightness}%, ${this.alpha})`;
    ctx.stroke();
  }
}

function createParticles(x, y) {
  let particleCount = 30;
  while (particleCount--) {
    particles.push(new Particle(x, y));
  }
}

function loop() {
  requestAnimationFrame(loop);
  ctx.globalCompositeOperation = 'destination-out';
  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = 'lighter';
  let i = fireworks.length;
  while (i--) {
    fireworks[i].draw();
    fireworks[i].update(i);
  }
  let j = particles.length;
  while (j--) {
    particles[j].draw();
    particles[j].update(j);
  }
}

function launchFirework() {
  const sx = canvas.width / 2;
  const sy = canvas.height;
  const tx = Math.random() * (canvas.width / 2) + canvas.width / 4;
  const ty = Math.random() * (canvas.height / 2);
  fireworks.push(new Firework(sx, sy, tx, ty));
}

window.onload = loop;
setInterval(launchFirework, 1000); // Launch a firework every second

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
