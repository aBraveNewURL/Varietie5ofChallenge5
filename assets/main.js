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


let saveButton = $('.saveBtn');
saveButton.on('click', (event) => {
    event.preventDefault()
    let time1 = $(this).parent().parent().data('time')
    let descriptionBox = $(this).siblings('.description').val();
    localStorage.setItem('time', time1);
    localStorage.setItem('description', descriptionBox)
});


renderStored = () => {

    let descriptionInput = $('.description');
    descriptionInput.each(function () {
        console.log('descriptionInput= ' + descriptionInput)


        let time2 = $(this).siblings('.hour')
        console.log('time2= ' + time2)

        let timeStored = localStorage.getItem('time');
        console.log('timeStored= ' + timeStored)


        let textStored = localStorage.getItem('description');
        console.log('textStored= ' + textStored)
        if (timeStored === time2) {
            textStored.textContent.$(this)
            console.log(textStored.textContent.$(this))

        }
    })
};
renderStored();