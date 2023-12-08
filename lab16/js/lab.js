//sardar
// Date: 12/07/2023


$(document).ready(function() {
    // Fetching the current comic as an example
    var apiUrl = "https://cors-anywhere.herokuapp.com/https://xkcd.com/614/info.0.json";

    $.ajax({
        url: apiUrl,
        type: "GET",
        dataType: "json",
        success: function(data) {
            displayComic(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
    });

    function displayComic(comicData) {
        // Create elements to display the comic
        var title = $('<h3>').text(comicData.title);
        var image = $('<img>', {
            src: comicData.img,
            alt: comicData.alt,
            title: comicData.alt // Tooltip on hover
        });
        var description = $('<p>').text(comicData.alt);

        // Append elements to a designated div in your HTML
        $('#output').empty().append(title, image, description);
    }
});

