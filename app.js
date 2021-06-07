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

checkBtn.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess-number").value);
  // console.log(guess);
  if (!guess) {
    msg.innerText = `you don't got it: 😢`;
  } else if (guess === secretNumber) {
    msg.innerText = `you got it: ${secretNumber}`;
  } else if (guess >= secretNumber) {
    msg.innerText = `too high!: 📈`;
  } else if (guess <= secretNumber) {
    msg.innerText = `too low!: 📉`;
  }
});
