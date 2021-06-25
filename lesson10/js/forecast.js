// Preston



const cityid = "5604473";
const APPID = "17ae5c140fafbe607c5caf358df91955";
// api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
const apiurl = `https://api.openweathermap.org/data/2.5/forecast?id=${cityid}&APPID=${APPID}&units=imperial`;

fetch(apiurl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const temperature = document.querySelector('.currentTemp');
    temperature.textContent = jsObject.list[0].main.temp.toFixed(0);
    // console.log(temperature);

    const high = document.querySelector('.high');
    high.textContent = jsObject.list[0].main.temp_max.toFixed(0);
    //  console.log(high);

    const wind = document.querySelector('.wind');
    wind.textContent = jsObject.list[0].wind.speed.toFixed(0);
    // console.log(wind);

    const humidity = document.querySelector('.humidity');
    humidity.textContent = jsObject.list[0].main.humidity;
    // console.log(humidity);
    const currently = document.querySelector('#currently');
    currently.innerHTML = `<strong>${jsObject.list[0].weather[0].description.toUpperCase()}</strong>`;
    // console.log(currently);


    const imagesrc = `https://openweathermap.org/img/w/${jsObject.list[0].weather[0].icon}.png`;
    // console.log(imagesrc);

    const desc = jsObject.list[0].weather[0].description;
    // console.log(desc);

    document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('icon').setAttribute('src', imagesrc);



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
      // document.getElementById('icon').textContent = imagesrc;
      // const imagesrc = `https://openweathermap.org/img/w/${jsObject.fivedayforecast.weather[0].icon}.png`;
      // document.getElementById('imagesrc').textContent = imagesrc;
      // document.getElementById('icon').setAttribute('src', imagesrc);
      // console.log(imagesrc);
    })
    // for (let i = 0; i < fivedayforecast.length; i++) {
    //   let forecast = fivedayforecast[i];
    //   let tempElement = "temp" + i;
    //   let iconElement = "icon" + i;
    //   let dayElement = "day" + i;
    //   let forecastDate = new Date(forecast.dt_txt);
    //   let forecastDay = days[forecastDate.getDay()];

    //   const desc = forecast.weather[0].description;
    //   const iconsrc = `https:openweathermap.org/img/w/${jsObject.icon}.png`;

    //   console.log(iconsrc);

    //   document.getElementById(dayElement).textContent = forecastDay;
    //   document.getElementById(iconElement).setAttribute("src", iconsrc);
    //   document.getElementById(iconElement).setAttribute("alt", desc);
    //   document.getElementById(tempElement).textContent = forecast.main.temp;

    // }});



    // Fish Haven
    // const cityid = "5585010";
    // const APPID = "17ae5c140fafbe607c5caf358df91955";
    // // api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
    // const apiurl = `https://api.openweathermap.org/data/2.5/forecast?id=${cityid}&APPID=${APPID}&units=imperial`;


    // fetch(apiurl)
    //   .then((response) => response.json())
    //   .then((jsObject) => {
    //     console.log(jsObject);

    //     const temperature = document.querySelector('.currentTemp');
    //     temperature.textContent = jsObject.list[0].main.temp.toFixed(0);
    //     console.log(temperature);

    //     const high = document.querySelector('.high');
    //     high.textContent = jsObject.list[0].main.temp_max.toFixed(0);
    //      console.log(high);

    //     const wind = document.querySelector('.wind');
    //     wind.textContent = jsObject.list[0].wind.speed.toFixed(0);
    //     console.log(wind);

    //     const humidity = document.querySelector('.humidity');
    //     humidity.textContent = jsObject.list[0].main.humidity;
    //     console.log(humidity);

    //     const currently = document.querySelector('#currently');
    //     currently.innerHTML = `<strong>${jsObject.list[0].weather[0].description.toUpperCase()}</strong>`;
    //     console.log(currently);


    //     const imagesrc = `https://openweathermap.org/img/w/${jsObject.list[0].weather[0].icon}.png`;
    //     console.log(imagesrc);

    //     const desc = jsObject.list[0].weather[0].description;
    //     console.log(desc);

    //     document.getElementById('imagesrc').textContent = imagesrc;
    //     document.getElementById('icon').setAttribute('src', imagesrc);

    // });

    // // Soda Springs
    // const cityid = "5607916";
    // const APPID = "17ae5c140fafbe607c5caf358df91955";
    // // api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
    // const apiurl = `https://api.openweathermap.org/data/2.5/forecast?id=${cityid}&APPID=${APPID}&units=imperial`;


    // fetch(apiurl)
    //   .then((response) => response.json())
    //   .then((jsObject) => {
    //     console.log(jsObject);

    //     const temperature = document.querySelector('.currentTemp');
    //     temperature.textContent = jsObject.list[0].main.temp.toFixed(0);
    //     // console.log(temperature);

    //     const high = document.querySelector('.high');
    //     high.textContent = jsObject.list[0].main.temp_max.toFixed(0);
    //     //  console.log(high);

    //     const wind = document.querySelector('.wind');
    //     wind.textContent = jsObject.list[0].wind.speed.toFixed(0);
    //     // console.log(wind);

    //     const humidity = document.querySelector('.humidity');
    //     humidity.textContent = jsObject.list[0].main.humidity;
    //     // console.log(humidity);
    //     const currently = document.querySelector('#currently');
    //     currently.innerHTML = `<strong>${jsObject.list[0].weather[0].description.toUpperCase()}</strong>`;
    //     // console.log(currently);


    //     const imagesrc = `https://openweathermap.org/img/w/${jsObject.list[0].weather[0].icon}.png`;
    //     // console.log(imagesrc);

    //     const desc = jsObject.list[0].weather[0].description;
    //     // console.log(desc);

    //     document.getElementById('imagesrc').textContent = imagesrc;
    //     document.getElementById('icon').setAttribute('src', imagesrc);

  });