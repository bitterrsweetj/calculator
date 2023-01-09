class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';

  }

  compute() {
    let computation;
    let prev = parseFloat(this.previousOperand);
    let current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case 'x':
        computation = prev * current;
        break;
      case '÷':
        if (current === 0) {
          this.currentOperandTextElement.innerText = "OOPS";
        } else {
        computation = prev / current; }
        break;
      default: 
      return;
    }
    this.currentOperand = computation.toFixed(10);
    this.operation = undefined;
    this.previousOperand = '';

  }

  
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    if(this.operation != null){
      this.previousOperandTextElement.innerText = `${this.previousOperand}${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = '';
    }
  }
}

const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalsButton = document.querySelector('.equals');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay();
  })
});


operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay();
  })
});

equalsButton.addEventListener('click', () => {
  calculator.compute();
  calculator.updateDisplay();
})

allClearButton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
})

deleteButton.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
})












// let displayValue = document.querySelector('.display');
//
// let firstNum;
// let secondNum;
// let operator;
// let input;
// let result;
//
// const clearDisplay = function () {
//   displayValue.textContent = '';
//   firstNum = '';
//   secondNum = '';
//   operator = '';
// }
//
// const buttons = Array.from(document.querySelectorAll('button'));
// buttons.map (currentBtn => {
//   currentBtn.addEventListener('click', (e) => {
//     switch(e.target.innerText) {
//       case 'C':
//         displayValue.textContent = '';
//         break;
//       case '=':
//       default:
//         displayValue.textContent += e.target.innerText;
//     }
//     input = e.target.innerText;
//     if (!operator) {
//
//       if (!firstNum && !isNaN(input)) { //operators should be disabled
//         firstNum = input;
//         console.log(firstNum, 'cool its a number');
//       } else if (!isNaN(input)) {
//         firstNum += input;
//         console.log(firstNum, 'cool its a number');
//       } else if (input === '+' || input === '-' || input === '*' || input === '/') {
//         operator = input;
//       }
//
//     } else { //disable operators except '='
//       if (!secondNum && !isNaN(input)) { //operators should be disabled
//         secondNum = input;
//         console.log(secondNum, 'cool its a number');
//       } else if (!isNaN(input)) {
//         secondNum += input;
//         console.log(secondNum, 'cool its a number');
//       } else if (input === '=') {
//         result = operate(operator, firstNum, secondNum);
//         displayValue.textContent = result;
//
//       }
//
  // }
//
//   });
//
// })
//
//
//
//
// function add(a, b) {
//   return parseInt(a) + parseInt(b);
// }
//
// function substract(a, b) {
//   return parseInt(a) - parseInt(b);
// }
//
// function multiply(a, b) {
//   return parseInt(a) * parseInt(b);
// }
//
// function divide(a, b) {
//   return parseInt(a) / parseInt(b);
// }
//
// function operate(operator, num1, num2) {
//   switch (operator) {
//     case '+':
//       return add(num1, num2);
//     case '-':
//       return substract(num1, num2);
//     case '*':
//       return multiply(num1, num2);
//     case '/':
//       return divide(num1, num2);
//   }
// }



