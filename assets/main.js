const m = moment();
let todayDate = moment().format('dddd, MMMM Do');
let past;
let present;
let future;
let timeBlocks = $('.container');
let timeBlockRow = $('.time-block');

$('#currentDay').text(todayDate);

setColor = () => {
    let currentHour = moment().hour();
    console.log("The hour is " + currentHour);
    timeBlockRow.each(function () {
        let blockHour = parseInt($(this).data('time'));

        if (currentHour > blockHour) {
            $(this).addClass('past')
        } else if (currentHour === blockHour) {
            $(this).addClass('present')
        }
        else {
            $(this).addClass('future')
        }
    });
};
setColor();

renderStored = () => {
    let descriptionInput = $('.hour');
    descriptionInput.each(function () {

        let time2 = $(this).attr('id')

        let timeStored = localStorage.getItem('time');

        let textStored = localStorage.getItem('description');

        if (timeStored === time2) {
            $(this).siblings('.description').text(textStored);
        }
    })
};
renderStored();

let saveButton = $('.saveBtn');
$(saveButton).on('click', function () {
    event.preventDefault();
    let time1 = $(this).parent().parent().data('time');
    let description = $(this).siblings('.description').val();
    localStorage.setItem('time', time1);
    localStorage.setItem('description', description);
});



