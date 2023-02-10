let userName = document.querySelector('form [type="text"]');
let email = document.querySelector('form [type="email"]');
let nameError = document.querySelector('form .name-error'); 
let emailError = document.querySelector('form .email-error');
let btn = document.querySelector('form button');

userName.onkeyup = () => {
    let nameValid = userName.value.match(/\W/g);
    if (nameValid == null) {
        userName.style.outline = '2px solid green';
        nameError.style.display = 'none';
    } else {
        userName.style.outline = '2px solid red';
        nameError.style.display = 'block';
    }
}

email.onkeyup = () => {
    let emailValid = email.value.match(/[!#$%^&*'"~`;:]/g);
    if (emailValid == null) {
        email.style.outline = '2px solid green';
        emailError.style.display = 'none';
    } else {
        email.style.outline = '2px solid red';
        emailError.style.display = 'block';
    }
}
