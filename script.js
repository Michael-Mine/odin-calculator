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
    if (operator !== 0) {
        content.textContent += "1";
        displayValue += "1";
    };
});

const btn2 = document.querySelector("#two");
btn2.addEventListener("click", () => {
    if (operator !== 0) {
        content.textContent += "2";
        displayValue += "2";
    };
});

const btn3 = document.querySelector("#three");
btn3.addEventListener("click", () => {
    if (operator !== 0) {
        content.textContent += "3";
        displayValue += "3";
    };
});

const btn4 = document.querySelector("#four");
btn4.addEventListener("click", () => {
    if (operator !== 0) {
        content.textContent += "4";
        displayValue += "4";
    };
});

const btn5 = document.querySelector("#five");
btn5.addEventListener("click", () => {
    if (operator !== 0) {
        content.textContent += "5";
        displayValue += "5";
    };
});

const btn6 = document.querySelector("#six");
btn6.addEventListener("click", () => {
    if (operator !== 0) {
        content.textContent += "6";
        displayValue += "6";
    };
});

const btn7 = document.querySelector("#seven");
btn7.addEventListener("click", () => {
    if (operator !== 0) {
        content.textContent += "7";
        displayValue += "7";
    };
});

const btn8 = document.querySelector("#eight");
btn8.addEventListener("click", () => {
    if (operator !== 0) {
        content.textContent += "8";
        displayValue += "8";
    };
});

const btn9 = document.querySelector("#nine");
btn9.addEventListener("click", () => {
    if (operator !== 0) {
        content.textContent += "9";
        displayValue += "9";
    };
});

const btn0 = document.querySelector("#zero");
btn0.addEventListener("click", () => {
    if (operator !== 0) {
        content.textContent += "0";
        displayValue += "0";
    };
});

const btnPlus = document.querySelector("#plus");
btnPlus.addEventListener("click", () => {
    operator = "plus";
    if (value1 === 0) {
        value1 = parseInt(displayValue);
        content.textContent += " + ";
        displayValue = "";
    } else if (value2 === 0){
        content.textContent += " + ";
        value2 = parseInt(displayValue);
        displayValue = "";
    } else if (displayValue !== "") {
        value2 = parseInt(displayValue);
        let result = operate(value1, operator, value2);
        content.textContent = "= " + result + " + ";
        value1 = result;
        displayValue = "";
    };
});

const btnClear = document.querySelector("#clear");
btnClear.addEventListener("click", () => {
    value1 = 0;
    value2 = "";
    operator = "";
    content.textContent = "0";
});

const btnMinus = document.querySelector("#minus");
btnMinus.addEventListener("click", () => {
    operator = "minus";
    if (value1 === 0) {
        value1 = parseInt(displayValue);
        content.textContent += " - ";
        displayValue = "";
    } else if (value2 === 0) {
        content.textContent += " - ";
        displayValue = "";
    } else if (displayValue !== "") {
        value2 = parseInt(displayValue);
        let result = operate(value1, operator, value2);
        content.textContent = "= " + result + " - ";
        value1 = result;
        displayValue = "";
    };
});

const btnTimes = document.querySelector("#times");
btnTimes.addEventListener("click", () => {
    operator = "times";
    if (value1 === 0) {
        value1 = parseInt(displayValue);
        content.textContent += " x ";
        displayValue = "";
    } else if (value2 === 0) {
        content.textContent += " x ";
        displayValue = "";
    } else if (displayValue !== "") {
        value2 = parseInt(displayValue);
        let result = operate(value1, operator, value2);
        content.textContent = "= " + result + " x ";
        value1 = result;
        displayValue = "";
    };
});

const btnDivide = document.querySelector("#divide");
btnDivide.addEventListener("click", () => {
    operator = "division";
    if (value1 === 0) {
        value1 = parseInt(displayValue);
        content.textContent += " / ";
        displayValue = "";
    } else if (value2 === 0) {
        content.textContent += " / ";
        displayValue = "";
    } else if (displayValue !== "") {
        value2 = parseInt(displayValue);
        let result = operate(value1, operator, value2);
        content.textContent = "= " + result + " / ";
        value1 = result;
        value2 = "";
        displayValue = "";
    };
});

const btnEquals = document.querySelector("#equals");
btnEquals.addEventListener("click", () => {
    if ((value1 === 0 || value2 === 0) && (operator === "division")) {
        alert("Error: Cannot divide by zero!");
        value1 = 0;
        value2 = "";
        displayValue = "";
        content.textContent = "0";
    }
    if ((value1 != 0) && (displayValue !== "")) {
        value2 = parseInt(displayValue);
        let result = operate(value1, operator, value2);
        if (Number.isInteger(result)) {
            content.textContent = "= " + result;
        } else {
            content.textContent = "= " + (result).toPrecision(8);
        }
        value1 = result;
        value2 = 0;
        displayValue = "";
        operator = 0
    };
});
