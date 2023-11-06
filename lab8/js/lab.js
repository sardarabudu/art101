/*
 * Art 101 - Lab 8 JavaScript Experiment
 * Author: sardar
 * Date: November 5
 */
var numbers = [1, 2, 3, 4, 5];

function squareNumber(x) {
    return x * x;
}

console.log(squareNumber(2));  
console.log(squareNumber(3));  
console.log(squareNumber(4)); 

var squaredNumbers = numbers.map(squareNumber);
console.log(squaredNumbers);  

var doubledNumbers = numbers.map(function(x) {
    return x * 2;
});
console.log(doubledNumbers);  

