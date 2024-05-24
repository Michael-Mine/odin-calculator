function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let value1 = 0
let operator;
let value2;

function operate(num1, operator, num2) {
    let answer;
    switch (operator) {
        case "plus":
            answer = add(num1, num2);
            break;
        case "minus":
            answer = subtract(num1, num2);
            break;
        case "times":
            answer = multiply(num1, num2);
            break;
        case "division":
            answer = divide(num1, num2);
            break;
    };
    return answer;
};

let displayValue = "";

const container = document.querySelector("#display");

const content = document.createElement("div");

content.textContent = "0";
container.appendChild(content);

const btn1 = document.querySelector("#one");
btn1.addEventListener("click", () => {
    content.textContent += "1";
    displayValue += "1";
    console.log(displayValue);
});

const btn2 = document.querySelector("#two");
btn2.addEventListener("click", () => {
    content.textContent += "2";
    displayValue += "2";
    console.log(displayValue);
});

const btn3 = document.querySelector("#three");
btn3.addEventListener("click", () => {
    content.textContent += "3";
    displayValue += "3";
});

const btnPlus = document.querySelector("#plus");
btnPlus.addEventListener("click", () => {
    operator = "plus";
    if (value1 === 0) {
        value1 = parseInt(displayValue);
        content.textContent += " + ";
        displayValue = "";
    } else {
        value2 = parseInt(displayValue);
        let result = operate(value1, operator, value2);
        content.textContent = "= " + result + " + ";
        value1 = result;
        displayValue = "";
    };
});

const btnEquals = document.querySelector("#equals");
btnEquals.addEventListener("click", () => {
    value2 = parseInt(displayValue);
    let result = operate(value1, operator, value2);
    content.textContent = "= " + result;
    value1 = result;
});

const btnClear = document.querySelector("#clear");
btnClear.addEventListener("click", () => {
    value1 = 0;
    value2 = 0;
    operator = "";
    content.textContent = "0";
});
