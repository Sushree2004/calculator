let displayValue = '0';

function updateDisplay() {
  document.getElementById('display').textContent = displayValue;
}

function appendToDisplay(value) {
  if (displayValue === '0' && value !== '.') {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function toggleSign() {
  if (displayValue !== '0' && displayValue !== 'Error') {
    displayValue = displayValue.startsWith('-') ? displayValue.slice(1) : `-${displayValue}`;
    updateDisplay();
  }
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

updateDisplay();
