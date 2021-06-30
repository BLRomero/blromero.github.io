// 5 Day Forecast
const cityidsf = "5585010";
const APPIDsf = "17ae5c140fafbe607c5caf358df91955";
// api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
const apiurlsf = `https://api.openweathermap.org/data/2.5/forecast?id=${cityidsf}&APPID=${APPIDsf}&units=imperial`;

fetch(apiurlsf)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);

    let day = 0;
    const dayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   
    const fivedayforecast = jsObject.list.filter((forecast) => forecast.dt_txt.includes("18:00:00"));
    // console.log(fivedayforecast);
   
    // let img = "https://openweathermap.org/img/w/";
    // console.log(img);


    fivedayforecast.forEach(x => {
      let d = new Date(x.dt_txt);
      day++;
      // console.log(d);

      document.getElementById(`sdayofweek${day +1}`).textContent = dayofweek[d.getDay()];
      document.getElementById(`sforecast${day +1}`).textContent = x.main.temp.toFixed();


    
      const imagesrcf = "https://openweathermap.org/img/w/" + x.weather[0].icon + ".png";
      // document.getElementById(`imagesrcf${day +1}`).setAttribute
      // console.log(imagesrcf);

      // document.getElementById('imagesrcf').textContent = icon;
      document.getElementById('sicon').setAttribute('src', imagesrcf);

        })});