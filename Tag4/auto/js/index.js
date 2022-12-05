console.log("Index Geladen");

ListeDarstellen();

function ListeDarstellen(){
    var template = $("#template").html();
    // console.log(template);
    // Handlebars Template compilieren
    var Template_Script = Handlebars.compile(template);
    $.ajax({
        type: "get",
        url: "api.php",
        dataType: "json",
        success: function (response) {
            console.log(response);
            var html = Template_Script(response);
            // HTML ins main einfügen
            $("main").html(html);

            //functionen erst ab hier
            // Löschen
            $('.deleteCar').click(function (e) { 
                e.preventDefault();
                var id = $(this).attr("data-id");
                // delete
                console.log(id);
                $.ajax({
                    type: "DELETE",
                    url: "api.php?id="+id,
                    dataType: "JSON",
                    success: function (response) {
                        console.log(response);
                        ListeDarstellen();
                    }
                });
            });

        }
    });
        
};

            // // Editieren
            // $('.editCar').click(function (e) { 
            //     e.preventDefault();
            //     var id = $(this).attr("data-id");
            //     // delete
            //     console.log(id);
            //     $.ajax({
            //         type: "POST",
            //         url: "api.php?id="+id,
            //         data: {
            //             name: FeldName,
            //             kraftstoff: "Benzin",
            //             farbe: FeldColor,
            //             bauart: FeldTyp,
            //             tanken: FeldTank,
            //             date: FeldDate,
            //             bemerkung: FeldBeschreibung,
            //             status: "checked"
            //         },
            //         dataType: "JSON",
            //         success: function (response) {
            //             console.log(response);
            //             ListeDarstellen();
            //         }
            //     });
            // });



// var template = $("#template").html();
// // console.log(template);
// // Handlebars Template compilieren
// var Template_Script = Handlebars.compile(template);
// $.ajax({
//     type: "get",
//     url: "api.php",
//     dataType: "json",
//     success: function (response) {
//         console.log(response);
//         var html = Template_Script(response);
//         // HTML ins main einfügen
//         $("main").html(html);
//         // action für die Buttons erst ab hier
//         $('.deleteCar').click(function (e) { 
//             e.preventDefault();
//             var id = $(this).attr("data-id");
//             // delete
//             console.log(id);
//             $.ajax({
//                 type: "DELETE",
//                 url: "api.php?id="+id,
//                 dataType: "JSON",
//                 success: function (response) {
//                     console.log(response);
//                     ListeDarstellen();
//                 }
//             });
//         });
//     }
// });

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

// $('.deleteCar').click(function (e) { 
//     e.preventDefault();
//     var dialog = confirm("Wollen Sie das Auto wirklich löschen?");
//     if (dialog) {
//         alert("Auto wurde gelöscht");
//     }
//     else{
//         alert("Auto wurde nicht gelöscht");
//     }
// });

