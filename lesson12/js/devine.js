// responsive menu
const hambutton = document.querySelector(".ham");

const mainnav = document.querySelector(".navigation");

hambutton.addEventListener('click', () => {mainnav.classList.toggle("responsive")}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove("responsive")};



// currentdate

d = new Date();
n = d.getFullYear();
document.querySelector('#year').innerHTML = n;

options = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);




// weather summary

const latitude = '29.14';
const longitude = '-98.9053';

const APIID ='bedda6c15123f002141cc2835427f5c0'

const apiurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${APIID}&units=imperial`;

fetch(apiurl)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
      
    const temperature = document.querySelector('.currentTemp');
    temperature.textContent = jsObject.current.temp.toFixed(0);
    // console.log(temperature);

    const description = document.querySelector('.description');
    description.innerHTML = `<strong>${jsObject.current.weather[0].description.toUpperCase()}</strong>`;
    // console.log(currently);

    

    const humidity = document.querySelector('.humidity');
    humidity.textContent = jsObject.current.humidity.toFixed(0);
    // console.log(humidity);
    

    const imagesrc = `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
    // console.log(imagesrc);

    document.getElementById('icon').setAttribute('src', imagesrc);

  });


//3 Day Forecast
// const lat = '29.14';
// const lon = '-98.9053';

// APIID ='bedda6c15123f002141cc2835427f5c0'

const apiurl3 = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly&appid=${APIID}&units=imperial`;

fetch(apiurl3)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);

    let day = 0;
    const dayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // const threedayforecast = jsObject.list.filter((forecast) => forecast.dt_txt.includes("18:00:00"));
    // console.log(threedayforecast); 

    // threedayforecast.forEach(x => {
    //   let d = new Date(x.dt_txt);
    //   day++;
      // console.log(d);


      // document.getElementById(`dayofweek${day +1}`).textContent = dayofweek[d.getDay()];
      // document.getElementById(`forecast${day +1}`).textContent = x.main.temp.toFixed();

      // document.getElementById(`icon${day +1}`).src ="https://openweathermap.org/img/w/" + x.weather[0].icon + ".png";
 

      const temperature = document.querySelector('.temp');
      temperature.textContent = jsObject.current.temp.toFixed(0);
      // console.log(temperature);
  
      const description = document.querySelector('.description');
      description.innerHTML = `<strong>${jsObject.current.weather[0].description.toUpperCase()}</strong>`;
      // console.log(currently);  
  
      const imagesrc = `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
      // console.log(imagesrc);
  
      document.getElementById('icon').setAttribute('src', imagesrc);


    })
  });

  
const jsonfile = "data/devine.json"

fetch(jsonfile)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  console.table(jsonObject);

  const businesses =jsonObject['businesses'];
  
  for(let i = 0; i < businesses.length; i++){
    let card = document.createElement('section');

    let name = document.createElement('h2');
    name.textContent = businesses[i].name;
    card.append(name);

    let purpose = document.createElement('p');
    purpose.textContent = businesses[i].purpose;
    card.append(purpose);

    let address = document.createElement('p');
    address.textContent = businesses[i].address;
    card.append(address);

    let city = document.createElement('p');
    city.textContent = businesses[i].city + ',  ' + businesses[i].state + ' ' + businesses[i].zip;
    card.append(city);

    let phonenumber = document.createElement('p');
    phonenumber.textContent = businesses[i].phonenumber;
    card.append(phonenumber);

    let website = document.createElement('p');
    website.textContent = businesses[i].website;
    card.append(website);

    document.querySelector("div.cards").appendChild(card);
  }
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

document.querySelector('.days').innerHTML = days.toFixed(0);



// Lazy Load images

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