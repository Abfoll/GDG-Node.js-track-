const _ = require('lodash');

const numbers = [15, 23, 5, 9, 42, 7, 18];

const maxNumber = _.max(numbers);
const minNumber = _.min(numbers);

console.log(`The maximum number is: ${maxNumber}`);
console.log(`The minimum number is: ${minNumber}`);
