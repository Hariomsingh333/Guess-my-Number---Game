"use strict";
// light theme
const darkBtn = document.querySelector(".dark-btn");
const body = document.querySelector("body");
darkBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
});
// secret number
const questionMark = document.querySelector(".question-mark");
const secretNumber = Math.floor(Math.random() * 20 + 1);
// questionMark.textContent = secretNumber;
// console.log(secretNumber);

// check button

const checkBtn = document.querySelector(".check");
const msg = document.querySelector(".message");
const score = document.querySelector(".score");
let scoreNumber = 20;

checkBtn.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess-number").value);
  // console.log(guess);
  //if not the number

  if (!guess) {
    msg.innerText = `you don't got it: 😢`;

    //if is the number
  } else if (guess === secretNumber) {
    msg.innerText = `you got it: ${secretNumber}`;
    // adding style
    body.style.backgroundColor = "#60b347";
    //width change
    const questionMark = document.querySelector(".question-mark");
    questionMark.style.width = "20rem";
    questionMark.textContent = secretNumber;

    // if the guess is greater then the number (wrong)
  } else if (guess >= secretNumber) {
    if (scoreNumber > 0) {
      msg.innerText = `too high!: 📈`;
      scoreNumber--;
      score.innerText = scoreNumber;
    } else {
      msg.innerText = `you lost the game!: 😢`;
    }

    //if guess less then the number (wrong)
  } else if (guess <= secretNumber) {
    // msg.innerText = `too low!: 📉`;
    // scoreNumber--;
    // score.innerText = scoreNumber;
    if (scoreNumber > 0) {
      msg.innerText = `too low!: 📉`;
      scoreNumber--;
      score.innerText = scoreNumber;
    } else {
      msg.innerText = `you lost the game!: 😢`;
    }
  }
});

// try to make the again btn

const againBtn = document.querySelector(".header-btn");
againBtn.addEventListener("click", () => {
  // console.log("i am again and i just clicked");
  location.reload();
});

// enter btn work
const number = document.querySelector("#number");
number.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    checkBtn.click();
  }
});
