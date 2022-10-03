
//basic calculator functions
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
    return a / b;
}

//takes an operatos and 2 numbers
function operate(operate, a, b) {
    switch (operate) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

function addNumberOnScreen(text) {
    if (a !== "" && displayValue === "") { //reseta se tiver clicado em um operador
        display.textContent = "";
    }

    displayValue += text;
    display.textContent = displayValue;
}

function addOperatorOnscreen(text) {
    operatorValue = text;
    operator.textContent = operatorValue;


    if (displayValue !== "" && a === "") { //adiciona o valor no "a" se clicar no operador
        a = +displayValue;
        displayValue = "";
    }

}

function displayResult() {
    operatorValue = operator.textContent;
    if (displayValue === "") {
        display.textContent = operate(operatorValue, lastResult, b);
    } else if (lastResult !== "") {
        b = +display.textContent;
        display.textContent = operate(operatorValue, lastResult, b);
        displayValue = "";
    } else {
        b = +display.textContent;
        displayValue = "";
        display.textContent = operate(operatorValue, a, b);
    }
    lastResult = +display.textContent;
}


//global variables
const display = document.querySelector(".display");
const operator = document.querySelector(".operator");
let displayValue = "";
let operatorValue = "";
let a = "";
let b = "";
let lastResult = "";


//events 
//get numeric values
const numbers = document.querySelectorAll(".number");
numbers.forEach(node => {
    const text = node.textContent;
    node.addEventListener('click', () => {
        addNumberOnScreen(text);
    });
});

//get operators
const operators = document.querySelectorAll(".operator");
operators.forEach(node => {
    const text = node.textContent;
    node.addEventListener('click', () => {
        addOperatorOnscreen(text);
    })
})


//get special actions
const result = document.querySelector(".equals");
result.addEventListener("click", () => {
    displayResult();
})