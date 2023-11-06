var numbers = [1, 4, 9, 16, 25];

function calculateSquareRoot(x) {
    var result = Math.sqrt(x);  
    return result;
}

console.log(calculateSquareRoot(4));  
console.log(calculateSquareRoot(5));  
console.log(calculateSquareRoot(6));  

var squareRoot = numbers.map(calculateSquareRoot);
console.log(squareRoot);  

var doubledNumbers = numbers.map(function(x) {
    var result = x * 2;
    return result;
});
console.log(doubledNumbers); 
