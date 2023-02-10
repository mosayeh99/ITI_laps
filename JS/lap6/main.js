// ----------------------------Using Class-----------------------------------
class User1 {
    constructor (fullName, items, sleepHours, countMeals){
        // properties
        this.fullName = fullName;
        this.money = items;
        this.sleepMood = sleepHours;
        this.healthRate = countMeals;
    }
        // methods
        sleep() {
            return this.sleepMood == 7 ? 'Happy' : this.sleepMood > 7 ? 'Tired' : 'Lazy';
        }
        eat() {
            return  this.healthRate == 3 ? '100 healthRate' : this.healthRate == 2 ? '75 healthRate' : '50 healthRate';
        }
        buy() {
            return `Decrees Money ${this.money * 10} LE`;
        }
}

let userOne = new User1('Mohamed', 2, 7, 2);

console.log(`Name: ${userOne.fullName}, ${userOne.eat()}, your sleepMood: ${userOne.sleep()} and bought ${userOne.money} items`);
console.log(userOne.sleep());
console.log(userOne.eat());
console.log(userOne.buy());


// ------------------------Using Constructor Function----------------------------------
function User2(fullName, items, sleepHours, countMeals){
            // properties
            this.fullName = fullName;
            this.money = items;
            this.sleepMood = sleepHours;
            this.healthRate = countMeals;
}

let userTwo = new User2('Elsayeh', 3, 10, 1);

// methods
userTwo.sleep = function() {
    return this.sleepMood == 7 ? 'Happy' : this.sleepMood > 7 ? 'Tired' : 'Lazy';
}
userTwo.eat = function() {
    return  this.healthRate == 3 ? '100 healthRate' : this.healthRate == 2 ? '75 healthRate' : '50 healthRate';
}
userTwo.buy = function() {
    return `Decrees Money ${this.money * 10} LE`;
}

console.log(`Name: ${userTwo.fullName}, ${userTwo.eat()}, your sleepMood: ${userTwo.sleep()} and bought ${userTwo.money} items`);
console.log(userTwo.sleep());
console.log(userTwo.eat());
console.log(userTwo.buy());


// ------------------------Using OLOO----------------------------------
let User3 = {};
User3.fullName = 'Abd Elzaher';
User3.money = 2;
User3.sleepMood = 5;
User3.healthRate = 1;

let copyObj = Object.create(User3);
copyObj.sleep = function() {
    return this.sleepMood == 7 ? 'Happy' : this.sleepMood > 7 ? 'Tired' : 'Lazy';
}
copyObj.eat = function() {
    return  this.healthRate == 3 ? '100 healthRate' : this.healthRate == 2 ? '75 healthRate' : '50 healthRate';
}
copyObj.buy = function() {
    return `Decrees Money ${this.money * 10} LE`;
}

console.log(`Name: ${copyObj.fullName}, ${userTwo.eat()}, your sleepMood: ${copyObj.sleep()} and bought ${copyObj.money} items`);
console.log(copyObj.sleep());
console.log(copyObj.eat());
console.log(copyObj.buy());