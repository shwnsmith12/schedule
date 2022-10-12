// Display the current date in the Day of Week, Current Month first 3 letters, # day of month, and fully written year
var currentDay = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDay);

