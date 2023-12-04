/*
sardar
Lab 15
date: 12/2/2023
*/


$(document).ready(function() {
    $("#activate").click(function() {
        $.ajax({
            url: "https://yesno.wtf/api", // YesNo API endpoint
            type: "GET",
            dataType : "json",
            success: function(data) {
                var resultHtml = '<p>Answer: ' + data.answer.toUpperCase() + '</p>';
                if (data.image) {
                    resultHtml += '<img src="' + data.image + '" alt="Answer Image">';
                }
                $('#output').html(resultHtml);
            },
            error: function (jqXHR, textStatus, errorThrown) { 
                $('#output').html('<p>Error: ' + textStatus + '</p>');
            }
        });
    });
});

