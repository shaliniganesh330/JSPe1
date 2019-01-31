//Displaying all objects with occupation as 'Programmer'//
var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

for(var i=0;i<myObj.length;i++){
   if(myObj[i].occupation=="Programmer")
   console.log(myObj[i]);
}

//Sorting the object based on the age key in the descending order//

myObj.sort(compare);

function compare(a,b){
   return b.age-a.age;
}
console.log(myObj);

var teamLeader=[];
var anotherOccupation=[];
for(var i=0;i<myObj.length;i++){
    if(myObj[i].occupation=="Team Leader")
    {
        teamLeader.push(myObj[i]);
    }else{
        anotherOccupation.push(myObj[i]);
    }
}
console.log(teamLeader);
console.log(anotherOccupation);

//map function to create a new array containing only names present in myObj.//
var names = myObj.map(function(obj) {
   return obj.name;
 });
console.log(names);
 