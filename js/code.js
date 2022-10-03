
//basic calculator functions
function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

//takes an operatos and 2 numbers
function operate(operate, a,b){
    switch(operate){
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
    }
}

function addValueOnScreen(text){
    display.textContent += text;
    displayValue += text;
}

//global variables
const display = document.querySelector(".display");
let displayValue = "";


//events 

//get numeric values
const numbers = document.querySelectorAll(".number");
numbers.forEach( node => {
    const text = node.textContent;
    node.addEventListener('click', () => {
        addValueOnScreen(text);
    });
});

//get operators
const operators = document.querySelectorAll(".operator");
operators.forEach( node => {
    const text = node.textContent;
    node.addEventListener('click', () => {
        addValueOnScreen(text);
    })
})


//get special actions