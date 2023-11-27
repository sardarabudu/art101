// Written by: sardar
// Description: FizzBuzz
// Last modified: 2023-11-26



function fizzBuzz(maxNum) {
    let outputStr = "";
    for (let i = 1; i <= maxNum; i++) {
        let result = "";
        if (i % 3 === 0) result += "Fizz";
        if (i % 5 === 0) result += "Buzz";
        if (i % 7 === 0) result += "Boom";
        outputStr += `<p>${i}: ${result || i}</p>`;
    }
    $("#output").html(outputStr);
}

$(document).ready(function() {
    $('#run-fizzbuzz').click(function() {
        let maxNumber = $('#max-number').val();
        maxNumber = parseInt(maxNumber, 10) || 200; // Default to 200 if input is not a number
        fizzBuzz(maxNumber);
    });
});