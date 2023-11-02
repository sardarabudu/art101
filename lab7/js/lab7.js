/*
    ART101 Lab 7: String Manipulation
  sardar
    Date: November 2
*/
function sortUserName() {
    let userName = window.prompt("Please enter your name:");
    let sortedName = userName.split('').sort().join('');
    return sortedName;
}

document.writeln("Sorted Name: " + sortUserName());

