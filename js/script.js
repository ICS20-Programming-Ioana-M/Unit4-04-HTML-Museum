'use strict'

// funtion tells user what the highest rated movie can watch
function buttonClicked() {
  // declare variables for age and day of the week
  let age = parseInt(document.getElementById('age').value);
  let day = document.getElementById('days').value;

  // If statement checks if user can go for free, with discount or pay normal price
  // user is less than 5 and more than 95 years old
  if(age <= 5 || age >= 95) {
    document.getElementById('answer').innerHTML = "You don't have to pay!!!";

    // user goes on tuesday or wednesday and is within student age
  } else if(((day == "Tuesday") || (day == "Thurday")) || ((age >= 12) && (age <= 21))) {
    document.getElementById('answer').innerHTML = "You get a student discount.";

    // age is negative
  } else if(age < 0) {
    document.getElementById('answer').innerHTML = "There's no way you're " + age + " years old.";

    // no day chosen
  } else if(days == "") {
    document.getElementById('answer').innerHTML = "please pick a day";

    // literally everyone else
  } else {
    document.getElementById('answer').innerHTML = "you pay regular price";
  }
}