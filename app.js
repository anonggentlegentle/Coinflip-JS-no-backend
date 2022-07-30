let color = [];
let container = document.querySelector(".container");
let header = document.querySelector(".header");
let description = document.querySelector(".description");
let btn = document.querySelector(".btn");
let coin = document.querySelector(".coin-image");
let changeClass = container.classList;
let state = false;
let blueCount = 0;
let redCount = 0;

function randomizer() {
  let number = Math.round(Math.random() * 1);

  if (number === 0) {
    header.textContent = "heads wins!";
    changeClass.toggle("red");
    btn.textContent = "restart";
    coin.setAttribute("src", "head.png");
    color.push("red");
    state = true;
    redCount++;
    document.querySelector(".red-count").textContent = redCount;
  } else {
    header.textContent = "tails wins!";
    changeClass.toggle("blue");
    btn.textContent = "restart";
    coin.setAttribute("src", "tails.png");
    state = true;
    color.push("blue");
    blueCount++;
    document.querySelector(".blue-count").textContent = blueCount;
  }
}

btn.addEventListener("click", function () {
  let flipSound = new Audio("coinflip.mp3");

  if (state === false) {
    flipSound.play();
    randomizer();
    description.classList.toggle("removeDisplay");
  } else {
    description.classList.toggle("removeDisplay");
    btn.textContent = "start";
    changeClass.toggle(color[color.length - 1]);
    state = false;
    header.textContent = "coin flip";
    coin.setAttribute("src", "coinflip.png");
  }
});
