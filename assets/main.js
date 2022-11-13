var m = moment();
let mHours = moment().hours();
console.log(m.toString);
console.log(mHours);

//manages the time-block section
var theDate = moment().format('LL');
document.getElementById("theDate").innerHTML = theDate;

//manages local or session storage feature

var saveBtn = document.querySelector(".saveBtn");

//let hourExample = 'hour-9';
//parseInt(hourExample.split('-')[1]) =  9

$('.saveBtn').on("click", function () {
    var currentData = $('body').html();
    var describeEl = $(this).siblings('.description').text();
    var hourEl = $(this).siblings('.hour').text();
    localStorage.setItem(hourEl, describeEl);
    localStorage.setItem('description', describeEl);
    localStorage.setItem('hour', hourEl);

    

    if (localStorage.getItem('.hour', describeEl) != currentData) {
        localStorage.getItem('.hour', describeEl);
        renderStored();
    }
});

function renderStored() {
    var gotHour = localStorage.getItem("hour");
    var gotDescription = localStorage.getItem("description");


    // $('.description').eq(0).text(gotDescription);
    // $('.hour').eq(0).text(gotHour);
};
renderStored();

// GIVEN I am using a daily planner to create a schedule
// ?WHEN I open the planner
// ?THEN the current day is displayed at the top of the calendar
// ?WHEN I scroll down
// ?THEN I am presented with timeblocks for standard business hours
// !WHEN I view the timeblocks for that day
// !THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// ?WHEN I click into a timeblock
// ?THEN I can enter an event
// !WHEN I click the save button for that timeblock
// !WHEN I refresh the page
// !THEN the saved events persist


// while i = 9; i < 18; i++; {

// };
console.log("The time is "+ mHours);

function colorize() {
    if (document.getElementById(row10).innerHTML > mHours){
        console.log("Not quite yet");
    } else if (document.getElementById("row10").innerHTML < mHours){
        console.log("It's not time yet")
    } else if (document.getElementById("row10").innerHTML === mHours){
        console.log("That is this hour")
    }
} ;
colorize();


































// $
// var storeIt = document.getElementById(".description").innerHTML;
// localStorage.setItem("storeIt",JSON.stringify(storeIt));

// var retrieveIt = localStorage.getItem("storeIt");
// console.log("retrieveIt: ", JSON.parse(retrieveIt));

// localStorage.setItem('btn*', 'desc*');
// jQuery('saveBtn').click(function() {

// });
