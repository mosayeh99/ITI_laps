let userOpj;
let usersArray = [];
let enterAgain;

enterdata();
function enterdata() {
    let operation = prompt('Enter operation.');
    if (operation == 'add') {
        let contactName = prompt('Enter contact name.');
        let phoneNum = prompt('Enter phone number.');
        userOpj = {
            contact: contactName,
            phone: phoneNum
        }
        usersArray.push(userOpj);
        enterAgain = confirm('New operation?');
    } else if (operation == 'search') {
        let searchValue = prompt('Search by "Contact Name"');
        for (let i = 0; i < usersArray.length; i++){
            console.log(i);
            if (usersArray[i].contact.includes(searchValue)) {
                enterAgain = confirm(`Contact Name : ${usersArray[i].contact}
Phone Number : ${usersArray[i].phone}

New operation?`);
            }
        }
    }
    enterdataagain();
}

function enterdataagain() {
    if (enterAgain) {
        enterdata();
    }
}