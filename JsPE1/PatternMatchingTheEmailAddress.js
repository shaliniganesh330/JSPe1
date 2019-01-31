// A pattern that matches e-mail addresses.
// a.Uppercase (A-Z) and lowercase (a-z) English letters.
// b.Digits(0-9).
// c.Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
// d.Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.

//function to check the valid and invalid email address//
function toCheckValisMailFormat(mail){
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    if(regex.test(mail)){
        console.log("valid email id");
    }
    else{
        console.log("Not a valid email id");
    }
 }
 var mail_id = 'shaliniganesh330@gmail.com'
 toCheckValisMailFormat(mail_id);