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

// $("#close").click(function (e) { 
//     e.preventDefault();
//     // alert("Abgebrochen")
//     $('FeldName').val('testo1234').addClass('valid');
//     M.updateTextFields();
// });

$("#close").click(function (e) { 
        e.preventDefault();
        $('#modal1').modal('close');
    });

$("#save").click(function (e) { 
    e.preventDefault();
    // alert("Gespeichert");
    var name = $("#FeldName").val();
    var marke = $("#FeldMarke").val();
    var tank = $("#FeldTank").val();
    var color = $("#FeldColor").val();
    var typ = $("#FeldTyp").val();
    var date = $("#FeldDate").val();
    var time = $("#FeldTime").val();
    // alert(name + " " + nummer);

    console.log(name);
    console.log(marke);
    console.log(tank);
    console.log(color);
    console.log(typ);
    console.log(date);
    console.log(time);


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
