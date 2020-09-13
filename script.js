
// Get current day and time; link to inner HTML

var today = moment().format('LLL');
$("#currentDay").text(today);

var presentTime = moment().format('HH');
console.log(presentTime)

// Save to local storage on click
var savedNotes = [];

$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    console.log("save");

    var textArea = $(this).prev().val();
    console.log(textArea)
    localStorage.setItem($(this).prev().attr("id"), textArea)
});

// Adding time block that links to CSS coloring for past, present, and future

$("input").each(function () {
    var selectedTime = parseInt($(this).attr("id"));
    console.log(selectedTime)

    if (selectedTime > presentTime) {
        $(this).addClass("future")

    } else if (selectedTime == presentTime) {

        $(this).addClass("present")

    }
    else {
        $(this).addClass("past")

    };

    $("#" + selectedTime).val(localStorage.getItem(selectedTime))

});
