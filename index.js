let ss = require("simple-statistics");

let numbers = [62, 60, 53, 9, 11, 14, 15, 16, 17, 65, 88];

let smallestNumber = ss.min(numbers);
let largestNumber = ss.max(numbers);
let sumNumbers = ss.sumSimple(numbers);
let average = ss.mean(numbers);

console.log("The smallest number is: ", smallestNumber);
console.log("The largest number is: ", largestNumber);
console.log("The sum of the numbers is: ", sumNumbers);
console.log("The average of the numbers is: ", average);
