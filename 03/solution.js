const fs = require('fs');

const inputValues = fs.readFileSync('./input.txt', 'utf8').split('\n');

const regex = /\d+/g;
const symbolRegex = /[^\.|\d]/;
function isNextToSymbol (value, index, line) {
    return symbolRegex.test(line.slice(index ? index - 1 : index, index + value.length + 1))
}

const checkValues = (match, adjLines = []) => {
    const {
        0: value,
        input,
        index
    } = match;
    for (const line of [input, ...adjLines]) {
        if (isNextToSymbol(value, index, line)) return +value;
    }
    return 0;
}

let sum = 0;
for (let i = 0; i < inputValues.length; i++) {
    const matches = inputValues[i].matchAll(regex);
    for (const match of matches) {
        sum += checkValues(match, [inputValues[i-1], inputValues[i+1]].filter(Boolean));
    }
}

console.log('🚀 >>>  file: solution.js:28  sum:', sum);
