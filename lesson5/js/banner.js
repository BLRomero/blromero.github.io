let thedate = new Date();

// console.log(thedate.getDay());

// if it is Friday then turn the banner display property to block
if (thedate.getDay() == 5) {
 document.querySelector('.banner').style.display = "block";
}
