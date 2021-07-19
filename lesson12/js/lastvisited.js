// count

// For use in converting milliseconds to seconds
const ONESECOND = 1000;
const convert = 60 * 60 * 24 * ONESECOND;
// Obtain current time
let today = new Date();
let currentTime = today.getTime();
console.log(currentTime);

// If there is no "lastvisited" data in local storage, set it to current time
if (!localStorage.getItem('lastvisited')) {
  localStorage.setItem('lastvisited', currentTime);
}

// Store the last-visited time in a variable
var lastTime = parseInt(localStorage.getItem('lastvisited'));
console.log(lastTime);

// Subtract current time with last-visited time and convert to seconds
var days = (currentTime - lastTime) / convert;

// // Display to the console how many seconds since last page visit
console.log("You last visited " + days.toFixed(0) + "  days ago.");

document.querySelector('.days').innerHTML = days.toFixed(0);

