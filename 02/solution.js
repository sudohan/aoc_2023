const fs = require('fs');

const inputValues = fs.readFileSync('./input.txt', 'utf8').split('\n');

LIMITS = {
    red: 12,
    green: 13,
    blue: 14
}

const regex = /(\d+|\w+) (\w+|\d+)/g;
const getValue = (str) => {
    const matches = [...str.matchAll(regex)];
    const gameId = matches.shift()[2];
    for (let i = 0; i < matches.length; i++) {
        const [, value, color] = matches[i];
        if (value > LIMITS[color]) {
            return 0;
        }
    }
    return parseInt(gameId);
};

let sum = 0;
for (let i = 0; i < inputValues.length; i++) {
    const str = inputValues[i];
    const value = getValue(str);
    sum += value;
}

console.log('🚀 >>>  file: solution.js:31  sum:', sum);
