let counter = 0;
let secCounter = 1;
let minCounter = 1;
let lastCounter = 1;
let stop;
function startTimer() {
  let timer = document.querySelector("#msTens");
  let secTimer = document.querySelector("#msHundreds");
  let minTimer = document.querySelector("#secondOnes");
  let lastTimer = document.querySelector("#secondTens");
  stop = setInterval(timeIt, 10);
  timer.textContent = counter;

  function timeIt() {
    counter++;
    timer.textContent = counter;

    if (counter === 10) {
      counter = 0;
      secTimer.textContent = secCounter;
      secCounter++;
    }
    if (secCounter === 9) {
      secCounter = 0;

      minTimer.textContent = minCounter;
      minCounter++;
    }
    if (minCounter === 9) {
      minCounter = 0;

      lastTimer.textContent = lastCounter;
      lastCounter++;
    }
  }
  if (lastTimer.textContent === "1") {
    console.log(lastTimer.textContent);
    return;
  }
}

function stopTimer() {
  clearInterval(stop);
}
