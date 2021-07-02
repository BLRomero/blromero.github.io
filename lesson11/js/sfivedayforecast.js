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

    fivedayforecast.forEach(x => {
      let d = new Date(x.dt_txt);
      day++;
      // console.log(d);

      document.getElementById(`sdayofweek${day +1}`).textContent = dayofweek[d.getDay()];
      document.getElementById(`sforecast${day +1}`).textContent = x.main.temp.toFixed();

      document.getElementById(`sicon${day +1}`).src ="https://openweathermap.org/img/w/" + x.weather[0].icon + ".png";
      // document.getElementById(`sicon${day +1}`).src = `https://openweathermap.org/img/w/${jsObject.weather[0].description}.png`;
    
    })
  });




const townlisturl = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(townlisturl)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(townlisturl);

    const events1 = document.querySelector('#event1');
    events1.innerHTML = jsObject.towns[0].events[0];
    // console.log(events1);

    const events2 = document.querySelector('#event2');
    events2.innerHTML = jsObject.towns[0].events[1];
    // console.log(events2);

    const events3 = document.querySelector('#event3');
    events3.innerHTML = jsObject.towns[0].events[2];
    // console.log(events3);

  });