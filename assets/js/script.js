// Display the current date in the Day of Week, Current Month first 3 letters, # day of month, and fully written year
var currentDay = moment().format('dddd, MMM Do YYYY');
  $("#currentDay").html(currentDay);

  $(document).ready(function () {

// saveBtn click listener
  $(".saveBtn").on("click", function () {

// Pulls values of descriptions with JQuery
var task = $(this).siblings(".description").val();
var time = $(this).parent().attr("id");
            
// element to locally store the time and text
localStorage.setItem(time, task);
})

// the following function creates the time tracker so that we can use the 'block out' system

function timeTracker() {
            
// function that will collect the current time
var timeNow = moment().hour();
    
/* This loop should make the 'block out' effect once the current time has passed the any given hour slot.
Used the id attribute to pull the individual hour buttons, and split from the 'h' in the id. Had to change
id's from h12 then h1 to h12 then h13 - guessing the that was because the '1' was smaller than the '12'
so it couldn't equate for being past, but honestly not sure*/
$(".time-block").each(function () {
  var timePast = parseInt($(this).attr("id").split("h")[1]);
    
/* if statements for checking the time that changes the classes based off of current time (timeNow)
changes class to either future, present, or past and links to the css provided to 
change the colors of the time slots
*/
  if (timePast < timeNow) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
}
  else if (timePast === timeNow) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
}
  else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
    
}})}
    
/* How we get the items that have been stored locally in each of the descriptions that the use saves
with the 'save icon' button
*/
    $("#h9 .description").val(localStorage.getItem("h9"));
    $("#h10 .description").val(localStorage.getItem("h10"));
    $("#h11 .description").val(localStorage.getItem("h11"));
    $("#h12 .description").val(localStorage.getItem("h12"));
    $("#h13 .description").val(localStorage.getItem("h13"));
    $("#h14 .description").val(localStorage.getItem("h14"));
    $("#h15 .description").val(localStorage.getItem("h15"));
    $("#h16 .description").val(localStorage.getItem("h16"));
    $("#h17 .description").val(localStorage.getItem("h17"));
    
timeTracker();
})