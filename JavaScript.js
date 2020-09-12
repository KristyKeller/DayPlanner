
// //get current day link to inner HTML to show on top of screen

var today = moment().format('LLL');
$("#currentDay").text(today);


// save to local storage
var savedNotes = [];

$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    console.log("save");
    var textArea = $(this).parent().find("textarea.textarea").val()
    var textAreaKey = $(this).parent().find("textarea.textarea").attr("id")

     savedNotes = {};
    savedNotes[textAreaKey] = textArea
    console.log(savedNotes)


//     localStorage.setItem("save", JSON.stringify(savedNotes));
});


//  time blocks for past, present, and future
// $( "hour" ).each(function( index, element ) {
//     // element == this
//     $( element ).css( ".present", ".past", ".future");
//     if ( $( this ).is( "time" ) ) {
//     }
//   });

//  for loops per time
// present

// var presentTime = moment().format('LT');
// console.log(presentTime)
// $(".present").addClass("time"); 

// // for (let i = 0; i < presentTime.length; i++) {
// //     console.log( presentTime[i]);

// // past 
// var pastTime = moment().format('LT');
// console.log(pastTime)
// $(".past").addClass("time"); 

// // future
// var futureTime = moment().format('LT');
// console.log(pastTime)
// $(".future").addClass("time"); 