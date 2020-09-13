
// //get current day and time; link to inner HTML

var today = moment().format('LLL');
$("#currentDay").text(today);

var presentTime = moment().format('HH');
console.log(presentTime)

// save to local storage on click
var savedNotes = [];

$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    console.log("save");

    var textArea = $(this).prev().val();
    console.log(textArea)
    localStorage.setItem($(this).prev().attr("id"), text)
});


// //  time blocks for past, present, and future
// $( ".hour" ).each(function( index ) {
//     console.log(savedNotes[i])
//   });

// present

