const secondHand = document.querySelector('.secondHand');
const minsHand = document.querySelector('.minuteHand');
const hourHand = document.querySelector('.hourHand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secDegrees = (seconds * 6);
  secondHand.style.transform = `rotate(${secDegrees}deg)`;

  const minutes = now.getMinutes();
  const minDegrees = (minutes * 6) + (seconds/10);
  minsHand.style.transform = `rotate(${minDegrees}deg)`;

  let hours = now.getHours();
  if (hours > 12) hours = hours - 12;
  const hourDegrees = (hours * 30) + (minutes/2);
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000);
setDate();
