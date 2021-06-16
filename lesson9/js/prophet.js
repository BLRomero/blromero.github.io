const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


// feed required argument, 1st then() returns a promise 
// extract JSON content 2nd then() set up for us to work with the converted response
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++) {

      let card = document.createElement('section');
         

      let prophetName = document.createElement('h2');
      prophetName.textContent = prophets[i].name + ' ' + prophets[i].lastname;
   
      card.append(prophetName);

      let birthDate = document.createElement('p');
      birthDate.textContent = 'Date of Birth: ' + prophets[i].birthdate;
      card.append(birthDate);

      let birthPlace = document.createElement('p');
      birthPlace.textContent = "Place of Birth: " + prophets[i].birthplace;
      card.append(birthPlace);

      let prophetImage = document.createElement('img');
      prophetImage.setAttribute('src', prophets[i].imageurl);
      prophetImage.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' -' + prophets[i].order) ;
      card.append(prophetImage);
       

      document.querySelector('div.cards').appendChild(card);
    }
  });