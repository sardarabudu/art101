const endpoint = "https://api.nasa.gov/planetary/apod";
const APIkey = "bQstAZJ7UMKr1besydDSgb72dpcXI8P0AtfDZ8ZR";

$("#get-em").click(function() {
    $.ajax({    
        url: endpoint,
        data: { api_key: APIkey }, 
        type: "GET", 
        dataType: "json", 
        success: ajaxSuccess,
        error: ajaxError
    });

    function ajaxSuccess(data) {
        console.log(data);
        const title = data.title;
        const desc = data.explanation;
        const img = data.url;

        $("#title").empty().append(title);
        $("#desc").empty().append(desc);
        $("#img").empty().append($('<img>', { src: img }));
    }

    function ajaxError(jqXHR, textStatus, errorThrown) {
        console.error('Error fetching data: ', textStatus, errorThrown);
    }
});
