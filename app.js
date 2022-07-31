let color = [];
let container = document.querySelector(".container");
let header = document.querySelector(".header--back");
let description = document.querySelector(".description--back");
let btn = document.querySelector(".btn");
let coin = document.querySelector(".coin-image--back");
let changeClass = container.classList;
let state = false;
let tailsCount = 0;
let headsCount = 0;

function randomizer() {
  let number = Math.round(Math.random() * 1);

  if (number === 0) {
    header.textContent = "heads wins!";
    // document.querySelector(".cards__side--back").classList.toggle("red");
    btn.textContent = "restart";
    coin.setAttribute("src", "head.png");
    color.push("red");
    state = true;
    headsCount++;
    document.querySelector(".red-count").textContent = headsCount;
  } else {
    header.textContent = "tails wins!";
    // document.querySelector(".cards__side--back").classList.toggle("blue");
    btn.textContent = "restart";
    coin.setAttribute("src", "tails.png");
    state = true;
    color.push("blue");
    tailsCount++;
    document.querySelector(".blue-count").textContent = tailsCount;
  }
}

btn.addEventListener("click", function () {
  let flipSound = new Audio("coinflip.mp3");

  if (state === false) {
    flipSound.play();
    randomizer();
    description.classList.toggle("removeDisplay");
    document
      .querySelector(".cards__side--front")
      .classList.toggle("cards__side--front-flip");
    document
      .querySelector(".cards__side--back")
      .classList.toggle("cards__side--back-flip");
  } else {
    document
      .querySelector(".cards__side--front")
      .classList.toggle("cards__side--front-flip");
    document
      .querySelector(".cards__side--back")
      .classList.toggle("cards__side--back-flip");
    description.classList.toggle("removeDisplay");
    btn.textContent = "start";
    // document
    //   .querySelector(".cards__side--back")
    //   .classList.toggle(color[color.length - 1]);
    state = false;
  }
});
