// responsive menu script
const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle("responsive")
}, false);

window.onresize = () => {
  if (window.innerWidth > 760) mainnav.classList.remove("responsive")
};


// banner script
var thedate = new Date();
// console.log(thedate.getDay());
// if it is Friday then turn the banner display property to block
if (thedate.getDay() != 5) {
  document.querySelector('.banner').style.display = "none";
}


// Calculate the wind chill factor 
function calculateWindChillFactor(temperature, windSpeed) {
  return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * (Math.pow(windSpeed, 0.16)))
}

// const temp = 25,
//       windSpeed = 10;

// console.log(
//   `The chill factor for temperature "${temp}" and wind speed "${windSpeed}" is "${calculateWindChillFactor(temp, windSpeed)}".`)

document.querySelector(".currentTemp")
document.querySelector(".wind")

if (currentTemp <= 50) and (wind < 3) {
    function calculateWindChillFactor(temperature, windSpeed) {
    return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * (Math.pow(windSpeed, 0.16)))
  }
  // const temp = 25,
//       windSpeed = 10;

// console.log(
//   `The chill factor for temperature "${temp}" and wind speed "${windSpeed}" is "${calculateWindChillFactor(temp, windSpeed)}".`)
}