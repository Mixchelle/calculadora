const buttonData = [
  'AC', '+/-', '%', '/',
  '7', '8', '9', 'x', 
  '4', '5', '6', '+', 
  '1', '2', '3', '-',
  '0', ',', '='
];

function createButtons() {
  const buttonsContainer = document.getElementById('buttons-container');

  buttonData.forEach(value => {
    const button = document.createElement('button');
    button.textContent = value;
    button.addEventListener('click', () => onButtonClick(value));
    buttonsContainer.appendChild(button);
  });
}

let displayValue = '';

function onButtonClick(val) {
  if (val === '=') {
    calculate();
  } else if (val === 'AC') {
    clearDisplay();
  } else {
    appendValue(val);
  }
}

function appendValue(val) {
  displayValue += val;
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('result').value = displayValue;
}

// Call the createButtons() function to generate the buttons when the page loads
createButtons();