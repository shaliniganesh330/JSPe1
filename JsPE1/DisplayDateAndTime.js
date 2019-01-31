//JavaScript program to display the current day and time in the following format mm/dd/yyyy.

//function to displat the date and time//
function displayDateAndTime(){
    //get todaysdate//
    var todaysdate = new Date();
    var date = todaysdate.getDate();
    var month = todaysdate.getMonth()+1;
    var year = todaysdate.getFullYear();
    
    //get currenttime through gethours(), getminutes(), getseconds() method//
    var hours = todaysdate.getHours();
    var minutes = todaysdate.getMinutes();
    var seconds = todaysdate.getSeconds();

    //display date in mm/dd/yyyy format//
    console.log(month+"/"+date+"/"+year);
    //display time in hr:min:sec format//
    console.log(hours+":"+minutes+":"+seconds);
}
displayDateAndTime();