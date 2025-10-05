// score at the start of the game 
let homeScore = 0;
let guestScore = 0;
let intervalId;

// timer 
let timer = "60:00"

document.getElementById("home-score").textContent = homeScore;
document.getElementById("guest-score").textContent = guestScore;
document.getElementById("timer").textContent = timer;

function homeAdd1() {
  homeScore += 1;
  document.getElementById("home-score").textContent = homeScore;
}

function homeAdd2() {
  homeScore += 2;
  document.getElementById("home-score").textContent = homeScore;
}

function homeAdd3() {
  homeScore += 3;
  document.getElementById("home-score").textContent = homeScore;
}

function guestAdd1() {
  guestScore += 1;
  document.getElementById("guest-score").textContent = guestScore;
}

function guestAdd2() {
  guestScore += 2;
  document.getElementById("guest-score").textContent = guestScore;
}

function guestAdd3() {
  guestScore += 3;
  document.getElementById("guest-score").textContent = guestScore;
}

function reset() {
  homeScore = 0;
  guestScore = 0;
  document.getElementById("guest-score").textContent = guestScore;
  document.getElementById("home-score").textContent = homeScore;
}

function startTimer(duration, display) {
  timer = duration;

  intervalId = setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(intervalId); // // stop at 00:00
    }
  }, 1000);
  }

  window.onload = function() {
    let count = 60 * 60; // 60 minutes
    let display = document.getElementById("timer");

    document.getElementById("start").addEventListener("click", function() {
      clearInterval(intervalId);
      startTimer(count, display);
    });

    document.getElementById("stop").addEventListener("click", function () {
      clearInterval(intervalId);
    });
  };