let timeDisplay = document.querySelector("h1");
let stop = document.getElementById("stop");
let start = document.getElementById("start");
let reset = document.getElementById("reset");
let hours = 0;
let min = 0;
let sec = 0;
let clear;
let control = true;

function stopwatch() {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
    if (min == 60) {
      min = 0;
      hours++;
    }
  }
  let s = sec < 10 ? "0" + sec : sec;
  let m = min < 10 ? "0" + min : min;
  let h = hours < 10 ? "0" + hours : hours;

  timeDisplay.innerText = `${h}:${m}:${s}`;
}
function startOnece() {
  clear = setInterval(() => {
    stopwatch();
  }, 1000);
  control = false;
  ctrl();
}
function ctrl() {
  if (control) {
    start.addEventListener("click", startOnece);
  } else {
    start.removeEventListener("click", startOnece);
    control = true;
  }
}
ctrl();
stop.addEventListener("click", () => {
  clearInterval(clear);
  control = true;
  ctrl();
});
reset.addEventListener("click", () => {
  control = true;
  ctrl();
  clearInterval(clear);
  hours = 0;
  min = 0;
  sec = 0;
  timeDisplay.innerText = "00:00:00";
});
