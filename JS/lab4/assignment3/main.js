let enterTimeAgain;
convertTime();

function convertTime() {
    let time24h = prompt('Enter time in 24-h.');
    if (time24h == 0 || time24h == 24) {
        enterTimeAgain = confirm(`Time is : 12AM
        
Enter Time Again?`);
    }else if (time24h > 0 && time24h <= 12) {
        enterTimeAgain = confirm(`Time is : ${time24h}AM
        
Enter Time Again?`);
    }else if (time24h > 12 && time24h <= 24){
        enterTimeAgain = confirm(`Time is : ${time24h - 12}PM
        
Enter Time Again?`);
    }else {
        enterTimeAgain = confirm(`Incorrect Time, Please enter valid time.`);
    }
    enterAgain();
}

function enterAgain() {
    if (enterTimeAgain) {
        convertTime();
    }
}