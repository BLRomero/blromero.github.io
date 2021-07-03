
  //  FIsh Haven
  const cityidf = "5585010";
  const APPIDf = "17ae5c140fafbe607c5caf358df91955";
  // api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
  const apiurl = `https://api.openweathermap.org/data/2.5/weather?id=${cityidf}&APPID=${APPIDf}&units=imperial`;
  
  fetch(apiurl)
    .then((response) => response.json())
    .then((jsObject) => {
      // console.log(jsObject);
      
  
      const temperature = document.querySelector('.fcurrentTemp');
      temperature.textContent = jsObject.main.temp.toFixed(0);
      // console.log(temperature);
  

      const currently = document.querySelector('#fcurrently');
      currently.innerHTML = `<strong>${jsObject.weather[0].description.toUpperCase()}</strong>`;
      // console.log(currently);

      const high = document.querySelector('.fhigh');
      high.textContent = jsObject.main.temp_max.toFixed(0);
      const low = document.querySelector('.flow');
      low.textContent = jsObject.main.temp_min.toFixed(0);
      //  console.log(high);
      // console.log(low);
  
      const wind = document.querySelector('.fwind');
      wind.textContent = jsObject.wind.speed.toFixed(0);
      // console.log(wind);
  
      const humidity = document.querySelector('.fhumidity');
      humidity.textContent = jsObject.main.humidity;
      // console.log(humidity);
      
  
  
      const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
      // console.log(imagesrc);
  
      
  
      // document.getElementById('fimagesrc').textContent = imagesrc;
      document.getElementById('ficon').setAttribute('src', imagesrc);


      // const events = document.querySelector('.events');
      // events.textContent=jsObject.


    });