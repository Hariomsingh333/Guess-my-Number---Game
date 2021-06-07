"use strict";
// light theme
const darkBtn = document.querySelector(".dark-btn");
const body = document.querySelector("body");
darkBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
});
// secret number
const secretNumber = Math.floor(Math.random() * 20 + 1);
const questionMark = document.querySelector(".question-mark");
questionMark.textContent = secretNumber;
console.log(secretNumber);

// check button

const checkBtn = document.querySelector(".check");
const msg = document.querySelector(".message");
const score = document.querySelector(".score");
let scoreNumber = 20;

checkBtn.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess-number").value);
  // console.log(guess);
  if (!guess) {
    msg.innerText = `you don't got it: 😢`;
  } else if (guess === secretNumber) {
    msg.innerText = `you got it: ${secretNumber}`;
  } else if (guess >= secretNumber) {
    if (scoreNumber > 0) {
      msg.innerText = `too high!: 📈`;
      scoreNumber--;
      score.innerText = scoreNumber;
    } else {
      msg.innerText = `you lost the game!: 😢`;
    }
  } else if (guess <= secretNumber) {
    msg.innerText = `too low!: 📉`;
    scoreNumber--;
    score.innerText = scoreNumber;
  }
});
