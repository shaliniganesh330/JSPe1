// JavaScript program to remove duplicate items from an array.//

//function to remove duplicate items//
function removeDuplicateItems(){
var names = ['John', 'Paul', 'George', 'Ringo', 'John','John'];
var duplicate = [...new Set(names)];
console.log(duplicate);
}

removeDuplicateItems();