
const cityids = "5607916";
const APPIDs = "17ae5c140fafbe607c5caf358df91955";
// api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
const apiurls = `https://api.openweathermap.org/data/2.5/weather?id=${cityids}&APPID=${APPIDs}&units=imperial`;

fetch(apiurls)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);

    const temperature = document.querySelector('.scurrentTemp');
    temperature.textContent = jsObject.main.temp.toFixed(0);
    // console.log(temperature);

    const currently = document.querySelector('#scurrently');
    currently.innerHTML = `<strong>${jsObject.weather[0].description.toUpperCase()}</strong>`;
    // console.log(currently);

    const high = document.querySelector('.shigh');
    high.textContent = jsObject.main.temp_max.toFixed(0);
    const low = document.querySelector('.slow');
    low.textContent = jsObject.main.temp_min.toFixed(0);
    //  console.log(high);
    // console.log(low);

    const wind = document.querySelector('.swind');
    wind.textContent = jsObject.wind.speed.toFixed(0);
    // console.log(wind);

    const humidity = document.querySelector('.shumidity');
    humidity.textContent = jsObject.main.humidity;
    // console.log(humidity);
   


    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    // console.log(imagesrc);

    

    // document.getElementById('simagesrc').textContent = imagesrc;
    document.getElementById('sicon').setAttribute('src', imagesrc);
  });
