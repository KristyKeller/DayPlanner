
// //get current day link to inner HTML to show on top of screen

var today = moment().format('LLL');
$("#currentDay").text(today);


// save to local storage
var savedNotes = [];

$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    console.log("save");
    savedNotes = [{ time: 9, text: "textarea1" }, { time: 10, text: "textarea2" }, { time: 11, text: "textarea3" }, { time: 12, text: "textarea4" }, { time: 13, text: "textarea5" }, { time: 14, text: "textarea6" }, { time: 15, text: "textarea7" }, { time: 16, text: "textarea8" }, { time: 17, text: "textarea9" }];

    localStorage.setItem("save", JSON.stringify(savedNotes));
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

var presentTime = moment().format('LT');
console.log(presentTime)
$(".present").addClass("time"); 

// for (let i = 0; i < presentTime.length; i++) {
//     console.log( presentTime[i]);

// past 
var pastTime = moment().format('LT');
console.log(pastTime)
$(".past").addClass("time"); 

// future
var futureTime = moment().format('LT');
console.log(pastTime)
$(".future").addClass("time"); 


// }
// for (let i = 0; i < pastTime.length; i++) {
//     console.log( presentTime[i]);
// }
// for (let i = 0; i < futureTime.length; i++) {
//     console.log( presentTime[i]);
// }

// call localStorage and save once refreshed