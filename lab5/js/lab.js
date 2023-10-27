// Task 2: JavaScript Program for Lab 5

// Declare variables
var make = "Toyota";
var model = "Camry";
var color = "Blue";
var year = 2020;
var ownIt = true;

// Calculate age
var currentYear = new Date().getFullYear();
var age = currentYear - year;

// Output variables using document.writeln()
document.writeln("Make: " + make + "<br>");
document.writeln("Model: " + model + "<br>");
document.writeln("Color: " + color + "<br>");
document.writeln("Year: " + year + "<br>");
document.writeln("Own it: " + ownIt + "<br>");
document.writeln("Age: " + age + "<br>");
