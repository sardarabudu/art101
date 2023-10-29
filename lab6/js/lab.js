/* 
    art101/lab6/js/lab.js
    My JavaScript program for experimenting with arrays and objects.
*/

var myTransport = ["car", "bus", "bicycle", "walking"];

var myMainRide = {
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    color: "blue"
};

document.writeln("Getting around: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");
