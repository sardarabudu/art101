function sortingHat(str) {
    let length = str.length;
    let mod = length % 4;
    let houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];
    return houses[mod];
  }
  $('#button').click(function() {
    let name = $('#input').val();
    let house = sortingHat(name);
    $('#output').append(`<p>The Sorting Hat has sorted you into ${house}</p>`);
  });
    