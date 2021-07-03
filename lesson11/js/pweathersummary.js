// Preston

const cityidp = "5604473";
const APPIDp = "17ae5c140fafbe607c5caf358df91955";
// api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
const apiurlp = `https://api.openweathermap.org/data/2.5/weather?id=${cityidp}&APPID=${APPIDp}&units=imperial`;

fetch(apiurlp)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);

    const temperature = document.querySelector('.pcurrentTemp');
    temperature.textContent = jsObject.main.temp.toFixed(0);
    // console.log(temperature);

    const high = document.querySelector('.phigh');
    high.textContent = jsObject.main.temp_max.toFixed(0);
    const low = document.querySelector('.plow');
    low.textContent = jsObject.main.temp_min.toFixed(0);
    //  console.log(high);
    // console.log(low);

    const wind = document.querySelector('.pwind');
    wind.textContent = jsObject.wind.speed.toFixed(0);
    // console.log(wind);

    const humidity = document.querySelector('.phumidity');
    humidity.textContent = jsObject.main.humidity;
    // console.log(humidity);
    const currently = document.querySelector('#pcurrently');
    currently.innerHTML = `<strong>${jsObject.weather[0].description.toUpperCase()}</strong>`;
    // console.log(currently);


    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    // console.log(imagesrc);

    

    // document.getElementById('pimagesrc').textContent = imagesrc;
    document.getElementById('picon').setAttribute('src', imagesrc);
  });


