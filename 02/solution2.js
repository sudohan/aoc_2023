const fs = require('fs');

const inputValues = fs.readFileSync('./input.txt', 'utf8').split('\n');

const regex = /(\d+) (\w+)/g;
const getValue = (str) => {
    const matches = [...str.matchAll(regex)];
    const lowest = {};
    for (let i = 0; i < matches.length; i++) {
        const [, value, color] = matches[i];
        const parsedInt = parseInt(value);
        lowest[color] = !lowest[color] || parsedInt > lowest[color] ? parsedInt : lowest[color];
    }
    return Object.values(lowest).reduce((acc, val) => acc * val);
};

let sum = 0;
for (let i = 0; i < inputValues.length; i++) {
    const str = inputValues[i];
    const value = getValue(str);
    sum += value;
}

console.log('🚀 >>>  file: solution2.js:22  sum:', sum);
