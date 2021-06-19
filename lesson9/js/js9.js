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

// // Display to the console how many seconds since last page visit
// console.log("You last visited " + days.toFixed(0) + "  days ago.");

// document.querySelector('.days').innerHTML = days.toFixed(0);
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
// const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

// fetch(requestURL)
// .then(function (response){
//   return response.json();
// })
// .then(function(jsonObject) {
//   // console.table(jsonObject)
//   ;

// const towns = jsonObject["towns"];

//   let towninfo = document.createElement("section");
//   let datadiv = document.createElement("div");

//   let h2 = document.createElement("h2");
//   h2.textContent = towns[0].name;
//   // cards.append(townName);

//   let p1 = document.createElement('p');
// p1.innerHTML = `<span class="infoHeadings">Town Motto: </span> ${towns[0].townMotto}`;
//   // cards.append(townMotto);

//   let p2 = document.createElement('p');
//   p1.innerHTML = `<span class="infoHeadings">Year Founded: </span> ${towns[0].yearFounded}`;
//    // cards.append(yearFounded);

//   let p3 = document.createElement("p");
//   p3.innerHTML = `<span class="infoHeadings">Population: </span> ${towns[0].currentPopulation}`;
//   // cards.append(currentPopulation);

//   let p4 = document.createElement('p');
//   p4.innerHTML = `<span class="infoHeadings">Annual Rain Fall: </span> ${towns[0].averageRainfall}`;
//   // cards.append(averageRainfall);

//   datadiv.append(h2, p1, p2, p3, p4);
//   datadiv.setAttribute('class', 'data');
   
//   // let events = document.createElement('p');
//   // events.textContent = "Current Events: " +  towns[0].events;
//   // cards.append(events);

//   let photo = document.createElement("img");
//   photo.setAttribute("src", "images/sodasprings.jpg" );
//   photo.setAttribute("alt", towns[0].name); 
//   // cards.append(photo);

//   towninfo.append(datadiv, image);
//   towninfo.setAttribute('class', 'towngrid');

//   document.querySelector("div.cards").appendChild(towninfo);

//   cards = document.createElement("section");

//   townName = document.createElement("h2");
//   townName.textContent = towns[2].name;
//   cards.append(townName);

//   townMotto = document.createElement('p');
//   townMotto.textContent = towns[2].motto;
//   cards.append(townMotto);

//   yearFounded = document.createElement('p');
//   yearFounded.textContent = "Year Founded: "  + towns[2].yearFounded;
//   cards.append(yearFounded);

//  currentPopulation = document.createElement('p');
//   currentPopulation.textContent = "Population: " + towns[2].currentPopulation;
//   cards.append(currentPopulation);

//   averageRainfall = document.createElement('p');
//   averageRainfall.textContent = "Average Rainfall: " + towns[2].averageRainfall;
//   cards.append(averageRainfall);
   
//   // let events = document.createElement('p');
//   // events.textContent = "Current Events: " +  towns[2].events;
//   // cards.append(events);

//  photo = document.createElement("img");
//   photo.setAttribute("src", "images/fishhaven.jpg");
//   photo.setAttribute("alt", towns[2].name); 
//   cards.append(photo);

//   cards.append(townName, townMotto, yearFounded, currentPopulation, averageRainfall);
//   cards.setAttribute("class", "data")

//   document.querySelector("div.cards").appendChild(cards);


//   cards = document.createElement("section");

//   townName = document.createElement("h2");
//   townName.textContent = towns[6].name;
//   cards.append(townName);

//   townMotto = document.createElement('p');
//   townMotto.textContent = towns[6].motto;
//   cards.append(townMotto);

//   yearFounded = document.createElement('p');
//   yearFounded.textContent = "Year Founded: "  + towns[6].yearFounded;
//   cards.append(yearFounded);

//  currentPopulation = document.createElement("p");
//   currentPopulation.textContent = "Population: " + towns[6].currentPopulation;
//   cards.append(currentPopulation);

//   averageRainfall = document.createElement('p');
//   averageRainfall.textContent = "Average Rainfall: " + towns[6].averageRainfall;
//   cards.append(averageRainfall);

//  cards.append(townName, townMotto, yearFounded, currentPopulation, averageRainfall);
//   cards.setAttribute("class", "data")
   
//   // let events = document.createElement('p');
//   // events.textContent = "Current Events: " +  towns[6].events;
//   // cards.append(events);

//  photo = document.createElement("img");
//   photo.setAttribute("src", "images/preston.jpg");
//   photo.setAttribute("alt", towns[6].name); 
//   cards.append(photo);

//   document.querySelector("div.cards").appendChild(cards);

// });


