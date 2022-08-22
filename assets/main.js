const m = moment();
console.log(m.toString());

//manages the time-block section
var theDate = moment().format('LL');
document.getElementById("theDate").innerHTML = theDate;



//*manages local or session storage feature
// var storeIt = document.getElementById(".description").innerHTML;  
// localStorage.setItem("storeIt",JSON.stringify(storeIt));

// var retrieveIt = localStorage.getItem("storeIt");
// console.log("retrieveIt: ", JSON.parse(retrieveIt));

// localStorage.setItem('btn*', 'desc*');
// jQuery('saveBtn').click(function() {

// });


$(document).ready(function(){
    var stored = $('saveBtn').prev();
    
    console.log(stored);
    
});































    //$("#desc9").html("<textarea id='test' rows='4' cols='100' />"); IDEA: Can also set to input type="text"
    //$('#test').val('stuff here');
    //event.stopPropagation();

// $("#desc9").click(function() {
//     console.log("clicked");


// })