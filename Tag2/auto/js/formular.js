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
    alert("Gespeichert");
    var name = $("#FeldName").val();
    var nummer = $("#FeldNummer").val();
    alert(name + " " + nummer);
});