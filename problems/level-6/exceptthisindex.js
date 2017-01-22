// Description:
//
// Extend the array object with a function to return all elements of that array, except the ones with the indexes passed in the parameter.
//
// For example:
//
// var array = ['a', 'b', 'c', 'd', 'e'];
// var array2 = array.except([1,3]);
// // array2 should contain ['a', 'c', 'e'];
// The function should accept both array as parameter but also a single integer, like this:
//
// var array = ['a', 'b', 'c', 'd', 'e'];
// var array2 = array.except(1);
// array2 should contain ['a', 'c', 'd', 'e'];


Array.prototype.except = function(keys)
{
  var newArr = this.slice(); //initiate a new array that is a copy of the first so we can modify a new array and not the original.
  if(typeof keys == "number"){ //if the key is only one number and not an array do the following loop.
    for (var i = newArr.length; i >= 0; i--){ //Loop backwards because splicing will mess up the order of i if the loop moves forward.
   if(keys === i){
    newArr.splice(i, 1);
   }
 }
  } else if(typeof keys == "object") { //if the ket is an array (which is technically an object in JS) do the following loop.
 for (var j = newArr.length; j >= 0; j--){//again we loop backwards because of the splicing.
   if(keys.includes(j)){
    newArr.splice(j, 1);
   }
 }
  }

return newArr; //returned the modified array and not the array we initially started with.
}
