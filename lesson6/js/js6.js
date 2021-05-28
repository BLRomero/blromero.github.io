// responsive menu script
const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle("responsive")
}, false);

window.onresize = () => {
  if (window.innerWidth > 760) mainnav.classList.remove("responsive")
};


// banner script
var thedate = new Date();
// console.log(thedate.getDay());
// if it is Friday then turn the banner display property to block
if (thedate.getDay() != 5) {
  document.querySelector('.banner').style.display = "none";
}
  