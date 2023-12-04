const fs = require('fs');
const testValues = ['two1nine', 'eightwothree', 'abcone2threexyz', 'xtwone3four', '4nineeightseven2', 'zoneight234', '7pqrstsixteen'];

const inputValues = fs.readFileSync('./input.txt', 'utf8').split('\n');

const regex1 = /^.*?(\d|one|two|three|four|five|six|seven|eight|nine)/;
const regex2 = /.*(\d|one|two|three|four|five|six|seven|eight|nine).*?$/;

const STR_TO_NUM = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
}

const getNum = (str) => {
    return STR_TO_NUM[str] || str;
}

const getValue = (str) => {
    const firstNumber = str.match(regex1);
    const secondNumber = str.match(regex2);
    const data = getNum(firstNumber[1]) + getNum(secondNumber[1]);
    return parseInt(data);
};

let sum = 0;
for (let i = 0; i < inputValues.length; i++) {
    const str = inputValues[i];
    const value = getValue(str);
    sum += value;
}
console.log('🚀 >>>  file: solution-part2.js:35  sum:', sum);
