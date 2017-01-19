// Description:
//
// If you have completed the Tribonacci sequence kata, you would know by now that mister Fibonacci has at least a bigger brother. If not, give it a quick look to get how things work.
//
// Well, time to expand the family a little more: think of a Quadribonacci starting with a signature of 4 elements and each following element is the sum of the 4 previous, a Pentabonacci (well Cinquebonacci would probably sound a bit more italian, but it would also sound really awful) with a signature of 5 elements and each following element is the sum of the 5 previous, and so on.
//
// Well, guess what? You have to build a Xbonacci function that takes a signature of X elements - and remember each next element is the sum of the last X elements - and returns the first n elements of the so seeded sequence.
//
// Xbonacci([1,1,1,1],10)==[1,1,1,1,4,7,13,25,49,94]
// Xbonacci([0,0,0,0,1],10)==[0,0,0,0,1,1,2,4,8,16]
// Xbonacci([1,0,0,0,0,0,1],10)==[1,0,0,0,0,0,1,2,3,6]




function Xbonacci(signature,n){
  var howmanytimes = n - signature.length;
  var next = 0;
  fib = [];
  for (var i = 0; i < signature.length; i++){
    fib.push(signature[i]);
  }
  for(let i = 0; i < howmanytimes; i++){
    for(let j = fib.length -1; j >= (fib.length - signature.length); j--){
      next += fib[j];
      console.log(next);
    }
    console.log("moves on");
    fib.push(next);
    next = 0;
  }
  return fib.slice(0, n);
}
