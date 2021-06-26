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


    fivedayforecast.forEach(x => {
      let d = new Date(x.dt_txt);
      day++;
      // console.log(d);

      document.getElementById(`dayofweek${day +1}`).textContent = dayofweek[d.getDay()];
      document.getElementById(`forecast${day +1}`).textContent = x.main.temp.toFixed();


      // const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather.}.png`;
      // // console.log(imagesrc);
  
      // document.getElementById('imagesrc').textContent = imagesrc;
      // document.getElementById('icon').setAttribute('src', imagesrc);
   }) });
   