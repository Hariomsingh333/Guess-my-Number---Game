"use strict";
// light theme
const darkBtn = document.querySelector(".dark-btn");
const body = document.querySelector("body");
darkBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
});

// check button
const guessNumber = document.querySelector(".guess-number");
const checkBtn = document.querySelector(".check");
checkBtn.addEventListener("click", () => {
  console.log(guessNumber.value);
});
