// current date
var d = new Date();
var n = d.getFullYear();
document.querySelector('#year').innerHTML = n;



const datefield = document.querySelector("#date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle:"full"}).format(now);

// //long, medium, short, full
datefield.innerHTML = `<em>${fulldate}</em>`;


// responsive menu script
const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle("responsive")
}, false);

window.onresize = () => {
  if (window.innerWidth > 760) mainnav.classList.remove("responsive")
};

// Lazy load images 
const images = document.querySelectorAll('img[data-src]');


function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if(!src) {
    return;
  }

  img.src = src;
}

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px -500px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
entries.forEach(entry => {
  if(!entry.isIntersecting) {
  return;
} else {
  preloadImage(entry.target);
  imgObserver.unobserve(entry.target);
}
});
}, imgOptions);

images.forEach(image => {
  imgObserver.observe(image);
});




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

// Display to the console how many seconds since last page visit
// console.log("You last visited " + days.toFixed(0) + "  days ago.");

document.querySelector('.days').innerHTML = days.toFixed(0);
// Store current time in storage to be used the next time we refresh page
localStorage.setItem('lastvisited', currentTime);


// localStorage.countdays(document.querySelector().value);}



function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}
function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectbrowser');
	s.style.display = "block";
	s.textContent = sel.value;
	
}