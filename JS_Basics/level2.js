const ageInput = document.getElementById('ageInput');
const ageSubmit = document.getElementById('ageSubmit');
const ageResult = document.getElementById('ageResult');

ageSubmit.onclick = function() {
  const age = parseInt(ageInput.value);

  if (age < 18){
    ageResult.textContent = "You are a minor.";
  }
  else if (age >= 18) {
    ageResult.textContent = "You are an adult.";
  }
  else {
    ageResult.textContent = "Invalid age input.";
  }
}

const numberInput = document.getElementById('numberInput');
const submitNumber = document.getElementById('submitNumber');
const numberResult = document.getElementById('numberResult');

submitNumber.onclick = function() {
  const number = parseInt(numberInput.value);

  if (number < 0) {
    numberResult.textContent = "You entered a negative number.";
  }
  else if (number > 0) {
    numberResult.textContent = "You entered a positive number.";
  }
  else{
    numberResult.textContent = "You entered zero.";
  }
}

const gpaInput = document.getElementById('gpaInput');
const checkGPA = document.getElementById('checkGPA');
const gpaResult = document.getElementById('gpaResult');

checkGPA.onclick = function() {
  const grade = parseInt(gpaInput.value);

  if (grade <= 100 && grade >= 90){
    gpaResult.textContent = "A";
  }
  else if (grade < 90 && grade >= 80){
    gpaResult.textContent = "B";
  }
  else if (grade < 80 && grade >= 70){
    gpaResult.textContent = "C";
  }
  else if ( grade < 70 && grade >= 60){
    gpaResult.textContent = "D";
  }
  else if (grade < 60 && grade >= 0) {
    gpaResult.textContent = "F";
  }
  else{
    gpaResult.textContent = "Invalid grade input.";
  }
}

const inputWeek = document.getElementById('inputWeek');
const checkWeek = document.getElementById('checkWeek');
const weekResult = document.getElementById('weekResult');

checkWeek.onclick = function() {
  const day = parseInt(inputWeek.value);

  switch(day){
    case 1:
      weekResult.textContent = "Monday";
      break;
    case 2:
      weekResult.textContent = "Tuesday";
      break;
    case 3:
      weekResult.textContent = "Wednesday";
      break;
    case 4:
      weekResult.textContent = "Thursday";
      break;
    case 5:
      weekResult.textContent = "Friday";
      break;
    case 6:
      weekResult.textContent = "Saturday";
      break;
    case 7:
      weekResult.textContent = "Sunday";
      break;
    default:
      weekResult.textContent = "Invalid day number.";
  }
}

const inputPass = document.getElementById('inputPass');
const checkPass = document.getElementById('checkPass');
const passResult = document.getElementById('passResult');

checkPass.onclick = function() {
  const passLength = inputPass.value.length;

  if (passLength >= 8){
    passResult.textContent = "Strong password.";
  }
  else{
    passResult.textContent = "Weak password.";
  }
}

const sNumber = document.getElementById('sNumber');
const checkNumber = document.getElementById('checkNumber');
const sNumberResult = document.getElementById('sNumberResult');

checkNumber.onclick = function() {
  const snum = parseInt(sNumber.value);
  const result = (snum > 10) ? "Greater than 10." : "10 or less.";

  sNumberResult.textContent = result;
}

/*
1.b
2. true
  3.b
  4.not pos
  5. a
  6.True
  7.B
  8.A
  9.adult
  10. if program only accepts int it will input invalid grade since it was string and it get its range
*/