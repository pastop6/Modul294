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

    // Editieren
    $('.editCar').click(function (e) { 
        e.preventDefault();
        var id = $(this).attr("data-id");
        // delete
        console.log(id);
        $.ajax({
            type: "POST",
            url: "api.php?id="+id,
            data: {
                name: FeldName,
                kraftstoff: "Benzin",
                farbe: FeldColor,
                bauart: FeldTyp,
                tanken: FeldTank,
                date: FeldDate,
                bemerkung: FeldBeschreibung,
                status: "checked"
            },
            dataType: "JSON",
            success: function (response) {
                console.log(response);
                ListeDarstellen();
            }
        });
    });


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





// $('#save').click(function(e){
//     e.preventDefault();

//     var name = $("#FeldName").val();
//     var marke = $("#FeldMarke").val();
//     var tank = $("#FeldTank").val();
//     var color = $("#FeldColor").val();
//     var typ = $("#FeldTyp").val();
//     var date = $("#FeldDate").val();
//     var time = $("#FeldTime").val();

//     //insert
//     $.ajax({
//         type: "POST",
//         url: "/Tag3/api.php",
//         data: {
//             name: name,
//             kraftstoff: Kraftstoff,
//             farbe: farbe,
//             bauart: bauart,
//             tanken: tank,
//             date: date,
//             bemerkung: bemerkung,
//             status: 'check'
//             },
//         dataType: "json",
//         success: function (response) {
//             console.log(response);
//             location.reload();
//         }
//     });
