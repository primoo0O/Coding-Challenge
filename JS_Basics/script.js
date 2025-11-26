const text = document.getElementById("text");
const submit = document.getElementById("submit");
const answer = document.getElementById("answer");


submit.onclick = function () {
  raw = text.value;
  number = Number(raw);

  if (number > 0) {
    answer.textContent = "The number is positive.";
  }
  else if (number < 0) {
    answer.textContent = "The number is negative.";
  }
  else {
    answer.textContent = "The number is zero.";
  }

}

const grade = document.getElementById("grade");
const submitG = document.getElementById("submitG");
const gradeAnswer = document.getElementById("gradeAnswer");

submitG.onclick = function () {
  rawG = grade.value;
  gpa = Number(rawG);

  if (gpa >= 90 && gpa <= 100) {
    gradeAnswer.textContent = "A";
  }
  else if (gpa >= 80 && gpa <= 90) {
    gradeAnswer.textContent = "B";
  }
  else if (gpa >= 70 && gpa <= 80) {
    gradeAnswer.textContent = "C";
  }
  else {
    gradeAnswer.textContent = "F";
  }
}

const dayInput = document.getElementById("dayInput");
const submitD = document.getElementById("submitD");
const dayAnswer = document.getElementById("dayAnswer");

submitD.onclick = function () {
  rawD = dayInput.value;
  day = Number(rawD);

  switch (day) {
    case 1:
      dayAnswer.textContent = "It's Monday!";
      break;
    case 2:
      dayAnswer.textContent = "It's Tuesday!";
      break;
    case 3:
      dayAnswer.textContent = "It's Wednesday!";
      break;
    case 4:
      dayAnswer.textContent = "It's Thursday!";
      break;
    case 5:
      dayAnswer.textContent = "It's Friday!";
      break;
    case 6:
      dayAnswer.textContent = "It's Saturday!";
      break;
    case 7:
      dayAnswer.textContent = "It's Sunday!";
      break;
    default:
      dayAnswer.textContent = `${day} is not a valid day!`;
  }
}

const inputPass = document.getElementById("inputPass");
const submitP = document.getElementById("submitP");
const passResult = document.getElementById("passResult");

submitP.onclick = function () {
  rawpass = inputPass.value;
  password = rawpass.length;

  if (password >= 8) {
    passResult.textContent = "Strong password.";
  }
  else {
    passResult.textContent = "Weak password.";
  }
}

const inputN = document.getElementById("inputNum");
const submitNum = document.getElementById("submitNumber");
const numberResult = document.getElementById("numberResult");

function greaterThanTen() {

  const number = parseInt(inputN.value);
  const result = number > 10 ? "Number is greater than 10." : "Number is 10 or less.";

  numberResult.textContent = result;
}

submitNum.onclick = greaterThanTen;