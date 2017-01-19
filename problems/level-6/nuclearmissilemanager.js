// Description:
//
// Our nuclear missible manager system is coded in Node.js. We are currently testing the system and it seams that the launchAll function does not work as expected. It should launch 5 missiles each 1 second apart. The current code tries to launch the missile #5 five times...
//
// Can you fix this for us? You know, it's pretty critical code...
//
// Note: There are 5 missiles labeled i which is a number in {0, 1, 2, 3, 4}. The missile i should be launched after i seconds.

function launchAll(launchMissile) {
for(var i = 0; i < 5; i++) {
 launch(i, launchMissile);
}
}

function launch(i, func){
setTimeout(function(){
   func(i)
   }, i*1000);
}

function launchMissile(i){
   console.log('launching ' + i);
}
launchAll(launchMissile);
