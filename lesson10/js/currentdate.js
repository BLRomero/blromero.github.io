d = new Date();
n = d.getFullYear();
document.querySelector('#year').innerHTML = n;

options = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
};
document.getElementById('date').textContent = new Date().toLocaleDateString('en-US', options);

// var d = new Date();
// var n = d.getFullYear();
// document.querySelector('#year').innerHTML = n;



// const datefield = document.querySelector("#date");
// const now = new Date();
// const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle:"full"}).format(now);

// // //long, medium, short, full
// datefield.innerHTML = `<em>${fulldate}</em>`;