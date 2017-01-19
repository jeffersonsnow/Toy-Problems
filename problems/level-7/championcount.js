// Description:
//
// Create a function that takes two arguments:
//
// 1) An array of objects which feature the season, the team and the country of the Champions League winner.
//
// 2) Country (as a string, for example, 'Portugal')
//
// You function should then return the number which represents the number of times a team from a given country has won. Return 0 if there have been no wins.
//
// For example if the input array is as follows:
//
//
//
// countWins(winnerList1, 'Spain') => should return 2
// countWins(winnerList1, 'Portugal') => should return 1
// countWins(winnerList1, 'Sportland') => should return 0


function countWins(winnerList, country) {
  // your awesome code here
  var counter = 0;
  for (var i = 0; i < winnerList.length; i++){
    if(winnerList[i].country === country){
      counter ++;
    }
  }
  return counter;
}
