// Description:
//
// Build Tower
//
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).
//
// Tower block is represented as *

// Have fun!
//
// for example, a tower of 3 floors looks like below
//
// [
//   '  *  ',
//   ' *** ',
//   '*****'
// ]
// and a tower of 6 floors looks like below
//
// [
//   '     *     ',
//   '    ***    ',
//   '   *****   ',
//   '  *******  ',
//   ' ********* ',
//   '***********'
// ]



function towerBuilder(nFloors) {
  var tower = [];
  var block = "*";
  var space = " ";
  function blocker(n){
  if(n < 1){
    return ""
  }
  return blocker(n-1) + block;
}
function spacer(n){
  if(n<1){
    return '';
  }
  return spacer(n-1)+space;
}
  for(var i = 0; i < nFloors; i++){
    var newblock = blocker(i+1) + blocker(i);
    tower.push(newblock);
  }
  var half = (tower.length - 1) / 2;

  for(var j = 0; j < tower.length; j++){
    tower[j] = spacer(half-Math.floor(j/2)) + tower[j] + spacer(half -Math.floor(j/2));
  }
  return tower;
}

//currently I have the right amount of asterisks but I can't figure out the formating of putting in extra spaces in
