const inputTemp = document.getElementById('inputTemp');
const converted = document.getElementById('converter');
const celsiusBtn = document.getElementById('CelsiusBtn');
const fahrenheit = document.getElementById('Fahrenheit');

function tempConverter(type) {
  const value = parseFloat(inputTemp.value);

  if (isNaN(value)) {
    converted.textContent = 'Please Enter a Number';
    return;
  }

  if (type === 'FtoC') {
    const c = value * 1.8 + 32;
    converted.textContent = `The Celsius value is ${c}`;
  }
  else if (type === 'CtoF') {
    const f = value - 32 * 0.5556;
    converted.textContent = `The Fahrenheit value is ${f}`;
  }
  else {
    converted.textContent = `Invalid Input`;
  }
}

celsiusBtn.onclick = () => tempConverter('FtoC');
fahrenheit.onclick = () => tempConverter('CtoF');

//calculator
let buttons = document.querySelectorAll('button');
let input = document.getElementById('input');
let firstValue = null;
let operator = null;
let secondValue = '';

buttons.forEach(btn => {
  btn.addEventListener("click", function () {
    if (this.id === 'CelsiusBtn') return;
    if (this.id === 'Fahrenheit') return;
    if (this.id === 'clear') {
      firstValue = null;
      operator = null;
      secondValue = '';
      input.value = '';
      return;
    }

    if (this.id === 'equal') {
      compute();
      return;
    }

    if (['+', '-', 'x', '÷'].includes(this.value)) {
      if (firstValue === null) {
        firstValue = parseFloat(secondValue);
        operator = this.value;
        input.value = secondValue + operator;
        secondValue = '';
      }
      else {
        compute();
        operator = this.value;
      }
      return;
    }

    secondValue += this.value;
    if (firstValue !== null && operator !== null) {
      input.value = firstValue + operator + secondValue;
    } else {
      input.value = secondValue;
    }
  });
});


function compute() {
  if (firstValue === null || operator === null || secondValue === "") return;

  let a = firstValue;
  let b = parseFloat(secondValue);
  let result = 0;

  switch (operator) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case 'x': result = a * b; break;
    case '÷': result = a / b; break;
  }

  input.value = result;
  firstValue = result;
  secondValue = "";
  operator = null;
}





