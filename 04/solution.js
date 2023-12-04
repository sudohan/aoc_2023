const fs = require('fs');

const inputValues = fs.readFileSync('./input.txt', 'utf8').split('\n');

const regex = /\d+/g;
const getValue = (str) => {
    const [winners, myNumbers] = str.split('|').map((nums) => nums.match(regex));
    const matches = myNumbers.filter((num) => winners.includes(num)).length;
    return matches ? 2**(matches-1) : 0;
};

let sum = 0;
for (let i = 0; i < inputValues.length; i++) {
    const str = inputValues[i];
    const value = getValue(str.split(':')[1]);
    sum += value;
}

console.log('🚀 >>>  file: solution.js:31  sum:', sum);
