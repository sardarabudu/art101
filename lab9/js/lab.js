/*
  sardar
  November 12
*/

$(document).ready(function() {
    // Add button to the challenge section
    $("#challenge").append("<button id='button-challenge'>Make Challenge Special</button>");
    // Add click listener to the challenge button
    $("#button-challenge").click(function(){
        $("#challenge").toggleClass("special");
    });

    // Add button to the problems section
    $("#problems").append("<button id='button-problems'>Make Problems Special</button>");
    // Add click listener to the problems button
    $("#button-problems").click(function(){
        $("#problems").toggleClass("special");
    });

    // Add button to the results section
    $("#results").append("<button id='button-results'>Make Results Special</button>");
    // Add click listener to the results button
    $("#button-results").click(function(){
        $("#results").toggleClass("special");
    });
});
$(".special-sections").append("<button class='special-btn'>Make Special</button>");
$(".special-sections button").click(function() {
    $(this).parent().toggleClass("special");
});

