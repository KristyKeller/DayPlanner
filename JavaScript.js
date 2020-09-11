// //get current day link to inner HTML to show on top of screen

var today = moment().format('LL');
$("#currentDay").text(today);

// color code time blocks for hours; look into for loops per time

moment().format('LT'); 


// class with .past, .present, .future 


// make save button works via onclick 
// save to local storage as apart of save button function

$(".saveBtn").click(function() {
    console.log("save");
});


// find a way to load local storage to add to html 


// use localStorage.getItem, put text into HTML (make sure javascript.js always does this via a function, make sure you call it)

