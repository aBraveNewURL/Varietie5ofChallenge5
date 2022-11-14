const m = moment();
let mHours = moment().hours();
let past;
let present;
let future;
let timeBlocks = $('.container');
let timeBlockRow = $('.time-block');
let saveBtn = $('.saveBtn');

//manages the time-block section
let theDate = moment().format('LL');
// document.getElementById('theDate').innerHTML = theDate;

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

console.log("The time is " + mHours);

function setColor() {
    let currentHour = moment().hour()
    timeBlockRow.each(function () {
        let timeSlot = parseInt($(this).data('time'));
        if (currentHour === timeSlot) {
            $(this).addClass(present)
        } else if (currentHour > timeSlot) {
            $(this).addClass(past)
        }
        else {
            $(this).addClass(future)
        }
    });
};

setColor();