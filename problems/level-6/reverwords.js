// Description:
//
// Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Every space should stay, so you cannot use words from Prelude.
//
// Example:
//
// reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"

function reverseWords(str) {
  var newStr = str.split(" ");
  for(var i = 0; i < newStr.length; i++){
    newStr[i] = newStr[i].split("").reverse().join("");
  }
  newStr = newStr.join(" ");
  return newStr;
}
