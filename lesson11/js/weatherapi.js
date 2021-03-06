const cityid = "5604473";
const APPID = "17ae5c140fafbe607c5caf358df91955";
// api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
const apiurl = `https://api.openweathermap.org/data/2.5/forecast?id=${cityid}&APPID=${APPID}&units=imperial`;

fetch(apiurl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const temperature = document.querySelector('#temperature');temperature.textContent = jsObject.list[0].main.temp.toFixed(0);
    const currently = document.querySelector('#currently');
    currently.innerHTML = `<strong>${jsObject.list[0].weather[0].description.toUpperCase()}</strong>`;
    console.log(temperature);
    const imagesrc = `https://openweathermap.org/img/w/${jsObject.list[0].weather[0].icon}.png`;
    const desc = jsObject.list[0].weather[0].description; 
    // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc; 
    // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc); 
    // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });

