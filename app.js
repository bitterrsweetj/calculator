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
          computation = prev / current;
        }
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';

  }


  updateDisplay() {
    if (this.currentOperand.toString().length > 13) {
      this.currentOperandTextElement.innerText = this.currentOperand.toString().slice(0, 13);
    }
    else {
      this.currentOperandTextElement.innerText = this.currentOperand;
    } 
    if (this.operation != null) {
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

// keyboard support
const keyboardInput = document.querySelector('.current-operand');

document.addEventListener('keydown', (event) => {
  console.log(event.key);
  switch (event.key) {
    case '0': calculator.appendNumber(0);
      calculator.updateDisplay();
      break;
    case '1':
      calculator.appendNumber(1);
      calculator.updateDisplay();
      break;
    case '2':
      calculator.appendNumber(2);
      calculator.updateDisplay();
      break;
    case '3':
      calculator.appendNumber(3);
      calculator.updateDisplay();
      break;
    case '4':
      calculator.appendNumber(4);
      calculator.updateDisplay();
      break;
    case '5':
      calculator.appendNumber(5);
      calculator.updateDisplay();
      break;
    case '6':
      calculator.appendNumber(6);
      calculator.updateDisplay();
      break;
    case '7':
      calculator.appendNumber(7);
      calculator.updateDisplay();
      break;
    case '8':
      calculator.appendNumber(8);
      calculator.updateDisplay();
      break;
    case '9':
      calculator.appendNumber(9);
      calculator.updateDisplay();
      break;
    case '+':
      calculator.chooseOperation('+');
      calculator.updateDisplay();
      break;
    case '-':
      calculator.chooseOperation('-');
      calculator.updateDisplay();
      break;
    case '*':
      calculator.chooseOperation('*');
      calculator.updateDisplay();
      break;
    case '/':
      calculator.chooseOperation('÷');
      calculator.updateDisplay();
      break;
    case '=':
      calculator.compute();
      calculator.updateDisplay();
      break;
    case 'Enter':
      calculator.compute();
      calculator.updateDisplay();
      break;
    case 'Backspace':
      calculator.delete();
      calculator.updateDisplay();
      break;
    case '.':
      calculator.appendNumber('.');
      calculator.updateDisplay();
      break;
    default:
      return;
  }
})
