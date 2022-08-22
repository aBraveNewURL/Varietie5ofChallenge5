const m = moment();
console.log(m.toString());

//manages the time-block section
var theDate = moment().format('LL');
document.getElementById("theDate").innerHTML = theDate;









//*manages local or session storage feature

var saveBtn = document.querySelector(".saveBtn");



$('.saveBtn').on("click", function(){

    var describeEl = $(this).siblings('.description').text();
   var hourEl = $(this).siblings('.hour').text();
   localStorage.setItem('description',describeEl);
   localStorage.setItem('hour',hourEl);

   var currentData = $('body').html();
   
   if (localStorage.getItem('.hour', describeEl) != currentData) {
    localStorage.getItem('.hour',describeEl);
    renderStored();
}
});

function renderStored() {
    localStorage.getItem("hour");
    localStorage.getItem("description");
};
renderStored();






































// $
// var storeIt = document.getElementById(".description").innerHTML;  
// localStorage.setItem("storeIt",JSON.stringify(storeIt));

// var retrieveIt = localStorage.getItem("storeIt");
// console.log("retrieveIt: ", JSON.parse(retrieveIt));

// localStorage.setItem('btn*', 'desc*');
// jQuery('saveBtn').click(function() {

// });
