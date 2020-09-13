
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

// save to local storage and save when refreshed
$(".saveBtn").on("click", function (event) {
    event.preventDefault();

    var userInfo = $(this).prev().val();
    console.log(userInfo)
    localStorage.setItem($(this).prev().attr("id"), userInfo)

});


$("input").each(function () {
    var selectTextarea = parseInt($(this).attr("id"));
    console.log(selectTextarea)

    if (selectTextarea > currentTime) {
        $(this).addClass("future")

    } else if (selectTextarea == currentTime) {

        $(this).addClass("present")

    }
    else {
        $(this).addClass("past")

    };

    $("#" + selectTextarea).val(localStorage.getItem(selectTextarea))

});