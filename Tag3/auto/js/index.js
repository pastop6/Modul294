console.log("Index Geladen");

var template = $("#template").html();
// console.log(template);
// Handlebars Template compilieren
var Template_Script = Handlebars.compile(template);
$.ajax({
    type: "get",
    url: "json/cars.json",
    dataType: "json",
    success: function (response) {
        console.log(response);
        var html = Template_Script(response);
        // HTML ins main einfügen
        $("main").html(html);
        // action für die Buttons erst ab hier
    }
});

$('.modal').modal();

// $('.driveCar').click(function (e) { 
//     e.preventDefault();
//     $('.driveCar').
// });

$('#addCar').click(function (e) {
    e.preventDefault();
    $('#ModalTitle').html('Neues Auto hinzufügen');
    $("#ModalInhalt").load("pages/formular.html", function(){
        $.getScript("js/formular.js");
    });
    $('#save').html('Hinzufügen');
});

$('.editCar').click(function (e) {
    e.preventDefault();
    $('#ModalTitle').html('Auto editieren');
    $('#save').html('Bearbeiten');
});

$('.deleteCar').click(function (e) { 
    e.preventDefault();
    var dialog = confirm("Wollen Sie das Auto wirklich löschen?");
    if (dialog) {
        alert("Auto wurde gelöscht");
    }
    else{
        alert("Auto wurde nicht gelöscht");
    }
});