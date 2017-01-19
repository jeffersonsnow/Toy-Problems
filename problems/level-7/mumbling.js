// Description:
//
// This time no story, no theory. The examples below show you how to write function accum:
//
// Examples:
//
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(str){
	var newstr = str.toLowerCase().split('');
	var finstr;
for(var i = 0; i < newstr.length; i++){
	newstr[i] = newstr[i] + newstr[i].repeat(i);
}
for(var i = 0; i< newstr.length; i++){
  newstr[i] = newstr[i].charAt(0).toUpperCase() + newstr[i].slice(1);
}
	finstr = newstr.join('-');
	return finstr;
}
