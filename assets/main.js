const m = moment();
let mHours = moment().hours();
let past;
let present;
let future;

//manages the time-block section
var theDate = moment().format('LL');
document.getElementById("theDate").innerHTML = theDate;

//manages local or session storage feature

let saveBtn = $('.saveBtn');

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
