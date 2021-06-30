// 5 Day Forecast
const cityidf = "5604473";
const APPIDf = "17ae5c140fafbe607c5caf358df91955";
// api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
const apiurlf = `https://api.openweathermap.org/data/2.5/forecast?id=${cityidf}&APPID=${APPIDf}&units=imperial`;

fetch(apiurlf)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);

    let day = 0;
    const dayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   
    const fivedayforecast = jsObject.list.filter((forecast) => forecast.dt_txt.includes("18:00:00"));
    console.log(fivedayforecast);
   
    // let img = "https://openweathermap.org/img/w/";
    // console.log(img);


    fivedayforecast.forEach(x => {
      let d = new Date(x.dt_txt);
      day++;
      // console.log(d);

      document.getElementById(`pdayofweek${day +1}`).textContent = dayofweek[d.getDay()];
      document.getElementById(`pforecast${day +1}`).textContent = x.main.temp.toFixed();


    
      const imagesrcf = "https://openweathermap.org/img/w/" + x.weather[0].icon + ".png";
      // document.getElementById(`imagesrcf${day +1}`).setAttribute
      console.log(imagesrcf);

      // document.getElementById('imagesrcf').textContent = icon;
      document.getElementById('picon').setAttribute('src', imagesrcf);

        })});