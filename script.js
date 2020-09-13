
// get current day and time; link to inner HTML

var today = moment().format('LLL');
$("#currentDay").text(today);

var presentTime = moment().format('HH');
console.log(presentTime)

// save to local storage
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    console.log("save");
    var textArea = $(this).parent().find("textarea.textarea").val()
    var textAreaKey = $(this).parent().find("textarea.textarea").attr("id")

     savedNotes = {};
    savedNotes[textAreaKey] = textArea
    console.log(savedNotes)


    localStorage.setItem("save", JSON.stringify(savedNotes));
});


// time blocks for past, present, and future
// link to CSS to color code 
