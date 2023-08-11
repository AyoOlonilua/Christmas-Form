$(document).ready(function() {
  $("#formOne").submit(function(event) {
    $(".new").click(function() {
        $("#formOne").toggle();
        $("#story").toggle();
    });
    
    const monthInput = $("#month").val();
    const verb1Input = $("#verb1").val();
    const placeInput= $("#place").val();
    const adjectiveInput = $("#adjective").val();
    const adjective1Input = $("#adjective1").val();
    const place1Input= $("#place1").val();
    const verb2Input = $("#verb2").val();
    const noun1Input = $("#noun1").val();
    const verb3Input = $("#verb3").val();
    const noun2Input = $("#noun2").val();
    const adjective2Input = $("#adjective2").val();
    const adjective3Input = $("#adjective3").val();
    const colorInput = $("#color").val();
    const verb4Input = $("#verb4").val();
    const exclamationInput = $("#exclamation").val();
    const holidayInput = $("#holiday").val();


    $(".month").text(monthInput);
    $(".verb1").text(verb1Input);
    $(".place").text(placeInput);
    $(".adjective").text(adjectiveInput);
    $(".adjective1").text(adjective1Input);
    $(".place1").text(place1Input);
    $(".verb2").text(verb2Input);
    $(".noun1").text(noun1Input);
    $(".verb3").text(verb3Input);
    $(".noun2").text(noun2Input);
    $(".adjective2").text(adjective2Input);
    $(".adjective3").text(adjective3Input);
    $(".color").text(colorInput);
    $(".verb4").text(verb4Input);
    $(".exclamation").text(exclamationInput);
    $(".holiday").text(holidayInput);

    $("#story").show();
    event.preventDefault();
  });
});