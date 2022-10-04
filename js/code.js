
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
    if (a !== "" && displayValue === "") { //reseta se tiver clicado em um operador ja com um numero na tela
        display.textContent = "";
    }

    displayValue += text;
    display.textContent = displayValue;
}

function addOperatorOnscreen(text) {

    if (a !== "" && operatorValue !== "" && displayValue !== "") { //faz a conta se clicar no igual novamente,  
        displayResult();
    }

    operatorValue = text;
    operator.textContent = operatorValue;


    if (displayValue !== "" && a === "") { //adiciona o valor no "a" se clicar no operador
        a = +displayValue;
        displayValue = "";
    }

}

function displayResult() {
    if (a === "" || (b === "" && lastResult === "" && displayValue ==="" )) return; //nao faz a conta e nao tiver nenhum numero atribuido 

    //operatorValue = operator.textContent;
    if (displayValue === "") {
        display.textContent = operate(operatorValue, lastResult, b); // faz
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
//display numeric values
const numbers = document.querySelectorAll(".number");
numbers.forEach(node => {
    const text = node.textContent;
    node.addEventListener('click', () => {
        addNumberOnScreen(text);
    });
});

//display operators
const operators = document.querySelectorAll(".operator");
operators.forEach(node => {
    const text = node.textContent;
    node.addEventListener('click', () => {
        addOperatorOnscreen(text);
    })
})


//special actions
// =
const result = document.querySelector(".equals");
result.addEventListener("click", () => {
    displayResult();
})

// C
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    displayValue = "";
    operatorValue = "";
    a = "";
    b = "";
    lastResult = "";
    display.textContent = "";
    operator.textContent = "";
});

// %
const percent = document.querySelector(".percent");
percent.addEventListener("click", () => {
    //resume
    if (a !== "" && b === "" && lastResult === "" && displayValue === "") {
        display.textContent = +display.textContent / 100;
        a = +display.textContent;
    } else if (a !== "" && b !== "" && lastResult !== "" && displayValue === "") {
        display.textContent = +display.textContent / 100;
        lastResult = +display.textContent;
    } else {
        display.textContent = +display.textContent / 100;
        displayValue = display.textContent;
    }
})

// +/-
const sign = document.querySelector(".sign");
sign.addEventListener("click", () => {

    if (a === "" && b === "" && lastResult === "" && displayValue !== "") {
        display.textContent = +display.textContent * (-1);
        displayValue = display.textContent;
    }
    if (a !== "" && b === "" && lastResult === "" && displayValue !== "") {
        display.textContent = +display.textContent * (-1);
        displayValue = display.textContent;
    }
    if (a !== "" && b !== "" && lastResult !== "" && displayValue !== "") {
        display.textContent = +display.textContent * (-1);
        displayValue = display.textContent;
    }
});

// delete 
const del = document.querySelector(".del");
del.addEventListener("click", () => {
    if(displayValue === ""){
        return;
    }
    displayValue = displayValue.slice(0,displayValue.length -1 );
    display.textContent = displayValue;
    if(displayValue === "-"){
        displayValue = "";
        display.textContent = displayValue;
    }
});

// .
const dot = document.querySelector(".point");
dot.addEventListener("click", () =>{
    const point = dot.textContent;
    if (b === "" && lastResult === "" && displayValue === ""){
        return;
    }
    addNumberOnScreen(point);
})