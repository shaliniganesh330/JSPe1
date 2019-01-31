/* Consider this object:

 var obj = {
 "One":"1",
 "Two":"2",
 "Three":"3",
 "Four":"4"
 }
 Convert it into JavaScript array like:
 ["1","2","3","4"]*/

var input = {
    "One":"1",
    "Two":"2",
    "Three":"3",
    "Four":"4"
    }
    var output = [], item;

for (var type in input) {
    if (input.hasOwnProperty(type)) {
        item = {};
        // item.type = type;
        item= input[type];
        output.push(item);
    }
}

// display result
console.log(JSON.stringify(output));
