const m = moment();
let todayDate = moment().format('dddd, MMMM Do');
let past;
let present;
let future;
let timeBlocks = $('.container');
let timeBlockRow = $('.time-block');

$('#currentDay').text(todayDate);
// const image = data?.someval[i]?.image || "no image found"
// const somethingelse = (data.someval.someother ? '2.00' : [])
setColor = () => {
    // TODO -- loop this for each block?
    let currentHour = moment().hour();
    console.log("The hour is " + currentHour);
    timeBlockRow.each(function () {
        let blockHour = parseInt($(this).data('time'));
        
        // (!(currentHour > blockHour)) ? $(this).addClass('past') : currentHour === blockHour ? $(this).addClass('present') : $(this).addClass('future')
        
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
    // TODO -- loop this for each hour?
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
    // TODO -- loop this for each hour?
    let time1 = $(this).parent().parent().data('time');
    let description = $(this).siblings('.description').val();
    localStorage.setItem('time', time1);
    localStorage.setItem('description', description);
});



