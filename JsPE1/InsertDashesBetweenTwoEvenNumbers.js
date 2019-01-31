//  JavaScript program which accept a number as input and insert dashes (-)
//  between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8

//input number from user//
var readline  = require('readline-sync');
//Readline allows reading of a stream (such as STDIN) on a line-by-line basis.//
var str = readline.question("Enter the number\n")
var result = [str[0]];
for(var x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));