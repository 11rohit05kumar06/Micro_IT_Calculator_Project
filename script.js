let currentOperation = null;
let currentValue = '';
let previousValue = '';

function appendNumber(num) {
  currentValue += num;
  updateDisplay();
}

function setOperation(op) {
  if (currentValue === '') return;
  if (previousValue !== '') {
    calculateResult();
  }
  currentOperation = op;
  previousValue = currentValue;
  currentValue = '';
}

function calculateResult() {
  let result;
  const prev = parseFloat(previousValue);
  const current = parseFloat(currentValue);

  if (isNaN(prev) || isNaN(current)) return;

  switch (currentOperation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = current === 0 ? 'Error' : prev / current;
      break;
    default:
      return;
  }
  currentValue = result.toString();
  currentOperation = null;
  previousValue = '';
  updateDisplay();
}

function clearDisplay() {
  currentValue = '';
  previousValue = '';
  currentOperation = null;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentValue;
}
