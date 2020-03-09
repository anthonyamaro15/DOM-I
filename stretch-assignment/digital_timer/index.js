const secondTen = document.querySelector("#secondTens");
const secondOne = document.querySelector("#secondOnes");
const msHundred = document.querySelector("#msHundreds");
const msTen = document.querySelector("#msTens");

const colon = document.querySelector("#colon");

const start = document.querySelector(".start");
const reset = document.querySelector(".reset");

let count = 0;
let timeID = 0;
let lessSecond = 0;
let seconds = 0;

function timer() {
  let interval = setInterval(funcCount, 10);
  funcCount();
  timeID = interval;
}

function funcCount() {
  count++;
  msHundred.textContent = `:${count}`;

  if (count === 100) {
    seconds++;
    count = 0;
    secondOne.textContent = seconds;
  }

  if (seconds === 10) {
    msHundred.classList.add("redDigit");
    secondOne.classList.add("redDigit");
    colon.classList.add("redDigit");
    msHundred.textContent = ":00";
    clearInterval(timeID);
  }
}

start.addEventListener("click", () => {
  timer();
  start.disabled = true;
});

reset.addEventListener("click", () => {
  start.disabled = false;
  count = 0;
  seconds = 0;
  secondOne.textContent = 0;
  msHundred.textContent = "";
  msHundred.classList.remove("redDigit");
  secondOne.classList.remove("redDigit");
  clearInterval(timeID);
});
