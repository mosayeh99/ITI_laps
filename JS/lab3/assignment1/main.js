let fName = window.prompt('Enter Your First Name');
let lName = window.prompt('Enter Your Last Name');
let birthYear = window.prompt('Enter Your Birth Year');
let age = 2022 - birthYear;

document.write(`Welcome ${fName} ${lName} you are ${age}years old.`);