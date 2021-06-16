const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


// feed required argument, 1st then() returns a promise 
  // extract JSON content 2nd then() set up for us to work with the converted response
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {

      let card = document.createElement('section');
      let prophetName = document.createElement('h2');
      let birthDate = document.createElement('p');
      let birthPlace = document.createElement('p');
      let prophetImage = document.createElement('img');
      
      prophetName.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      birthDate.textContent = 'Date of Birth: ' + prophets[i].birthdate;
      birthPlace.textContent = "Place of Birth: "+ prophets[i].birthplace;
      
      prophetImage.setAttribute('src', prophets[i].imageurl);

      card.appendChild(prophetName);
      card.appendChild(birthDate);
      card.appendChild(birthPlace);
      card.appendChild(prophetImage);
      
      document.querySelector('div.cards').appendChild(card);
  
    }
  });

 


