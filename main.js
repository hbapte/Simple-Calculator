let firstNumber = '';
let operator = '';
let secondNumber = '';

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
    firstNumber = '';
    operator = '';
    secondNumber = '';
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        displayError("Cannot divide by zero!");
        return;
    }
    return a / b;
}


function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    }
}

function calculate() {
    const displayValue = document.getElementById("display").value;
    const operators = ['+', '-', '*', '/'];
    let nextOperatorIndex = -1;

    for (const operator of operators) {
        nextOperatorIndex = displayValue.indexOf(operator);
        if (nextOperatorIndex !== -1) {
            break;
        }
    }

    if (nextOperatorIndex !== -1) {
        firstNumber = parseFloat(displayValue.substring(0, nextOperatorIndex));
        operator = displayValue.charAt(nextOperatorIndex);
        secondNumber = parseFloat(displayValue.substring(nextOperatorIndex + 1));

        if (isNaN(firstNumber) || isNaN(secondNumber)) {
            displayError("Invalid input!");
            return;
        }

        const result = operate(operator, firstNumber, secondNumber);
        if (result !== null) {
            document.getElementById("display").value = result;
        } else {
            displayError("Invalid operator!");
        }
    }
}

function displayError(message) {
    document.getElementById("display").value = message;
    firstNumber = '';
    operator = '';
    secondNumber = '';
}
