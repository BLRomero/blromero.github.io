const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);
    const towns = jsonObject["towns"];

    // first section Preston
    let towninfo = document.createElement("section");
    let datadiv = document.createElement("div");

    let h2 = document.createElement("h2");
    h2.textContent = towns[6].name;
      // towns.append(h2);

    let p1 = document.createElement('p');
    p1.innerHTML = `<span class="infoHeadings">Town Motto: </span> ${towns[6].motto}`;

    let p2 = document.createElement('p');
    p2.innerHTML = `<span class="infoHeadings">Year Founded: </span> ${towns[6].yearFounded}`;

    let p3 = document.createElement("p");
    p3.innerHTML = `<span class="infoHeadings">Population: </span> ${towns[6].currentPopulation}`;
   
    let p4 = document.createElement('p');
    p4.innerHTML = `<span class="infoHeadings">Annual Rain Fall: </span> ${towns[6].averageRainfall}`;


    datadiv.append(h2, p1, p2, p3, p4);
    datadiv.setAttribute('class', 'data');

   let image = document.createElement("img");
    image.setAttribute("src", "images/sodasprings.jpg");
    image.setAttribute("alt", towns[2].name);

    towninfo.append(datadiv, image);
    towninfo.setAttribute('class', 'oddgrid');

    document.querySelector("div.towninfo").appendChild(towninfo);

   
    // // second section Fish haven
    towninfo = document.createElement("section");
    datadiv = document.createElement("div");

    h2 = document.createElement("h2");
    h2.textContent = towns[2].name;
      // towns.append(h2);

    p1 = document.createElement('p');
    p1.innerHTML = `<span class="infoHeadings">Town Motto: </span> ${towns[2].motto}`;

    p2 = document.createElement('p');
    p2.innerHTML = `<span class="infoHeadings">Year Founded: </span> ${towns[2].yearFounded}`;

    p3 = document.createElement("p");
    p3.innerHTML = `<span class="infoHeadings">Population: </span> ${towns[2].currentPopulation}`;
   
    p4 = document.createElement('p');
    p4.innerHTML = `<span class="infoHeadings">Annual Rain Fall: </span> ${towns[2].averageRainfall}`;


    datadiv.append(h2, p1, p2, p3, p4);
    datadiv.setAttribute('class', 'data');

   image = document.createElement("img");
    image.setAttribute("src", "images/sodasprings.jpg");
    image.setAttribute("alt", towns[2].name);

    towninfo.append(datadiv, image);
    towninfo.setAttribute('class', 'evengrid');

    document.querySelector("div.towninfo").appendChild(towninfo);

    // third section Soda Springs

    towninfo = document.createElement("section");
    datadiv = document.createElement("div");

    h2 = document.createElement("h2");
    h2.textContent = towns[0].name;
      // towns.append(h2);

    p1 = document.createElement('p');
    p1.innerHTML = `<span class="infoHeadings">Town Motto: </span> ${towns[0].motto}`;

    p2 = document.createElement('p');
    p2.innerHTML = `<span class="infoHeadings">Year Founded: </span> ${towns[0].yearFounded}`;

    p3 = document.createElement("p");
    p3.innerHTML = `<span class="infoHeadings">Population: </span> ${towns[0].currentPopulation}`;
   
    p4 = document.createElement('p');
    p4.innerHTML = `<span class="infoHeadings">Annual Rain Fall: </span> ${towns[0].averageRainfall}`;


    datadiv.append(h2, p1, p2, p3, p4);
    datadiv.setAttribute('class', 'data');

   image = document.createElement("img");
    image.setAttribute("src", "images/sodasprings.jpg");
    image.setAttribute("alt", towns[2].name);

    towninfo.append(datadiv, image);
    towninfo.setAttribute('class', 'oddgrid');

    document.querySelector("div.towninfo").appendChild(towninfo);
  });