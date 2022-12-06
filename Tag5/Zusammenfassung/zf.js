//Objects (Dictionary)
let cars = {car:"Honda", model:"Civic", year:1998};
Object.entries(cars).forEach(element => {
    const [key, value] = element;
    console.log(key, value);
});

//Element in Objects ausgeben
console.log(cars.model);

//JQuery Click Event
$('#senden').click(function (e) { 
    e.preventDefault();
    var testfeld = $('#textfeld').val();
    console.log(testfeld);
});