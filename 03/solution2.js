const fs = require('fs');

const inputValues = fs.readFileSync('./input.txt', 'utf8').split('\n');

const regex = /\d+/g;
const symbolRegex = /\*/g;
const adjNumbers = (index, line) => {
    const nums = [];
    for (const match of [...line.matchAll(regex)]) {
        const start = match.index - 1;
        const end = start + match[0].length + 1;
        if (start <= index && index <= end) {
            nums.push(+match[0]);
        }
        if (end > index) break;
    }
    return nums;
}

const checkAdjLines = (match, adjLines = []) => {
    const {
        input,
        index
    } = match;
    const adjNums = [];
    for (const line of [input, ...adjLines]) {
        adjNums.push(...adjNumbers(index, line))
    }
    return adjNums.length === 2 ? adjNums.reduce((a, b) => a * b) : 0;
}

let sum = 0;
for (let i = 0; i < inputValues.length; i++) {
    const matches = inputValues[i].matchAll(symbolRegex);
    for (const match of matches) {
        sum += checkAdjLines(match, [inputValues[i-1], inputValues[i+1]].filter(Boolean));
    }
}

console.log('🚀 >>>  file: solution2.js:38  sum:', sum);
