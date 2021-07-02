d = new Date();
n = d.getFullYear();
document.querySelector('#year').innerHTML = n;

options = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
};
// document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);



// count

// For use in converting milliseconds to seconds
const ONESECOND = 1000;
const  convert = 60*60*24* ONESECOND;
// Obtain current time
let today = new Date();
let currentTime = today.getTime();

// If there is no "lastvisited" data in local storage, set it to current time
if(!localStorage.getItem('lastvisited')) {
  localStorage.setItem('lastvisited', currentTime);
}

// Store the last-visited time in a variable
var lastTime = parseInt(localStorage.getItem('lastvisited'));

// Subtract current time with last-visited time and convert to seconds
var days = (currentTime - lastTime) /convert;

// // Display to the console how many seconds since last page visit
// console.log("You last visited " + days.toFixed(0) + "  days ago.");

document.querySelector('.days').innerHTML = days.toFixed(0);
// // Store current time in storage to be used the next time we refresh page
// localStorage.setItem('lastvisited', currentTime);



// function adjustRating(rating) {
//   document.getElementById("ratingvalue").innerHTML = rating;
// }
// function selectResponse() {
// 	const s = document.querySelector('#selected')
// 	const sel = document.querySelector('#selectbrowser');
// 	s.style.display = "block";
// 	s.textContent = sel.value;
	
// }