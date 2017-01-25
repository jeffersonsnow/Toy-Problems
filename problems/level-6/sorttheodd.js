// Description:
//
// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
//
// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
//
// Example
//
// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(array) {
  var oddArr = [];
  for(var i = 0; i < array.length; i++){
    if(array[i] % 2 === 1){
      oddArr.push(array[i]);
    }
  }
  oddArr.sort(function(a, b)
{
    return a - b;
});
oddArr.reverse();
console.log(oddArr);
for(var j = 0; j < array.length; j++){
 if(array[j] % 2 === 1){
   var newNum = oddArr.pop();
   console.log(newNum);
   array[j] = newNum;
 }
}
  return array;
}
