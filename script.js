"use strict";

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guessNum = Number(document.querySelector(".guess").value);

  if (!guessNum) {
    document.querySelector(".message").textContent = "⛔ No Number!";
  } else if (guessNum === secretNum) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".number").textContent = secretNum;
    document.querySelector("body").style.background = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guessNum !== secretNum) {
    if (score > 0) {
      document.querySelector(".message").textContent =
        guessNum > secretNum ? "👆 Too high!" : "👇 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector("body").style.background = "#850000";
      document.querySelector(".message").textContent = "💥 Game Over!";
    }
  }
  // } else if (guessNum > secretNum) {
  //   if (score > 0) {
  //     document.querySelector(".message").textContent = "👆 Too high!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector("body").style.background = "#850000";
  //     document.querySelector(".message").textContent = "💥 Game Over!";
  //   }
  // } else {
  //   if (score > 0) {
  //     document.querySelector(".message").textContent = "👇 Too low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector("body").style.background = "#850000";
  //     document.querySelector(".message").textContent = "💥 Game Over!";
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.background = "#222";
  document.querySelector(".number").style.width = "15rem";

  // window.location.reload();
  // localStorage.setItem("highscore", highscore);
  // document.querySelector(".highscore").innerHTML = localStorage.getItem("highscore");
});
