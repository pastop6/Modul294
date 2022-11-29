console.log("Index Geladen");

$('.modal').modal();

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

