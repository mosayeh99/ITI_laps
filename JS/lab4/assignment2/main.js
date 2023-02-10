let enterStringAgain;
countVowels();

function countVowels() {
    let word = prompt('Enter string to count the number of vowels.');
    let wordArray = word.split('');
    let count =0;
    wordArray.forEach((e) => {
        if (e == 'a') {
            count++;
        }else if (e == 'e') {
            count++;
        }else if (e == 'i') {
            count++;
        }else if (e == 'o') {
            count++;
        }else if (e == 'u') {
            count++;
        }
    });
    enterStringAgain = confirm(`Your string contain ${count} vowels.

Enter another string.`);
enetrAgain()
}

function enetrAgain() {
    if (enterStringAgain) {
        countVowels();
    }
}
