//Solved

let hours = 0;
let minutes = 0;
let seconds = 0;
function increasecounter() {
  setTimeout(() => {
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
    increasecounter();
  }, 1000);
}
increasecounter();
