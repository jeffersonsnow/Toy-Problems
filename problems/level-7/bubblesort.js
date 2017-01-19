// Description:
//
// Bubblesort Algorithm
//
// Overview
//
// The Bubblesort Algorithm is one of many algorithms used to sort a list of similar items (e.g. all numbers or all letters) into either ascending order or descending order.
//
// Given a list (e.g.): 9, 7, 5, 3, 1, 2, 4, 6, 8
// To sort this list in ascending order using Bubblesort, you first have to compare the first two terms of the list. If the first term is larger than the second term, you perform a swap. The list then becomes: 7, 9, 5, 3, 1, 2, 4, 6, 8. (the "9" and "7" have been swapped because 9 is larger than 7 and thus 9 should be after 7)
//
// You then proceed by comparing the 2nd and 3rd terms, performing a swap when necessary, and then the 3rd and 4th term, then the 4th and 5th term, etc. When you reach the end of the list, it is said that you have completed 1 complete pass.
//
// Task
//
// Program an algorithm in your selected language that performs exactly 1 complete pass (no more, no less :D) of the Bubblesort algorithm to a list of positive integers. You may assume all arguments provided are arrays containing at least 2 positive integers.

function bubblesortOnce(intArr) {
  // Code the Bubblesort Algorithm here :D
  var swap;
  var switcher;
  for(var i = 0; i < intArr.length; i++){
    if(intArr[i] > intArr[i+1]){
     swap = intArr[i];
     switcher = intArr[i+1];
     intArr[i+1] = swap;
     intArr[i] = switcher;
     //i -1;
    }
  }

  // Hmmm ... maybe we should just use the built-in sort() method
  // to sort our array - it'll save us some time ;)
  return intArr;
	// return intArr;
}
