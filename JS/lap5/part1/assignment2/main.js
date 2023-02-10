let enterAgain;
let result;

enterdata();
function enterdata() {
    let firstNum = Number(prompt('Enter first number.'));
    let operation = prompt(`Enter Operation.
EX: +, -, *, /, %`);
    let secondNum = Number(prompt('Enter second number.'));

    if (operation == '+') {
        result = firstNum + secondNum;
        enterAgain = confirm(`result: ${result}
        
Use the last result to do new operation on it?`);
    }else if (operation == '-') {
        result = firstNum - secondNum;
        enterAgain = confirm(`result: ${result}
        
Use the last result to do new operation on it?`);
    }else if (operation == '*') {
        result = firstNum * secondNum;
        enterAgain = confirm(`result: ${result}
        
Use the last result to do new operation on it?`);
    }else if (operation == '/') {
        result = firstNum / secondNum;
        enterAgain = confirm(`result: ${result}
        
Use the last result to do new operation on it?`);
    }else if (operation == '%') {
        result = firstNum % secondNum;
        enterAgain = confirm(`result: ${result}
        
Use the last result to do new operation on it?`);
    }
}

newoperation();
function newoperation() {
    if (enterAgain) {
        let operation = prompt(`Enter Operation.
EX: +, -, *, /, %`);
            let secondNum = Number(prompt('Enter second number.'));
        
            if (operation == '+') {
                result += secondNum;
                enterAgainloop = confirm(`result: ${result}

Use the last result to do new operation on it?`);
            }else if (operation == '-') {
                result -= secondNum;
                enterAgainloop = confirm(`result: ${result}

Use the last result to do new operation on it?`);
            }else if (operation == '*') {
                result *= secondNum;
                enterAgainloop = confirm(`result: ${result}

Use the last result to do new operation on it?`);
            }else if (operation == '/') {
                result /= secondNum;
                enterAgainloop = confirm(`result: ${result}

Use the last result to do new operation on it?`);
            }else if (operation == '%') {
                result %= secondNum;
                enterAgainloop = confirm(`result: ${result}

Use the last result to do new operation on it?`);
            }
    }
    enterloop();
}

function enterloop() {
    if (enterAgainloop) {
        newoperation();
    }
}