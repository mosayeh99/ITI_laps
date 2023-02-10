let enterAgeAgain;
defineAge();

function defineAge() {
    let age = prompt('Enter your age.');
    if (age < 1) {
        enterAgeAgain = confirm('Your age is incorrect, Please enter positive number.');
    } else {
        if (age >= 1 && age <= 10) {
            enterAgeAgain = confirm(`You are Child.

Enter age again?`);
        } else if (age >= 11 && age <= 18) {
            enterAgeAgain = confirm(`You are Teenager.

Enter age again?`);
        } else if (age >= 19 && age <= 50) {
            enterAgeAgain = confirm(`You are Grown.

Enter age again?`);
        } else if (age > 50) {
            enterAgeAgain = confirm(`You are Old.

Enter age again?`);
        }
    }
    askEnterAgain();
}

function askEnterAgain() {
    if (enterAgeAgain) {
        defineAge();
    }
}