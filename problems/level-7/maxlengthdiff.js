// Description:
//
// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.
//
// Find max(abs(length(x) − length(y)))
//
// If a1 or a2 are empty return -1 in each language except in Haskell where you will return Nothing.
//
// Example:
// 
// s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(s1, s2) --> 13


function mxdiflg(a1, a2) {
var maxdifference = -1;
 for(let i = 0; i < a1.length; i++) {
 for(let j = 0; j < a2.length; j++){
   if(Math.abs(Math.abs(a1[i].length) - Math.abs(a2[j].length)) > Math.abs(maxdifference)){
    maxdifference = Math.abs(Math.abs(a1[i].length) - Math.abs(a2[j].length))
   }
 }
 }
 return maxdifference;
}
