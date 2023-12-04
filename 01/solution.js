const fs = require('fs');

const testValues = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', '7trebuchet'];

const inputValues = fs.readFileSync('./input.txt', 'utf8').split('\n');

const regex = /\d/;
const getValue = (str) => {
    const matches = str.match(regex);
    const len = matches.length;
    return len > 1 ? matches[0] + matches[len-1] : matches[0] + matches[0];
};

let sum = 0;
for (let i = 0; i < inputValues.length; i++) {
    const str = inputValues[i];
    const value = getValue(str);
    sum += parseInt(value);
}
console.log('🚀 >>>  file: solution.js:25  sum:', sum);