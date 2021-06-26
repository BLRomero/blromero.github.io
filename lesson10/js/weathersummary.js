// Preston

const cityid = "5604473";
const APPID = "17ae5c140fafbe607c5caf358df91955";
// api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
const apiurl = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&APPID=${APPID}&units=imperial`;

fetch(apiurl)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);

    const temperature = document.querySelector('.currentTemp');
    temperature.textContent = jsObject.main.temp.toFixed(0);
    // console.log(temperature);

    const high = document.querySelector('.high');
    high.textContent = jsObject.main.temp_max.toFixed(0);
    const low = document.querySelector('.low');
    low.textContent = jsObject.main.temp_min.toFixed(0);
    //  console.log(high);
    // console.log(low);

    const wind = document.querySelector('.wind');
    wind.textContent = jsObject.wind.speed.toFixed(0);
    // console.log(wind);

    const humidity = document.querySelector('.humidity');
    humidity.textContent = jsObject.main.humidity;
    // console.log(humidity);
    const currently = document.querySelector('#currently');
    currently.innerHTML = `<strong>${jsObject.weather[0].description.toUpperCase()}</strong>`;
    // console.log(currently);


    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    // console.log(imagesrc);

    

    document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('icon').setAttribute('src', imagesrc);
  });
