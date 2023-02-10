let enterAgain;

enterdata();
function enterdata() {
    let userName = prompt('Enter Username.');
    let password = prompt('Enter Password.');

    if (userName == 'admin' && password == '421$$') {
        alert('Welcome login success.');
    }else {
        enterAgain = confirm(`Data entered wrong.

Enter data Again?`)
    }
    enterwrong();
}

function enterwrong() {
    if (enterAgain) {
        enterdata();
    }
}