const m = moment();
let todayDate = moment().format('dddd, MMMM Do');
let past;
let present;
let future;
let timeBlocks = $('.container');
let timeBlockRow = $('.time-block');
let saveBtn = $('.saveBtn');

$('#currentDay').text(todayDate);

// $('.saveBtn').on('click', () => {
//     let currentData = $('body').html();
//     let describeEl = $(this).siblings('.description').text();
//     let hourEl = $(this).siblings('.hour').text();
//     localStorage.setItem(hourEl, describeEl);
//     localStorage.setItem('description', describeEl);
//     localStorage.setItem('hour', hourEl);

//     if (localStorage.getItem('.hour', describeEl) != currentData) {
//         localStorage.getItem('.hour', describeEl);
//         renderStored();
//     }
// });

// function renderStored() {
//     let gotHour = localStorage.getItem("hour");
//     let gotDescription = localStorage.getItem("description");
// };
// renderStored();

// console.log("The time is " + theDate);

function setColor() {
    let currentHour = moment().hour();
    timeBlockRow.each(function () {
        let blockHour = parseInt($(this).data('time'));
        if (currentHour === blockHour) {
            $(this).addClass('present')
        } else if (currentHour > blockHour) {
            $(this).addClass('past')
        }
        else {
            $(this).addClass('future')
        }
    });
};

setColor();