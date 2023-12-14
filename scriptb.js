let currentInput = '';
let operator = null;
let operand1 = null;

function clearDisplay() {
    currentInput = '';
    operator = null;
    operand1 = null;
    document.getElementById('display').value = '';
}

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function appendOperator(op) {
    if (operator !== null) calculate();
    operator = op;
    operand1 = parseFloat(currentInput);
    currentInput = '';
}

function calculate() {
    if (operator !== null) {
        let operand2 = parseFloat(currentInput);
        switch (operator) {
            case '+':
                currentInput = operand1 + operand2;
                break;
            case '-':
                currentInput = operand1 - operand2;
                break;
            case '*':
                currentInput = operand1 * operand2;
                break;
            case '/':
                currentInput = operand1 / operand2;
                break;
        }
        operator = null;
        operand1 = null;
        document.getElementById('display').value = currentInput;
    }
}