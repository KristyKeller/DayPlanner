
// //get current day link to inner HTML to show on top of screen

var today = moment().format('LLL');
$("#currentDay").text(today);

// moment().format('LT');

// color code time blocks for hours; look into for loops per time
// class with .past, .present, .future 
// grab mil time    if past, apply past class

// make save button works via onclick 
// save to local storage as apart of save button function
var savedNotes = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    console.log("save");
    [{ time: 9, text: "textarea1" }, { time: 10, text: "textarea2" }, { time: 11, text: "textarea3" }, { time: 12, text: "textarea4" }, { time: 13, text: "textarea5" }, { time: 14, text: "textarea6" }, { time: 15, text: "textarea7" }, { time: 16, text: "textarea8" }, { time: 17, text: "textarea9" }];

    localStorage.setItem("save", JSON.stringify(savedNotes));
});

//json string in 
//json 
// each jQuery to loop to go through results .each textarea 

// find a way to load local storage to add to html 


// use localStorage.getItem, put text into HTML (make sure javascript.js always does this via a function, make sure you call it)


