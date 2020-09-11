
// //get current day link to inner HTML to show on top of screen

var today = moment().format('LL');
$("#currentDay").text(today);

// color code time blocks for hours; look into for loops per time
// class with .past, .present, .future 
// grab mil time    if past, apply past class

// make save button works via onclick 
// save to local storage as apart of save button function
var savedNotes = [];

$(".saveBtn").on("click",function(event) {
    event.preventDefault();
   console.log("save");

localStorage.setItem("save","click"); 
});





//json string in 
//json 


// how do I add this? .saveBtn i:hover...style= display:none;?
// each jQuery to loop to go through results .each textarea 

// find a way to load local storage to add to html 


// use localStorage.getItem, put text into HTML (make sure javascript.js always does this via a function, make sure you call it)


