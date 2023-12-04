const fs = require('fs');

const inputValues = fs.readFileSync('./input.txt', 'utf8').split('\n');

const regex = /\d+/g;
const getValue = (str) => {
    const [winners, myNumbers] = str.split('|').map((nums) => nums.match(regex));
    const matches = myNumbers.filter((num) => winners.includes(num)).length;
    return matches;
};

const count = {};
for (let i = 0; i < inputValues.length; i++) {
    const str = inputValues[i];
    const [, , numbers] = str.match(/(\d+):(.+)/);
    const value = getValue(numbers);
    for (let m = 1; m <= value; m++) {
        const cardId = i + m;
        count[cardId] = count[cardId] || 0;
        count[cardId] += count[i] + 1 || 1;
    }
}

const total = inputValues.length + Object.values(count).reduce((a, b) => a + b);
console.log('🚀 >>>  file: solution2.js:25  total:', total);
