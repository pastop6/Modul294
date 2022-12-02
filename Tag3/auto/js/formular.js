// Formular open -> Standartwert setzen
Kraftstoff = "Benzin";
$("input:radio").each(function () {
    if ($(this).val() == Kraftstoff) {
        $(this).prop("checked", "checked");
    }
});


$('#testclick').click(function (e) {
    e.preventDefault();
    alert("Knopf funktioniert");
});

$("#close").click(function (e) { 
    e.preventDefault();
    // alert("Abgebrochen")
    $('FeldName').val('testo1234').addClass('valid');
    M.updateTextFields();
});

$("#save").click(function (e) { 
    e.preventDefault();
    // alert("Gespeichert");
    var name = $("#FeldName").val();
    var nummer = $("#FeldNummer").val();
    // alert(name + " " + nummer);


    var Kraftstoff = "";
    $("input:radio").each(function(){
        if($(this).prop("checked")){
            Kraftstoff = $(this).val();
        }
        console.log(Kraftstoff);
    });

});

$(document).ready(function(){
    $('.datepicker').datepicker();
  });

$('select').formSelect();

$(document).ready(function(){
    $('.timepicker').timepicker();
  });

$('.timepicker').pickatime({
    twelvehour: false,
    });
