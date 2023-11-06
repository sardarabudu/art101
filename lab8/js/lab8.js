/*
 * Art 101 - Lab 8 JavaScript Experiment
 * Author: sardar
 * Date: November 5
 */
// Array of numbers
var numbers = [1, 2, 3, 4, 5];

// Function to square each number
function squareNumber(x) {
    return x * x;
}

// Testing the squareNumber function
console.log(squareNumber(2));  // Outputs: 4
console.log(squareNumber(3));  // Outputs: 9
console.log(squareNumber(4));  // Outputs: 16

// Using map with the squareNumber function
var squaredNumbers = numbers.map(squareNumber);
console.log(squaredNumbers);  // Outputs: [1, 4, 9, 16, 25]

// Using map with an anonymous function to double each number
var doubledNumbers = numbers.map(function(x) {
    return x * 2;
});
console.log(doubledNumbers);  // Outputs: [2, 4, 6, 8, 10]

