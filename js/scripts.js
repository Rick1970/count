$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var test = $("input#question").val();
    var test2 = $("input#question2").val();

    for (var index = 0; index < test; index += parseInt(test2)) {
      var newTest = test - index;
      $("#list").append("<li>" + newTest + "</li>");
    }






    event.preventDefault();

  });
});



// var test = $("input#question").val();
// var test2 = $("input#question2").val();
// for (var index = 0; index < test; test -= test2) {
// $("#list").append("<li>" + test + "</li>");
//
// }
