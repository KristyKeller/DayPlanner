
// get current day and time; link to inner HTML
// header date 
var today = moment().format('LLL');
$("#currentDay").text(today);

// internal time
var currentTime = moment().format('HH');
console.log(currentTime)

$(document).ready(function () {

    $(document).ready(function () {

//  time updates
        updateTime();
        function updateTime() {
            $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
    
            setInterval(function () {
                updateTime();
            }, 1000);
    
        };
    

// save to local storage



// present

var presentTime = moment().format('LT');
console.log(presentTime)


// time blocks for past, present, and future
// link to CSS to color code 
