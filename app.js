let displayValue = document.querySelector('.display');

let firstNum;
let secondNum;
let operator;
let input;
let result;

const displayInput = function (input) {
  displayValue.textContent += input;
}

const buttons = document.querySelectorAll('button')
buttons.forEach(function (currentBtn) {
  currentBtn.addEventListener('click', function (e) {
    input = e.target.innerText;
    if (!operator) {

      if (!firstNum && !isNaN(input)) { //operators should be disabled
        firstNum = input;
        console.log(firstNum, 'cool its a number');
      } else if (!isNaN(input)) {
        firstNum += input;
        console.log(firstNum, 'cool its a number');
      } else if (input === '+' || input === '-' || input === '*' || input === '/') {
        operator = input;
      }

    } else { //disable operators except =
      if (!secondNum && !isNaN(input)) { //operators should be disabled
        secondNum = input;
        console.log(secondNum, 'cool its a number');
      } else if (!isNaN(input)) {
        secondNum += input;
        console.log(secondNum, 'cool its a number');
      } else if (input === '=') {
        result = operate(operator, firstNum, secondNum);
        displayValue.textContent = result;

      }
      
    }
    
  });
  
})




function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return substract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
  }
}



