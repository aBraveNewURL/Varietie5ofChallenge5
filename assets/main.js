const m = moment();
console.log(m.toString());

var theDate = moment().format('MM/DD/YYYY')

document.getElementById("theDate").innerHTML = theDate;

    //$("#desc9").html("<textarea id='test' rows='4' cols='100' />"); IDEA: Can also set to input type="text"
    //$('#test').val('stuff here');
    //event.stopPropagation();

$("#desc9").click(function() {
    console.log("clicked");


})