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

let value1;
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

let result = operate(6, "plus", 3);
console.log(result);