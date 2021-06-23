
// Calculate the wind chill factor 
// function calculateWindChillFactor(temperature, windSpeed) {
//   return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * (Math.pow(windSpeed, 0.16)))
// }

// const temp = 25,
//       windSpeed = 10;

// console.log(
//   `The chill factor for temperature "${temp}" and wind speed "${windSpeed}" is "${calculateWindChillFactor(temp, windSpeed)}".`)
var currentTemp = parseInt(document.querySelector(".currentTemp").innerText);
var wind = parseInt(document.querySelector(".wind").innerText);

if (currentTemp <= 50 && wind > 3) {
document.querySelector(".windChill").innerHTML = calculateWindChillFactor(currentTemp, wind).toFixed(2) + "&#176;F";
}

else {
  document.querySelector(".windChill").innerHTML = "N/A";
}
function calculateWindChillFactor(temperature, windSpeed) {
  return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * (Math.pow(windSpeed, 0.16)))
}