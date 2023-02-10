let nameFiled = document.querySelector('input[type= "text"]');
let passFiled = document.querySelector('input[type= "password"]');
let loginBtn = document.querySelector('input[type= "submit"]');
let sucessMsg = document.querySelector('.sucess-msg');
let errorMsg = document.querySelector('.error-msg');

loginBtn.onclick = (e) => {
    e.preventDefault();
    if (nameFiled.value.toLowerCase() == 'admin' && passFiled.value == 123) {
        sucessMsg.style.display = 'block';
        errorMsg.style.display = 'none';
        clearInputs();
    } else {
        errorMsg.style.display = 'block';
        sucessMsg.style.display = 'none';
    }
}

function clearInputs() {
    nameFiled.value = "";
    passFiled.value = "";
}