let enterAgain;

enterdata();
function enterdata() {
    let countNumbers = prompt('How many number you wants to get the sum?');
    let numberSum = 0; 
    for(let i=0; i < +countNumbers; i++){
        numberSum += Number(prompt(`Enter Number ${i + 1}`));
    }
    
    enterAgain = confirm(`Sum of numbers : ${numberSum}
Average : ${numberSum / countNumbers}
    
Enetr Numbers Again?`);

    enternumbersagain();
}

function enternumbersagain() {
    if (enterAgain) {
        enterdata();
    }
}