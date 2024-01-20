//Solved

let hours = 0;
let minutes = 0;
let seconds = 0;

setInterval(() => {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  console.log(hours + ":" + minutes + ":" + seconds);
}, 1000);
