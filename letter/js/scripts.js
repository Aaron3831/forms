$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();

   $(".person1").text(person1Input);

    $("#result").show();

    event.preventDefault();
    });
  });
