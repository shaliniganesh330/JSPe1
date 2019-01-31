//JavaScript conditional statement to find the largest of five numbers

var readline = require('readline-sync');
//function to find largest of 5 numbers//
function largestOfNumbers(){
   var number = [];
   for(var index = 0; index < 5;index++){
    number[index] = readline.question("Enter the"+" "+(index+1)+" "+"number\n")  
 }

   var largest =0;
   number.forEach(function(item){
      if(item>largest){
          largest = item;
      }
   })
   return largest;
}
console.log("Largest of all numbers is"+":"+largestOfNumbers());