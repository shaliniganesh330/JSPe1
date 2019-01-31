// JavaScript function to find the difference of two arrays.//

//function to find difference of 2 arrays//
function differenceOf2Arrays (array1, array2) {
    const temp = [];
    array1 = array1.toString().split(',').map(Number);
    array2 = array2.toString().split(',').map(Number);
    
    for (var i in array1) {
    if(!array2.includes(array1[i])) temp.push(array1[i]);
    }
    for(i in array2) {
    if(!array1.includes(array2[i])) temp.push(array2[i]);
    }
    //sorting the array//
    return temp.sort((a,b) => a-b);
    }
    
    console.log(differenceOf2Arrays([10, 20,30,76], [10, 20,30]));
    console.log(differenceOf2Arrays([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
    