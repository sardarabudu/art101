/*
 * Lab 7 - JavaScript Function to Sort Letters in a User's Name
 * Author: sardar
 * Date: November 5
 */


function sortUserName() {
    // Prompt the user for their name
    var userName = window.prompt("Enter your name:");

    // Convert the string to an array of characters
    var charArray = userName.split('');

    // Sort the array
    charArray.sort();

    // Convert the sorted array back to a string
    var sortedName = charArray.join('');

    // Return the sorted name
    return sortedName;
}

// Call the function and output the sorted name
document.writeln("Sorted name: " + sortUserName());
