var numbers = [1, 2, 3, 4, 5];

function squareNumber(x) {
    var result = x * x;
    return result;
}

console.log(squareNumber(2));  
console.log(squareNumber(3));  
console.log(squareNumber(4)); 

var squaredNumbers = numbers.map(squareNumber);
console.log(squaredNumbers);  

var doubledNumbers = numbers.map(function(x) {
    var result = x * 2;
    return result;
});
console.log(doubledNumbers);  
