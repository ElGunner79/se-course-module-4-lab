let firstNumber;
let secondNumber;
let operation;

let resultElem = document.getElementById('result')

function clickNumber(num) {
    if (!firstNumber) {
        firstNumber = num.toString();
        resultElem.innerText = firstNumber;
    }
    else if (!operation) {
        firstNumber += num.toString();
        resultElem.innerText = firstNumber;
    }
    else if (!secondNumber) {
        secondNumber = num.toString();
        resultElem.innerText = secondNumber;
    }
    else {
        secondNumber += num.toString();
        resultElem.innerText = secondNumber;
    }
}

function clickOperator(op) {
    operation = op;
}

function calculateResult() {
    let firstNum = parseFloat(firstNumber);
    let secondNum = parseFloat(secondNumber);

    switch (operation) {
        case '+':
            resultElem.innerText = firstNum + secondNum;
            break;
        case '-':
            resultElem.innerText = firstNum - secondNum;
            break;
        case '*':
            resultElem.innerText = firstNum * secondNum;
            break;
        case '/':
            resultElem.innerText = firstNum / secondNum;
            break;
    }

    firstNumber = resultElem.innerText;
    secondNumber = null;
    operation = null;
}

function clearResult() {
    firstNumber = null;
    secondNumber = null;
    operation = null;
    resultElem.innerText = '';
}